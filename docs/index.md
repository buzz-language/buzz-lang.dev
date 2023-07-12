---
home: true
heroImage: logo.png
tagline: A small/lightweight statically typed scripting language
actions:
    - text: Guide
      link: /guide/
    - text: Reference
      link: /reference/
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

fun main([str] args) > void {
    Person me = Person{
        name = "Giann",
        age = 36,
    };

    print("Hello I'm {me.name} and I'm {me.age}.");
}
```