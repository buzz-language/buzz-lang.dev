# Syntax

## Comments

Comments are any text following a `|` up until a new line.
```buzz
| A comment
print("Comment ended with a new line");
```

## Variables and identifiers
A variable declaration is a type followed by an identifier and an initial value;
```buzz
str hello = "hello";
```

::: tip
buzz rarely infers types. This is a conscious choice of buzz which claims to be **unambiguous**.
:::

An identifier must start with a letter and can consist of letters, numbers and the `_` character.
```buzz
str helloWorld2 = "valid";
str hello_world = "valid too";
```

However you can actually use anything as an identifier if you surround it with the `@"..."` notation.
```buzz
str @"this is valid too!" = "hello";
```

### Constants
A constant is prefixed with the `const` keyword. It means the variable can't change.
```buzz
const str hello = "hello";

hello = "bye"; | Not allowed
```
Objects, list and maps variables are only reference to them. Meaning you can't assign a new list to a constant variable but you can modify the list itself.
```buzz
const [int] list = [ 1, 2, 3 ];

list = [ 4, 5, 6 ]; | Not allowed
list.append(12);    | Allowed
```

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
`int` and `float` can be compared with one another.

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
[ 1,2,3 ] + [ 3, 4, 5]      | -> [ 1, 2, 3, 4, 5 ]
{ "one": 1 } + { "two": 2 } | -> { "one": 1, "two": 2 }
```

### Bitwise
```buzz
15 << 3 == 120; | shift left
15 >> 3 == 1;   | shift right
12 & 23 == 4    | and
15 ^ 3 == 12;   | xor
15 \ 3 == 15;   | or
~15 == -16;     | not
```

### Null safety
```buzz
mightBeNull ?? defaultValue; | Will result in `defaultValue` if `mightBeNull` is null
```

See [Null safety](/guide/null-safety.html).

### Downcasting and `any` unwrapping
```buzz
something is str;  | true if `something` is of type `str`
something as? int; | if `something` is not an `int`, will result in a `null`
```

See [Null safety](/guide/null-safety.html), [`any` type](/guide/types.html#any).

## Keywords

Here's the exhaustive list of buzz's keywords:
- [`and`](/guide/syntax.html#logical)
- [`any`](/guide/types.html#any)
- [`as`](/guide/control-flow.html#if)
- [`band`](/guide/syntax.html#bitwise)
- [`bool`](/guide/syntax.html#bitwise)
- [`bor`](/guide/syntax.html#bitwise)
- [`break`](/guide/control-flow.html#break-and-continue)
- [`catch`](/guide/errors.html)
- [`const`](/guide/syntax.html#constants)
- [`continue`](/guide/control-flow.html#break-and-continue)
- [`do`](/guide/control-flow.html)
- [`else`](/guide/control-flow.html)
- [`enum`](/guide/enums.html)
- [`export`](/guide/import-export.html)
- [`extern`](/guide/functions.html)
- [`false`](/guide/types.html#booleans)
- [`fib`](/guide/fibers.html)
- [`float`](/guide/syntax.html#numbers)
- [`for`](/guide/control-flow.html)
- [`foreach`](/guide/control-flow.html)
- [`from`](/guide/import-export.html)
- [`fun`](/guide/functions.html)
- [`if`](/guide/control-flow.html#if)
- [`import`](/guide/import-export.html)
- [`in`](/guide/control-flow.html#foreach)
- [`int`](/guide/syntax.html#numbers)
- [`is`](/guide/syntax.html#downcasting-and-any-unwrapping)
- [`null`](/guide/types.html#null-and-void)
- [`obj`](/guide/objects.html)
- [`object`](/guide/objects.html)
- [`or`](/guide/syntax.html#logical)
- [`pat`](/guide/types.html#patterns)
- [`protocol`](/guide/protocols.html)
- [`resolve`](/guide/fibers.html)
- [`resume`](/guide/fibers.html)
- [`return`](/guide/functions.html)
- [`static`](/guide/objects.html)
- [`str`](/guide/types.html#strings)
- [`test`](/guide/functions.html#test)
- [`this`](/guide/objects.html)
- [`throw`](/guide/errors.html)
- [`true`](/guide/types.html#booleans)
- [`try`](/guide/errors.html)
- [`ud`](/guide/types.html#user-data)
- [`until`](/guide/control-flow.html)
- [`void`](/guide/types.html#null-and-void)
- [`while`](/guide/control-flow.html)
- [`xor`](/guide/syntax.html#bitwise)
- [`yield`](/guide/fibers.html)