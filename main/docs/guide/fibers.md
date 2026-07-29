# Fibers

Buzz fibers are lightweight execution contexts inspired by Lua coroutines. Each fiber keeps its own call stack, local variables, and current
execution state, which means buzz can pause an entire chain of function calls and later continue it exactly where it stopped. Because that
switching is explicit and single-threaded, fibers are a simple way to pause and resume work, produce values one step at a time, and let the
caller decide when execution continues, without callbacks or hand-written state machines.

## Using fibers

You create a fiber by prefixing a function call with
`&`, and the wrapped call starts only when you `resume` it, `resolve` it, or iterate over it with `foreach`.

Functions that may suspend declare a yield type after `*>`:

```buzz
fun work() > str *> int {
    // ...
}
```

That yield type is the type produced by `yield`, and it does not need to be nullable. What changes is how you call the function:

- `work()` is a regular call. The function runs synchronously to completion.
- `&work()` creates a `fib<str, int>` that you can drive manually.

Because a fiber owns the whole call stack, a function can yield from any call depth. If `top()` calls `middle()`, which calls `bottom()`, a
`yield` inside `bottom()` can suspend the fiber created from `&top()`. As a consequence, a function needs a yield type in its signature not
only when it uses `yield` directly, but also when it calls another function that might yield.

```buzz
import "buzz:std";

fun leaf() > void *> int {
    _ = yield 1;
}

fun wrapper() > void *> int {
    leaf();
}

fun main() > void {
    var sum = 0;

    foreach (n in &wrapper()) {
        sum += n;
    }

    std\assert(sum == 1, message: "yield can happen deeper in the call stack");
}
```

If `wrapper()` were declared as `fun wrapper() > void`, buzz would reject it because calling `leaf()` means `wrapper()` can also suspend when
it runs inside a fiber.

## Regular Call Or Fiber Call

A yieldable function can still be called like any other function. Without `&`, each `yield` expression evaluates to its operand and execution
continues immediately, so yielded values are discarded instead of being exposed to the caller.

```buzz
import "buzz:std";

fun incrementAfterPause(n: int) > int *> int {
    final value = yield n;
    return value + 1;
}

fun main() > void {
    std\assert(incrementAfterPause(2) == 3, message: "regular calls stay synchronous");

    final fiber = &incrementAfterPause(7);
    std\assert(resume fiber == 7, message: "resume returns the yielded value");
    std\assert(resume fiber == null, message: "completed fibers resume to null");
    std\assert(resolve fiber == 8, message: "resolve returns the final value");
    std\assert(fiber.over(), message: "fiber is over");
}
```

`yield n` is an expression. When the function is running inside a fiber, `resume fiber` returns `n`, execution pauses, and when the fiber is
resumed the whole expression evaluates to `n` inside the function. That is why `final value = yield n;` works.

## `resume` And `resolve`

`resume fiber` advances the fiber until the next `yield` or until the function completes. Its type is always nullable because the fiber might
finish without producing another yielded value:

```buzz
final fiber = &incrementAfterPause(7);

resume fiber; // -> 7
resume fiber; // -> null
```

`resolve fiber` is different: it keeps running the fiber until the wrapped function returns, discards any yielded values along the way, and
returns the function's return value. It can also be used after the fiber is already over to read that return value again.

## Iterating Over A Fiber

Fibers are iterable. `foreach` repeatedly resumes the fiber until it is over and gives you each yielded value:

```buzz
import "buzz:std";

fun numbers(limit: int) > void *> int {
    foreach (n in 0..limit) {
        _ = yield n;
    }
}

fun main() > void {
    var sum = 0;

    foreach (n in &numbers(4)) {
        sum += n;
    }

    std\assert(sum == 6, message: "fiber iteration visits each yielded value");
}
```

This is often the simplest way to consume a fiber when you only care about its yielded values.

## Inspecting The Current Fiber

Inside a running fiber, `std\currentFiber()` returns the active fiber, and `fiber.isMain()` tells you whether it is the main fiber:

```buzz
import "buzz:std";

fun inspect() > void *> void {
    std\assert(std\currentFiber() is fib<void, void>, message: "current fiber is available");
    std\assert(!std\currentFiber().isMain(), message: "wrapped call is not the main fiber");
}

fun main() > void {
    std\assert(std\currentFiber().isMain(), message: "main runs in the main fiber");
    _ = resolve &inspect();
}
```

`yield`, `resume`, and `resolve` are only valid inside function bodies. They are not allowed at the top level of a script.
