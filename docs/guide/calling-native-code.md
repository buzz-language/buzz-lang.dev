# Buzz API

First, define the buzz interface. The `extern` keyword means that buzz will look for a dynamic library named `libmylib.dylib/so/dll`:

```buzz
| mylib.buzz
extern fun assert(bool condition, str message) > void
```

Then implement it in Zig or C using the [buzz_api](https://github.com/buzz-language/buzz/blob/main/lib/buzz_api.zig):

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
    const condition: bool = ctx.vm.bz_peek(1).bz_valueToBool();

    if (!condition) {
        ctx.vm.bz_throw(ctx.vm.bz_peek(0));
    }

    return 0;
}
```

Build a dynamic library for it and you can use it in your buzz code:

```buzz
| main.buzz
import "mylib"

fun main([str] args) > void {
    assert(1 + 1 == 2, message: "Congrats on doing math!");
}
```
