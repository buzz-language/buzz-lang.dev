# Errors

Functions must specify which error they can raise with `!> type1, type2, ...`. Error can't be raised in the global scope. `test` functions ignore errors.

```buzz
enum(str) MyErrors {
    failed = "Something failed",
    bad = "Something bad",
    ohno = "Oh no!",
}

enum(str) OtherErrors {
    failed = "Something failed",
    bad = "Something bad",
    ohno = "Oh no!",
}

fun willFail() > int !> MyErrors, OtherErrors, str {
    int random = rand();
    if (random == 1) {
        throw MyErrors.failed;
    } else if (random == 0) {
        throw OtherErrors.failed;
    }

    throw "something else";

    return 0;
}

| Use default value in case of any error
int result = willFail() catch 0;

| Try catch works as you would expect
try {
    willFail();
} catch (str error) {
    print("Caught error {error}");
} catch {
    print("Catches everything");
}

| Throwing an object instance with a `message` field will print the message
throw .{ message = "Something's wrong" } | -> Error: Something's wrong
throw SomeObject{ number = 12 }          | -> Error: object instance 0x1feb12 `SomeObject`
```