# Objects

An `object` is like a class, except it can't be inherited from and can't inherit from anything:

```buzz
object Person {
    static population = 0;

    str name = "Joe", | Fields can have default values
    int age = 35,

    | Method
    fun sayHello() > void {
        print("Hello {this.name}");
    }

    | Object don't have constructor but you can implement one with a static method
    static init(str name, int age) > Person {
        Person.population = Person.population + 1;

        return Person {
            name = name,
            age = age,
        };
    }
}
```

## Anonymous objects

```buzz
| Anonymous objects don't have methods, static fields or default values
fun getInfo() > obj{ str name, int age } {
    return .{
        name = "Joe",
        age = 36,
    };
}

| ...

obj{ str name, int age } info = getInfo();
```