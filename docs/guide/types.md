# Types

## Booleans
Either `true` or `false`
```buzz
const aBoolean = true;
```

##  `null` and `void`
```buzz
const maybe: str? = null;
const mapToNothing = { "hello": void };  
```
The difference between `null` and `void` is a semantic one. `null` is mainly useful to handle the absence of data with [optionals](/guide/optionals.html) whereas `void` is mainly used to specify that a function returns nothing.

## Numbers
Numbers can either be `int` (32 bits integers) or `float` (64 bits floating point).
```buzz
var aNumber = 23; // Decimal notation
aNumber = 0b110;  // Binary notation
aNumber = 0xA12F; // Hexadecimal notation
aNumber = 'A';    // Char notation

const aFloat = 23.123;

// You can embed a `_` anywhere in a number literal except for the start and end
const myLargeNumber = 1_000_000;
```

`float` and `int` can be compared without casting but are otherwise not compatible with each other.

## Strings
`str` represents an immutable sequence of bytes. Buzz makes no assumption about the content of a string.
```buzz
const aString = "hello world";
```

Strings can span accross multiple lines when using the ` delimiters:
```buzz
const multiline = `
    i'm on several
    lines
    yes
`;
```

### Interpolation
Interpolations are expressions delimited by braces within a string:
```buzz
const age = 37;

const msg = "Hello there, I'm {age} years old";
```

### Escaping
```buzz
"here's a new line: \n";
"here's a tab: \t";
"here's a brace: \{";
"here's a explicit byte \123";
```

[More on strings](/reference/builtins/strings.html)

## User data
User data are buzz values that wrap a pointer to foreign data. They are mainly used when [binding to native code](/guide/calling-native-code.html).

## Patterns
Patterns are PCRE regexes. They are commonly used so chances are you are already familiar with them. You can otherwise read the [documentation](https://www.pcre.org/).
Patterns have their own buzz value type because they wrap a compiled PCRE regex. Arguably, we could lazily compile them at runtime but this would go against the philosophy of buzz which is to prevent runtime errors that could have been detected at compile time.
Patterns are delimited with `$"..."`. To use `"` in the pattern, escape it with `\`.
```buzz
const aPattern = $"hello [a-z]+";
```
[More on patterns](/reference/builtins/patterns.html)

## Data structures

### Lists
Lists are a sequence of a given type.
```buzz
const words = ["hello", "world", "yes"];
```
[More on lists](/reference/builtins/lists.html)

### Ranges
Ranges are useful to create quick list of integers. They can also be used in `foreach` statements:
```buzz
foreach (i in 0..n) {
    // ...
}

// Boundaries can be descendant
const range = n..0;

// You can make a list from it
const list = range.toList(); // -> [n, n-1, ... , 0]

// You can access its boundaries
std\print("My range is {range.low}..{range.high}");
```

### Maps
Maps are key-value records. Order is not guaranted.
```buzz
const aMap = {
    "one": 1,
    "two": 2,
    "three": 3,
};
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
const anything: any = "hello";

if (anything as aString: str) {
    print(aString);
}
```
You can also use the `as?` notation which will result in a `null` if the value is not of the expected type:


```buzz
const anything: any = "hello";

const something = anything as? int;            // -> null
const somethingElse = (anything as? int) ?? 0; // Using `??` to get a default value
```

## Type values

In buzz, types can be manipulated like any other values. You can get the type of a value using the `typeof` operator.
```buzz
const myType = <[str]>;

const list = ["one", "two", "three"];

typeof list == myType;
```

## Foreign structs and unions

Special types to hold foreign data, see [FFI](/guide/ffi.html).
