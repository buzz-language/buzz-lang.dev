# Syntax

## Comments

Comments are any text following `//` up until a newline.
```buzz
// A comment
std\print("Comment ended with a newline");
```

## Variables and identifiers
A variable declaration is a qualifier (either `var` or `final`) followed by an identifier and a type which can be omitted.
```buzz
final hello: str = "hello";
var bye = "bye"; // Here the `str` type will be inferred from the initial value
```

An identifier must start with a letter and can consist of letters, numbers and the `_` character.
```buzz
final helloWorld2 = "valid";
final hello_world = "valid too";
```

However, you can actually use anything as an identifier if you surround it with the `@"..."` notation.
```buzz
final @"this is valid too!" = "hello";
```

A nullable variable can omit its initial value, which will automatically be `null`:
```buzz
var maybe: str?;

assert(maybe == null);
```

### `final`
A `final` variable can only be assigned once.
```buzz
final hello = "hello";

hello = "bye"; // Not allowed
```

### Mutability
`final` and `var` control whether a variable can be assigned again. They do not make the value itself mutable.

Scalar values like numbers, booleans and strings are immutable. Composite values like lists, maps and object instances are also immutable by default:
```buzz
final list = [1, 2, 3];

list[0] = 10; // Not allowed
```

Use `mut` when you need to change a composite value:
```buzz
final list = mut [1, 2, 3];

list[0] = 10;
list.append(4);
```

The same rule applies to maps and object instances:
```buzz
final map = mut { "one": 1 };
map["two"] = 2;
```

Object methods that mutate `this` must also be marked with `mut`:
```buzz
object Counter {
    value: int = 0,

    mut fun increment() > void {
        this.value = this.value + 1;
    }
}
```

Object properties declared with `final` can only be assigned during initialization, even when the object instance is mutable.

## Operators

### Comparison
```buzz
"hello" == "hello";
12 != 13;
12 >= 12;
12 <= 12;
12 > 11;
12 < 13;
```
`int` and `double` can be compared with one another.

### Arithmetic
```buzz
12 + 12 == 24;
12 - 12 == 0;
12 * 12 == 144;
12 / 12 == 1;
12 % 12 == 0;
```
Arithmetic operators are allowed between numbers of the same type.

### Logical
```buzz
12 > 3 and 5 < 12;
12 > 3 or 12 < 5;
```

### Concatenation
The `+` operator can also be used to concatenate strings, lists or maps (of the same type).
```buzz
"hello " + "world" == "hello world";
[ 1,2,3 ] + [ 3, 4, 5]      // -> [ 1, 2, 3, 3, 4, 5, ]
{ "one": 1 } + { "two": 2 } // -> { "one": 1, "two": 2 }
```

### Bitwise
```buzz
15 << 3 == 120; // shift left
15 >> 3 == 1;   // shift right
12 & 23 == 4    // and
15 ^ 3 == 12;   // xor
15 | 3 == 15;   // or
~15 == -16;     // not
```

### Null safety
```buzz
mightBeNull ?? defaultValue; // Will result in `defaultValue` if `mightBeNull` is null
```

See [Null safety](/guide/null-safety.html).

### Type operators
```buzz
something is str;  // true if `something` is of type `str`
something as? int; // if `something` is not an `int`, will result in a `null`
```

See [Null safety](/guide/null-safety.html), [`any` type](/guide/types.html#any).

```buzz
typeof myList == <[int]>; // returns type of expression
```
