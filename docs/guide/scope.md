# Scope

## Global scope
The global scope is a declarative space where the declarations' order is not important. This is the only scope in which you can declare enums, objects and protocols.
```buzz
object B {
    // Here `A` is referred to before its declaration
    a: A,
}

object A {
    value: str,
}

// Only a constant value is allowed here
const globalValue = "hello";
```

## Local scope
Any variable declared inside a block is local to it. Shadowing a variable from an upper scope is not allowed.
```buzz
const bye = "bye";
while (condition) {
    const hello = "hello"; // Local to this block
    const bye = 12;        // -> Not allowed
}

// hello doesn't exist anymore
```

## Upvalues
If a reference to a variable from a upper scope is made inside a function's body, the function will carry a reference to it even when the variable goes out of scope. This is **an upvalue**.
```buzz
fun getFn() > fun() > void {
    const upvalue = "up there";

    return fun () => print(upvalue);
}

// `upvalue` is out of scope but still exists as an upvalue of `hello`
getFn()();
```

