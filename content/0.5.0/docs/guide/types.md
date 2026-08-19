# Types

## Booleans
Either `true` or `false`
```buzz
final aBoolean: bool = true;
```

##  `null` and `void`
```buzz
final maybe: str? = null;
final mapToNothing = { "hello": void };  
```
The difference between `null` and `void` is a semantic one. `null` is mainly useful to handle the absence of data with [null safety](/guide/null-safety.html) whereas `void` is mainly used to specify that a function returns nothing.

## Numbers
Numbers can either be `int` (32 bits integers) or `double` (64 bits floating point).
```buzz
var aNumber: int = 23; // Decimal notation
aNumber = 0b110;  // Binary notation
aNumber = 0xA12F; // Hexadecimal notation
aNumber = 'A';    // Char notation

final aDouble: double = 23.123;

// You can embed a `_` anywhere in a number literal except for the start and end
final myLargeNumber = 1_000_000;
```

`double` and `int` can be compared without casting but are otherwise not compatible with each other.

## Strings
`str` represents an immutable sequence of bytes. Buzz makes no assumption about the content of a string.
```buzz
final aString: str = "hello world";
```

Strings can span accross multiple lines when using the ` delimiters:
```buzz
final multiline = `
    i'm on several
    lines
    yes
`;
```

### Interpolation
Interpolations are expressions delimited by braces within a string:
```buzz
final age = 37;

final msg = "Hello there, I'm {age} years old";
```

### Escaping
```buzz
"here's a new line: \n";
"here's a tab: \t";
"here's a brace: \{";
"here's a explicit byte \123";
```

### Checked subscript
If you make an out-of-bound access to a string you will get a runtime error. The _checked subscript_ notation will resolve to `null` if the provided index is out of bounds.
```buzz
final string = "hello world";

string[100]; // Will raise a runtime error
string[?100]; // Will return null
```

[More on strings](/reference/builtins/strings.html)

## User data
User data are buzz values that wrap a pointer to foreign data. They are mainly used when [binding to native code](/guide/calling-native-code.html).

## Patterns
Patterns are PCRE regexes. They are commonly used so chances are you are already familiar with them. You can otherwise read the [documentation](https://www.pcre.org/).
Patterns have their own buzz value type because they wrap a compiled PCRE regex. Arguably, we could lazily compile them at runtime but this would go against the philosophy of buzz which is to prevent runtime errors that could have been detected at compile time.
Patterns are delimited with `$"..."`. To use `"` in the pattern, escape it with `\`.
```buzz
final aPattern: pat = $"hello [a-z]+";
```
[More on patterns](/reference/builtins/patterns.html)

## Data structures

### Lists
Lists are a sequence of a given type.
```buzz
final words = ["hello", "world", "yes"];
```

#### Immutability
They are immutable by default. To get a mutable list, precede it with the `mut` keyword:
```buzz
final list: mut [int] = mut [ 1, 2, 3 ];
final immutableList: [int] = [ 1, 2, 3 ];

list.append(4); // Ok
immutableList.append(4); // Will not compile

list[0] = 10; // Ok
immutableList[0] = 10; // Will not compile
```

#### Checked subscript
If you make an out-of-bound access to a list you will get a runtime error. The _checked subscript_ notation will resolve to `null` if the provided index is out of bounds.
```buzz
final list = [ 1, 2, 3 ];

list[100]; // Will raise a runtime error
list[?100]; // Will return null
```

[More on lists](/reference/builtins/lists.html)

### Ranges
Ranges are useful to create quick list of integers. They can also be used in `foreach` statements:
```buzz
foreach (i in 0..n) {
    // ...
}

// Boundaries can be descendant
final range: rg = n..0;

// You can make a list from it
final list = range.toList(); // -> [n, n-1, ... , 0]

// You can access its boundaries
std\print("My range is {range.low()}..{range.high()}");
```

### Maps
Maps are key-value records. Order is not guaranted.
```buzz
final aMap: {str: int} = {
    "one": 1,
    "two": 2,
    "three": 3,
};
```

#### Immutability
They are immutable by default. To get a mutable map, precede it with the `mut` keyword:
```buzz
final map = mut { "one": 1 };
final immutableMap = { "one": 1 };

map["two"] = 2; // Ok
immutableMap["two"] = 2; // Will not compile
```

[More on maps](/reference/builtins/maps.html)

## `any`

A variable typed with `any` can hold any value.
```buzz
var anything: any = "hello";

anything = 12;

anything = true;
```
You can't do much with that kind of variable except passing it around.
In order to actually use the underlying value, you have to cast it back to a concrete type.
```buzz
final anything: any = "hello";

if (anything as aString: str) {
    print(aString);
}
```
You can also use the `as?` notation which will result in a `null` if the value is not of the expected type:


```buzz
final anything: any = "hello";

final something = anything as? int;            // -> null
final somethingElse = (anything as? int) ?? 0; // Using `??` to get a default value
```

## Type values

In buzz, types can be manipulated like any other values. You can get the type of a value using the `typeof` operator.
```buzz
final myType: type = <[str]>;

final list = [ "one", "two", "three" ];

typeof list == myType;
```

## Foreign structs and unions

Special types to hold foreign data, see [FFI](/guide/ffi.html).
