# Control flow

```buzz
| The usual
if (someCondition) {
    | ...
} else if (anotherCondition) {
    | ...
} else {
    | ...
}

int i = 0;
while (i < 10) {
    i = i + 1;
}

int j = 10;
do {
    j = j - 1;
} until (j == 0)

for (int i = 0; i < 10; i = i + 1) {
    | ...
    break;
}

| inline if
int value = if (something > 0) 12 else 13;
```

## `foreach`

`foreach` can iterate over most data structures:

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