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

`if` can also be inlined and act as an expression. However this expression does not support `null` unwrapping or downcasting (those are available in expressions using `??` and `as?`).
```buzz
final value = if (something > 0) 12 else 13;
```

## `match`
`match` selects the first branch whose condition matches the value. Each branch can list one or more conditions separated by commas.
```buzz
final category = match (code) {
    200 -> "ok",
    400, 404 -> "client error",
    // code is within this range
    500..599 -> "server error",
    else -> "unknown",
};
```

It can also be used as a statement.
```buzz
match (state) {
    "ready" -> std\print("starting"),
    "done" -> std\print("already finished"),
    else -> std\print("waiting"),
}
```

A statement branch can use a lexical blocks:
```buzz
var result = "unset";

match (input) {
    $"hello [a-z]+" -> {
        final branch = "pattern";
        result = branch;
    },
    else -> {
        result = "unknown";
    },
}
```

How conditions are matched depends on the matched value:
- When matching a `str`, a `str` condition uses simple equality and a `pat` condition matches the string against the pattern.
- When matching a `pat`, a `pat` condition uses simple equality and a `str` condition matches the pattern against the string.
- When matching a number, a numeric condition uses simple equality and a `rg` condition matches when the number is contained in the range.
- When matching a `type`, a `type` condition uses simple equality. Any other condition matches when the condition value is of the matched type.
- When matching any other value, a `type` condition is checked as `value is Type`; other conditions use simple equality.

For example:
```buzz
final greeting = match ("hello joe") {
    $"hello [a-z]+" -> "friendly",
    else -> "unknown",
};
```

```buzz
final value: any = 42;
final kind = match (value) {
    <str> -> "string",
    <int> -> "integer",
    else -> "other",
};
```

`match` must be exhaustive. Use an `else` branch unless the compiler can prove that all possible cases are covered, such as every value of a boolean or every case of an enum.
```buzz
enum Status {
    draft,
    published,
}

final status = Status.published;
final action = match (status) {
    .draft -> "edit",
    .published -> "read",
};
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

final fibonacciFib = &fibonacci(10);
foreach (value in fibonacciFib) {
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

Block expressions are lexical blocks that produce a value:
```buzz
var value = from {
    // Doing some work here...

    out result;
}
```
`out` must appear once at the end of the block.
