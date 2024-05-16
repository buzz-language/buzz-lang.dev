# Foreign Function Interface

When you want to call a foreign function from a buzz program you can use [buzz's API](/guide/calling-native-code.html) to build the function call by:
1. Taking its arguments from the stack
2. Converting them to the expected types
3. Make the call to the foreign function
4. Convert its result to a buzz value
5. Push it on the stack

This is called a binding and writing those can be time consuming for very little added value to your program. Another option is using the FFI feature of buzz which will generate a JIT compiled function that will do this work for you.

## `zdef` statements

`zdef` statements can only occur in the global scope. They have two functions: declare the type of the foreign functions and specify which library they are bound to.
```buzz
zdef("/path/to/libforeign", "fn hello(name: [*:0]const u8) void;");
zdef("/path/to/libforeign", `
    pub const AStruct = extern struct {
        id: u32,
        name: [*:0]const u8,
    };
`);
zdef("/path/to/libforeign", "fn get_id(data: *Data) u32;")
```

The definitions are written in C ABI compatible zig code. Once you've declared your interface with `zdef`s. You can use it just like any other buzz function, assuming you use the appropriate buzz values.
```buzz
import "ffi";

|...

hello(ffi.cstr("world"));

AStruct data = AStruct{
    name = ffi.cstr("hello"),
    id = 42.0,
};

get_id(data) == 42;
```

::: tip
When a `[*:0]const u8` pointer is expected, you can provide a buzz string. Note however that we use the `cstr` helper which will add `\0` to the end of the string.
Avoid using a buzz strings that has multiple `\0` embedded in them.
:::

`struct` instances are always passed by reference right now (passing a struct by value can be complex depending on your system ABI). This is why you can pass them directly to functions expecting pointer to a struct.

## Pointers

For any other type of pointers. You can use the `Buffer` object provided by the [buffer standard library](/reference/std/buffer.html).
```buzz
zdef("/path/to/libforeign", "fn sum(values: [*]i32, len: i32) u32;");

|...

Buffer buffer = Buffer.init();

buffer.writeZ::<int>("i32", values: [1, 2, 3]);

sum(buffer.ptr(), len: 3) == 6;
```

To write a list of structs, you must use `writeStruct`.
```buzz
buffer.writeStruct(<Data>, Data, values: [data1, data2, datae3]);
```

## Supported zig types and statements

Here's the list of supported types and their buzz counterparts:
| Zig type        | buzz type      |
|-----------------|----------------|
| `c_int`         | `int`          |
| `u8`            | `int`          |
| `i8`            | `int`          |
| `u16`           | `int`          |
| `i16`           | `int`          |
| `i32`           | `int`          |
| `c_uint`        | `float`        |
| `u32`           | `float`        |
| `i64`           | `float`        |
| `f32`           | `float`        |
| `f64`           | `float`        |
| `u64`           | `ud`           |
| `usize`         | `ud`           |
| `bool`          | `bool`         |
| `void`          | `void`         |
| pointers        | `ud`           |
| `extern struct` | foreign struct |
| `opaque struct` | foreign struct |
| `extern union`  | foreign struct |
