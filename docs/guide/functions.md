# Functions

```buzz
fun sayHiTo(str name, str? lastName, int age) > str {
    | Interpolation with `{}`
    return "Hi {name} {lastName ?? ""}!"
}

| Same could be an arrow function
fun sayHiTo(str name, str? lastName, int age) > str -> "Hi {name} {lastName ?? ""}!"
```

When called, only the first argument name of a function can be omitted, order is not required:

```buzz
sayHiTo("Joe", age: 35, lastName: "Doe"); | -> "Hi Joe Doe!"
```

Functions are first-class citizens:

```buzz
Function() fn = fun () > void -> print("hello world"); | Arrow function

fn(); | -> "hello world"
```