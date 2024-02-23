# Fibers

Similar to Lua's coroutines. Buzz's fibers have their own state and stack and can be switched in and out from.
Fibers can yield from within any call depth. Any function can be wrapped in a fiber. Unlike Lua, `yield` are evaluated and dismissed
if a function is not called within a fiber and do not raise an error.
`resolve` allows to run a fiber until completion without stopping for any `yield`. It can be called after the fiber is over in order to
get the wrapped function return value.

```buzz
| Returns a string, yields numbers
| Always yields an optional type because null is returned if you resume a terminated fiber
fun count(int n) > str *> int? {  
    for (int i = 0; i < n; i = i + 1) {
        | If the function is not called in a fiber, yields are evaluated and dismissed
        | Otherwise the value is returned as `resume` result
        _ = yield i;
    }

    return "Counting is done!";
}

fun main([str] args) > void {
    | Wraps the call to `count` in a fiber, however the fiber is not started until a `resolve` or `resume` instruction
    fib<str, int?> counter = &count(10);

    int sum = 0;
    while (!counter.over()) {
        | resume returns null if nothing was yielded and/or fiber is over
        sum = sum + resume counter ?? 0;
    }

    assert(resolve counter == "Counting is done!", message: "resolve returns fiber return value");
}
```
