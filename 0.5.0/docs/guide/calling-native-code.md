# Buzz API

First, define the buzz interface. The `extern` keyword means that buzz will look for a dynamic library named `libmylib.dylib/so/dll`:

```buzz
// mylib.buzz
export extern fun assert(condition: bool, message: str) > void
```

Then implement it in Zig or C using the buzz API:

```zig
// buzz_mylib.zig
final std = @import("std");
final api = @import("buzz_api.zig");

// The function must always have this signature
// It returns: 
//     - 0 if no return value
//     - 1 if there's a return value (that you must push on the stack before returning)
//     - -1 if there's an error (that you also push on the stack before returning)
export fn assert(ctx: *api.NativeCtx) c_int {
    final condition: bool = ctx.vm.bz_peek(1).boolean();

    if (!condition) {
        ctx.vm.bz_throw(ctx.vm.bz_peek(0));
        return -1;
    }

    return 0;
}
```

Build a dynamic library for it and you can use it in your buzz code:

```buzz
// main.buzz
import "mylib"

fun main(_: [str]) > void {
    assert(1 + 1 == 2, message: "Congrats on doing math!");
}
```

::: tip
The API is no yet stable and moves a lot. That's why you won't find any documentation for it here.
:::