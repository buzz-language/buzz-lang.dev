# Control flow

## `if`
The `if` statement is pretty much what you would expect.
```buzz
// The usual
if (someCondition) {
    // ...
} else if (anotherCondition) {
    // ...
} else {
    // ...
}
```

You can unwrap an optional with the `->` operator.
```buzz
if (opt -> unwrapped) {
    std\print(unwrapped);
}
```

You can downcast a value with the `as` operator.
```buzz
final anything: any = "hello";

|...

if (anything as something: str) {
    std\print(something);
}
```

`if` can also be inlined and act as an expression. However this expression does not support `null` unwrapping or downcasting (those are available in expression using `??` and `as?`);
```buzz
final value = if (something > 0) 12 else 13;
```

## `while` and `do .. until`
Repeat a block of statements `while` or `until` a condition is `true`.
```buzz
var i = 0;
while (i < 10) {
    i = i + 1;
}

var j = 10;
do {
    j = j - 1;
} until (j == 0)
```

## `for`
`for` is pretty much the same statement as in C.
```buzz
for (i: int = 0; i < 10; i = i + 1) {
    // ...
    break;
}
```

## `foreach`

`foreach` can iterate over most data structures. The key/index variable can be omitted.
```buzz
foreach (case in SomeEnum) {
    // ...
}

foreach (i, value in listOfStrings) {
    // ...
}

foreach (key, value in aMap) {
    // ...
}

foreach (i, char in aString) {
    // ...
}

final fibonnaciFib = &fibonnaci(10);
foreach (value in fibonnaciFib) {
    // ...
}

// The key can be omitted
foreach (char in aString) {
    // ...
}

foreach (i in 0..n) {
    // ...
}
```

## `break` and `continue`
`break` will stop a loop.
```buzz
while (true) {
    if (condition) {
        break;
    }
}
```

`continue` will skip any following statement and start the loop again.
```buzz
while (true) {
    if (condition) {
        continue;
    }

    std\print("not reached if `condition` is true");
}
```

You can add a label to any loop and `break`/`continue` to it. This is useful when you have nested loops and want to break to an upper scope:
```buzz
while (true) :here {
    if (condition) {
        break here;
    }

    std\print("not reached if `condition` is true");
}
```

## Block expression

Block expression are lexical blocks that produce a value:
```buzz
var value = from {
    // Doing some work here...

    out result;
}
```
`out` must appear once at the end of the block.
