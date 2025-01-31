# Null safety

Null safety prevents errors that result from unintentional access of variables set to `null`.
buzz will require you to declare any nullable value with a `?`.

```buzz
final aStringOrNull: str? = "hello";
```

It'll also require you to check for `null` before accessing the value.
This reduces greatly any runtime error related to nullable values. The language provides some useful tools to do so with minimal effort.

```buzz
// Null coalescing operator is `??`
final unwrapped: str = aStringOrNull ?? "default value"

// Force unwrapping with `!`
final unwrapped: str = aStringOrNull!;

// Graceful unwrapping
final optList: [int]? = null;

std\print(optList?.len()); // -> null

// If unwrap
if (aStringOrNull -> aString) {
    std\print("{aString} is not null");
} else {
    std\print("aString was null");
}
```