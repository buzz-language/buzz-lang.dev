# Null safety

Null safety prevents errors that result from unintentional access of variables set to `null`.
buzz will require you to declare any nullable value with a `?`.

```buzz
str? aStringOrNull = "hello";
```

It'll also require you to check for `null` before accessing the value.
This reduces greatly any runtime error related to nullable values. The language provides some useful tools to do so with minimal effort.

```buzz
| Null coalescing operator is `??`
str unwrapped = aStringOrNull ?? "default value"

| Force unwrapping with `!`
str unwrapped = aStringOrNull!;

| Graceful unwrapping
[int]? optList = null;

print(optList?.len()); | -> null

| If unwrap
if (aStringOrNull -> aString) {
    print("{aString} is not null");
} else {
    print("aString was null");
}
```