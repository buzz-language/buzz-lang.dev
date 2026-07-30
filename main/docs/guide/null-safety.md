# Null safety

Null safety makes the absence of a value explicit in the type system.
A value of type `str` can never be `null`.
A value of type `str?` can either contain a `str` or `null`.
buzz requires you to mark nullable values with a `?`, and it will not let you use them as non-null values until you handle the `null` case. This greatly reduces runtime errors caused by forgotten `null` checks.
The language provides several ways to handle nullable values depending on whether you want a safe fallback or you want to assert that a value must exist.

## Declaring nullable values
Use `T?` when a value may be absent.

```buzz
final userName: str? = "giann";
final nickname: str? = null;
```

Once a variable is nullable, you must unwrap it, provide a fallback, or propagate the optional result before using it as a plain `str`.

## `??` for default values
Use the null coalescing operator when you want a fallback value.

```buzz
final configuredPort: int? = null;
final port: int = configuredPort ?? 3000;
```

`left ?? right` returns `left` when it is not `null`, otherwise it returns `right`.
This is usually the simplest tool when there is an obvious default.

## `?.` for optional chaining
Use `?.` when you want to access a field, method, or subscript only if the value exists.

```buzz
final numbers: [int]? = [ 1, 2, 3 ];
final count = numbers?.len(); // -> 3

final missingNumbers: [int]? = null;
final missingCount = missingNumbers?.len(); // -> null
```

If the value on the left is `null`, the whole expression becomes `null`.
This makes optional chaining useful when a missing value is expected and should simply propagate.

Optional chaining can be combined:

```buzz
object Me {
    list: [int]?,
}

final me: Me? = .{
    list = [ 1, 2, 3 ],
};

final count = me?.list?.len(); // -> 3
```

## `if (value -> name)` for conditional unwrapping
Use `if` unwrapping when you want one branch for the non-null case and another for the `null` case.

```buzz
final aStringOrNull: str? = "hello";

if (aStringOrNull -> aString) {
    std\print("{aString} is not null");
} else {
    std\print("aString was null");
}
```

Inside the `if` branch, `aString` is a plain `str`, not a `str?`.
This is the most direct form when the code path depends on whether the value exists.

## `!` for force unwrapping
Use `!` when you know a nullable value is not `null` and you want the wrapped value directly.

```buzz
final aStringOrNull: str? = "hello";
final unwrapped: str = aStringOrNull!;
```

If the value is actually `null`, buzz raises a runtime error.
Use `!` only when the surrounding logic already guarantees the value is present.

## `value as? T` for safe casts
Null safety also applies to runtime casts.
`value as? T` attempts the cast and returns `T?`.

```buzz
final anything: any = 12;

final number: int? = anything as? int; // -> 12
final text: str? = anything as? str;   // -> null
final safeNumber = (anything as? int) ?? 0;
```

This makes `as?` fit naturally into the rest of the null-safety tools:
- use `??` to provide a fallback
- use `if (value -> name)` to branch on success
- use `?.` to keep propagating the optional result

## `value as! T` for strict casts
`value as! T` performs the same runtime cast, but it returns `T` directly and assumes the cast must succeed.

```buzz
final anything: any = "hello";

final text: str = anything as! str;
final size = text.len();
```

If the value is not of type `T`, buzz raises a runtime error.
Use `as!` only when the runtime type is already guaranteed by previous logic.

## Choosing the right tool
Use these operators when failure is expected and should be handled safely:
- `??`
- `?.`
- `if (value -> name)`
- `value as? T`

Use these operators when failure would mean a bug or a broken assumption:
- `value!`
- `value as! T`

For `if (value as name: T)` style downcasting, see [Control flow](/guide/control-flow.html).
For more about `any`, see [Types](/guide/types.html#any).
