# Operators

## Comparison
```buzz
"hello" == "hello";
12 != 13;
12 >= 12;
12 <= 12;
12 > 11;
12 < 13;
```
`int` and `float` can be compared with one another.

## Arithmetic
```buzz
12 + 12 == 24;
12 - 12 == 0;
12 * 12 == 144;
12 / 12 == 1;
12 % 12 == 0;
```
Arithmetic operators are allowed between numbers of the same type.

## Logical
```buzz
12 > 3 and 5 < 12;
12 > 3 or 12 < 5;
```

## Concatenation
The `+` operator can also be used to concatenate strings, lists or maps (of the same type).
```buzz
"hello " + "world" == "hello world";
[ 1,2,3 ] + [ 3, 4, 5]      | -> [ 1, 2, 3, 4, 5 ]
{ "one": 1 } + { "two": 2 } | -> { "one": 1, "two": 2 }
```

## Bitwise
```buzz
15 << 3 == 120; | shift left
15 >> 3 == 1;   | shift right
12 & 23 == 4    | and
15 ^ 3 == 12;   | xor
15 \ 3 == 15;   | or
~15 == -16;     | not
```

## Null safety
```buzz
mightBeNull ?? defaultValue; | Will result in `defaultValue` if `mightBeNull` is null
```

See [Null safety](/guide/null-safety.html).

## Downcasting and `any` unwrapping
```buzz
something is str;  | true if `something` is of type `str`
something as? int; | if `something` is not an `int`, will result in a `null`
```

See [Null safety](/guide/null-safety.html), [`any` type](/guide/types-and-variables.html#any).