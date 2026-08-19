# Functions

Functions start with the keyword `fun`. The return type must be specified after a `>`. If the functions returns nothing the return type is `void`.

```buzz
fun sayHiTo(name: str, lastName: str?, age: int) > str {
    return "Hi {name} {lastName ?? ""}!"
}
```

If the function can yield (see [Fibers](/guide/fibers.html)) or contains a function call to another function that can yield, the yield type must be specified after `*>`. The yield type is always nullable.
```buzz
fun mayYield() > str *> int? {
    //...
}
```

## Arrow function
Function which body would only be `return <expression>` can be written with an arrow function. Arrow functions can omit their return type which will be inferred from the expression returned.
```buzz
fun count(name: str) => name.len();
```

## Arguments
buzz makes the opinionated choice that any function argument after the first one needs to be labeled for readability.
That's why, when called, only the first argument name of a function can be omitted. Argument order is not required so long as they are named.

```buzz
sayHiTo("Joe", age: 35, lastName: "Doe"); // -> "Hi Joe Doe!"
```

Arguments with default value can be omitted completely:
```buzz
fun doSomething(x: int, isAvailable: bool = true) > void {
    // ...
}

// Then calling it
doSomething(12);
```

If the argument value is a variable with the same name as the argument, you can omit the name:
```buzz
fun call(firstname: str, lastname: str) > void {
    // ...
}

final lastname = "Doe";
call("joe", lastname)
```


If an argument must be in the function's signature (e.g. you're implementing a protocol), but you don't use it in the function's body, you must name it `_` otherwise the compiler will complain about it not being used.
```
fun doSomething(_: str, value: int) > int {
    return value * 2;
}
```

## Errors
Any uncaught error type that can arise within the function must be specified in its signature after `!>` (see [Errors](/guide/errors.html)):
```buzz
fun somethingThatCanFail() > str !> FormatError, UnexpectedError {
    // ...
}
```

## First-class citizen
Functions are first-class citizens. Meaning they can be passed around just like any other buzz value:

```buzz
final fn = fun () > void => print("hello world"); // Arrow function

fn(); // -> "hello world"
```

## Extern functions
Functions that refers to a C/Zig function, are prefixed with `extern` (see [Calling C/Zig functions](/guide/calling-native-code.html))
```buzz
extern fun assert(condition: bool, message: str) > void;
```

## `main`
The `main` function is the entry point of your program. Its signature must be.
```buzz
fun main(args: [str]) > int {
    //...
}

// or

fun main(args: [str]) > void {
    //...
}

// or

fun main() > void {
    //...
}
```

## `test`
`test` blocks are functions that will be executed when invoked with `buzz --test`.
```buzz
test "Some test" {
    std\assert(something() == 12, message: "Could use `something`");
}
```

## Generic types
Generic types can be used by listing them just after the function name:
```buzz
fun countMap::<K, V>(map: {K: V}) > int {
    return map.size();
}

final map = {
    "one": 1,
    "two": 2,
    "three": 3,
};

countMap::<str, int>(map) == 3;
```
