---
title: buzz
home: true
heroImage: logo.png
heroText: buzz
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
    details: Find bugs in your IDE rather than production
  - title: JIT compiled
    details: Uses MIR, a fast and lightweight JIT compiler
  - title: Unambiguous
    details: No implicit behavior or unexpected type coercion
  - title: Small in size and complexity
    details: Does not take much space on your drive or in your mind
  - title: Interoperability with C
    details: Call C functions easily with FFIs and embed buzz with its C API
  - title: Fibers
    details: Single-threaded cooperative multitasking
footer: MIT licensed | Copyright © 2021-present Benoit Giannangeli
---
```buzz
import "buzz:std";

enum State { todo, doing, done }

object Task {
    title: str,
    points: int?,
    state: State = .todo,

    fun score() => match (this.state) {
        .done -> this.points ?? 0,
        .doing, .todo -> 0
    };
}

fun scores(tasks: [Task]) > str *> int? {
    foreach (task in tasks) {
        _ = yield task.score();
    }
    return "scored {tasks.len()} tasks";
}

fun main() > void {
    final tasks: [Task] = [
        .{ title = "parser", points = 8, state = .done },
        .{ title = "lsp", points = 5, state = .doing },
        .{ title = "docs", points = 3 },
    ];

    var total = 0;
    final fiber = &scores(tasks);
    foreach (score in fiber) {
        total += score ?? 0;
    }

    std\print("completed points: {total}, message is {resolve fiber}");
}
```
