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
      link: https://github.com/buzz-language/buzz/releases/tag/0.4.0
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

| 👨‍🚀 buzz is a simple unambiguous scripting language
object Person {
    str name,
    int age = 18,

    fun growUp() > int {
        this.age = this.age + 1;

        return this.age;
    }
}

fun main([str] _) > void {
    var me = Person{
        name = "Giann",
        age = 36,
    };

    std.print("Hello I'm {me.name} and I'm {me.age}.");
}
```
