# buzz API

First, define the buzz interface. The `extern` keyword means that buzz will look for the function in a native library loaded for this imported module:

```buzz
// mylib.buzz
namespace mylib;

export extern fun assert(condition: bool, message: str) > void;
```

Then implement it in Zig or C using the buzz API. A native library exposes one lookup function named after the library. That function receives the Buzz symbol name and returns the matching native function pointer.

```zig
// buzz_mylib.zig
const std = @import("std");
const api = @import("buzz_api.zig");

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

pub export fn mylib(symbol: [*:0]const u8) callconv(.c) ?api.NativeFn {
    if (std.mem.eql(u8, std.mem.span(symbol), "assert")) {
        return &assert;
    }

    return null;
}
```

Build a dynamic library for it and you can use it in your buzz code:

```buzz
// main.buzz
import "mylib";

fun main(_: [str]) > void {
    mylib\assert(1 + 1 == 2, message: "Congrats on doing math!");
}
```

::: tip
The API is not yet stable and moves a lot. That's why you won't find any documentation for it here.
:::
