# Optionals

```buzz
str? aStringOrNull = "hello";

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