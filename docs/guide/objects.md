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
var me = Person{
    name = "Giann"
};
```

If a property value is a variable with the same name as the property, you can omit its name:
```buzz
var name = "Giann";

var me = Person{
    name
};
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

### Special methods

If your object has a `fun toString() > str` method, it will be called whenever you interpolate a instance of the object in a string.
```buzz
object Person {
    name: str = "Joe",

    fun toString() => this.name;
}

//...

var person = Person{};

std\print("His name is {person}"); // -> `His name is Joe`
```

Another special method is `fun collect() > void` which will be called when the object instance is collected by the garbage collector. It's useful when your object holds resources that need to be release.
```buzz
object Data {
    buffer: Buffer,

    fun collect() > void {
        buffer.deinit();
    }
}
```

## `static`
Objects can have static method and properties. Meaning they are associated with the object rather than its instances.
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

var info = getInfo();
```

## Generic types
Generic types can be used by listing them just after the object name:
```buzz
object Payload::<K, V> {
    data: {K: V},
}

var payload = Payload::<str, int>{
    data = {
        "one": 1
    },
};
```
