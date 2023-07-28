# Error handling

## Throw an error
Any type of value can be thrown. Error can't be raised in the global scope. `test` functions ignore errors.
```buzz
throw "This failed";

enum(str) MyErrors {
    failed = "Something failed",
    bad = "Something bad",
    ohno = "Oh no!",
}

throw MyErrors.ohno;
```

When throwing an object instance, if the object has a `str message` field, its content will be printed instead of the object name.
```buzz
throw .{ message = "Something's wrong" } | -> Error: Something's wrong
throw SomeObject{ number = 12 }          | -> Error: object instance 0x1feb12 `SomeObject`
```

## Function signatures
Functions must specify which error they can raise with `!> type1, type2, ...`. The compiler will detect any unhandled error and require you to either specify it in the function signature or catch the error.
```buzz
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
```

When calling a function that can throw an error, you can choose to discard the error by providing a default value.
```buzz
| If `willFail` throws an error, `0` will be returned
int result = willFail() catch 0;
```

## Try/catch
Try/catch works as you would expect. If you omit the error type, it'll catch any error.
```buzz
try {
    willFail();
} catch (str error) {
    print("Caught error {error}");
} catch {
    print("Catches everything");
}
```