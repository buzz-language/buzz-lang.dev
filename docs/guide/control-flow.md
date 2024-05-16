# Control flow

## `if`
The `if` statement is pretty much what you would expect.
```buzz
| The usual
if (someCondition) {
    | ...
} else if (anotherCondition) {
    | ...
} else {
    | ...
}
```

You can unwrap an optional with the `->` operator.
```buzz
if (opt -> unwrapped) {
    print(unwrapped);
}
```

You can downcast a value with the `as` operator.
```buzz
any anything = "hello";

|...

if (anything as str something) {
    print(something);
}
```

`if` can also be inlined and act as an expression. However this expression does not support `null` unwrapping or downcasting (those are available in expression using `??` and `as?`);
```buzz
int value = if (something > 0) 12 else 13;
```

## `while` and `do .. until`
Repeat a block of statements `while` or `until` a condition is `true`.
```buzz
int i = 0;
while (i < 10) {
    i = i + 1;
}

int j = 10;
do {
    j = j - 1;
} until (j == 0)
```

## `for`
`for` is pretty much the same statement as in C.
```buzz
for (int i = 0; i < 10; i = i + 1) {
    | ...
    break;
}
```

## `foreach`

`foreach` can iterate over most data structures. The key/index variable can be omitted.
```buzz
foreach (SomeEnum case in SomeEnum) {
    | ...
}

foreach (int i, str value in listOfStrings) {
    | ...
}

foreach (str key, int value in aMap) {
    | ...
}

foreach (int i, str char in aString) {
    | ...
}

fib<void, int?> fibonnaciFib = &fibonnaci(10);
foreach (int value in fibonnaciFib) {
    | ...
}

| The key can be omitted
foreach (str char in aString) {
    | ...
}

foreach (int i in 0..n) {
    | ...
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

    print("not reached if `condition` is true");
}
```

You can add a label to any loop and `break`/`continue` to it. This is useful when you have nested loops and want to break to an upper scope:
```buzz
while (true) :here {
    if (condition) {
        break here;
    }

    print("not reached if `condition` is true");
}
```

## Block expression

Block expression are lexical blocks that produce a value:
```buzz
var value = from {
    | Doing so work here...

    out result;
}
```
`out` must appear once at the end of the block.
