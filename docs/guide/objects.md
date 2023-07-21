# Objects

An `object` is a struct-like data structures. 
```buzz
object Person {
    str name = "Joe", | Fields can have default values
    int age = 35,
}
```

## Instanciation
Instanciating an object is simple. Properties with default values can be omitted.
```buzz
Person me = Person{
    name = "Giann"
};
```

## Methods
Methods are function associated with an object. Within a method you can use the current instance of the object with `this`.
```buzz
object Person {
    str name = "Joe", | Fields can have default values
    int age = 35,

    | Method
    fun sayHello() > void {
        print("Hello {this.name}");
    }
}
```

## `static`
Objects can have static method and properties. Meaning they are associated with the object rather than its instances.
Objects don't have constructors but you can use a static method to write one.
```buzz
object Person {
    |...

    static int population = 0;

    static fun init(str name) > Person {
        Person.population = Person.population + 1;

        return Person{
            name = name,
        };
    }
}
```

## Anonymous objects
Anonymous objects don't have methods, static fields or default values and are identified with the keyword `obj`.
```buzz
fun getInfo() > obj{ str name, int age } {
    return .{
        name = "Joe",
        age = 36,
    };
}

| ...

obj{ str name, int age } info = getInfo();
```