# Import/Export

```buzz
| hello.buzz

| Import std lib
import "std";

fun sayHello() > void {
    print("Hello world!");
}

| Make it visible when imported
export sayHello;
```

```buzz
| main.buzz
import "hello";

fun main([str] args) > void {
    sayHello();
}
```