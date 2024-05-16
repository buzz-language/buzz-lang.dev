# Functions

Functions start with the keyword `fun`. The return type must be specified after a `>`. If the functions returns nothing the return type is `void`.

```buzz
fun sayHiTo(str name, str? lastName, int age) > str {
    return "Hi {name} {lastName ?? ""}!"
}
```

If the function can yield (see [Fibers](/guide/fibers.html)) or contains a function call to another function that can yield, the yield type must be specified after another `>`.
```buzz
fun mayYield() > str *> int? {
    |...
}
```

## Arrow function
Function which body would only be `return <expression>` can be written with an arrow function. Arrow functions can omit their return type which will be inferred from the expression returned.
```buzz
fun count(str name) -> name.len();
```

## Arguments
buzz makes the opinionated choice that any function argument after the first one needs to be labeled for readability.
That's why, when called, only the first argument name of a function can be omitted. Argument order is not required so long as they are named.

```buzz
sayHiTo("Joe", age: 35, lastName: "Doe"); | -> "Hi Joe Doe!"
```

Arguments with default value can be omitted completely:
```buzz
fun doSomething(int x, bool isAvailable = true) > void {
    | ...
}

| Then calling it
doSomething(12);
```

If the argument value is a variable with the same name as the argument, you can omit the name:
```buzz
fun call(str firstname, str lastname) > void {
    | ...
}

var lastname = "Doe";
call("joe", lastname)
```

## Errors
Any uncaught error type that can arise within the function must be specified in its signature after `!>` (see [Errors](/guide/errors.html)):
```buzz
fun somethingThatCanFail() > str !> FormatError, UnexpectedError {
    | ...
}
```

## First-class citizen
Functions are first-class citizens. Meaning they can be passed around just like any other buzz value:

```buzz
Function() fn = fun () > void -> print("hello world"); | Arrow function

fn(); | -> "hello world"
```

## Extern functions
Functions that refers to a C/Zig function, are prefixed with `extern` (see [Calling C/Zig functions](/guide/calling-native-code.html))
```buzz
extern fun assert(bool condition, str message) > void;
```

## `main`
The `main` function is the entry point of your program. Its signature must be.
```buzz
fun main([str] args) > int {
    |...
}

| or

fun main([str] args) > void {
    |...
}
```

## `test`
`test` blocks are functions that will be executed when invoked with `buzz --test`.
```buzz
test "Some test" {
    assert(something() == 12, message: "Could use `something`");
}
```

## Generic types
Generic types can be used by listing them just after the function name:
```buzz
fun countMap::<K, V>({K: V} map) > int {
    return map.size();
}

{str: int} map = {
    "one": 1,
    "two": 2,
    "three": 3,
};

countMap::<str, int>(map) == 3;
```
