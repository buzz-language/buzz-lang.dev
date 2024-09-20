---
home: true
heroImage: logo.png
tagline: A small/lightweight statically typed scripting language
actions:
    - text: Guide
      link: /guide/
    - text: Reference
      link: /reference/
    - text: Try it
      link: /repl
    - text: Latest release
      link: https://github.com/buzz-language/buzz/releases/tag/0.5.0
      type: secondary
features:
  - title: Statically typed
    details: Find out bugs in your IDE rather than in production
  - title: JIT compiled
    details: Uses MIR, a fast and lightweight JIT compiler
  - title: Unambiguous
    details: No implicit behavior or unexpected type coercion
  - title: Small in size and complexity
    details: Does not take much space on your drive or in your mind
  - title: Interoperability with C
    details: Call C functions easily with FFIs and embed buzz with its C API
  - title: Fibers
    details: Single threaded cooperative multitasking
footer: MIT licensed | Copyright © 2021-present Benoit Giannangeli
---
```buzz
import "std";

fun fibonacci(n: int) > void *> int? {
    var n1 = 0;
    var n2 = 1;
    var next: int? = null;

    foreach (_ in 0..n) {
        _ = yield n1;
        next = n1 + n2;
        n1 = n2;
        n2 = next!;
    }
}

fun main(args: [str]) > void {
    const N = std\parseInt(args[?0] ?? "10") ?? 10;

    foreach (n in &fibonacci(N)) {
        std\print("{n}");
    }
}
```
