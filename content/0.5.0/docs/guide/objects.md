# Objects

An `object` is a struct-like data structures. 
```buzz
object Person {
    name: str = "Joe", // Fields can have default values
    age: int = 35,
}
```

## Instanciation
Instanciating an object is simple. Properties with default values can be omitted.
```buzz
final me = Person{
    name = "Giann"
};
```

If a property value is a variable with the same name as the property, you can omit its name:
```buzz
final name = "Giann";

final me = Person{
    name
};
```

## Immutability
Objects are immutable by default. To get a mutable instance, use the `mut` keyword.
```buzz
final person = Person{
    name = "Joe"
};
final mutablePerson = mut Person{
    name = "John"
};

person.name = "John"; // Will not compile
mutablePerson.name = "Joe"; // Will compile
```

## `final` properties
Properties declared `final` can only be assigned once even if the instance if mutable.
```buzz
object Person{
    final name: str 
}

final person = mut Person{
    name = "Joe"
};

person.name = "John"; // Won't compile
```

## Methods
Methods are function associated with an object. Within a method you can use the current instance of the object with `this`.
```buzz
object Person {
    name: str = "Joe", // Fields can have default values
    age: int = 35,

    // Method
    fun sayHello() > void {
        std\print("Hello {this.name}");
    }
}
```

### Mutating methods
Methods that will modify the instance must be declared with the `mut` keyword.
```buzz
object Person {
    // ...

    mut fun getOlder() > void {
        this.age = this.age + 1;
    }

    // ...
}
```

### Special methods

#### `toString`
If your object has a `fun toString() > str` method, it will be called whenever you interpolate a instance of the object in a string.
```buzz
object Person {
    name: str = "Joe",

    fun toString() => this.name;
}

//...

final person = Person{};

std\print("His name is {person}"); // -> `His name is Joe`
```

##### `collect`
If your object has a `fun collect() > void` method, it which will be called just before the object instance is collected by the garbage collector. It's useful when your object holds resources that need to be released.
```buzz
object Data {
    buffer: Buffer,

    fun collect() > void {
        buffer.deinit();
    }
}
```

## `static`
Objects can have static methods and properties. Meaning they are associated with the object rather than its instances.
Objects don't have constructors but you can use a static method to write one.
```buzz
object Person {
    //...

    static population: int = 0;

    static fun init(name: str) > Person {
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
fun getInfo() > obj{ name: str, age: int } {
    return .{
        name = "Joe",
        age = 36,
    };
}

// ...

final info = getInfo();
```

### Tuples
Tuples are anonymous object for which you omit properties name.
```buzz
fun getTuple > obj{ :int, :str, :[int] } {
    return .{ 42, "hello", [ 1, 2, 3 ]};
}
```

You can access its properties like so:
```buzz
final tuple = .{ 42, "John" };

std\print("I'm {tuple@"1"} and i'm {tuple@"0"}");
```

## Generic types
Generic types can be used by listing them just after the object name:
```buzz
object Payload::<K, V> {
    data: {K: V},
}

final payload = Payload::<str, int>{
    data = {
        "one": 1
    },
};
```
