# Import/Export

## Import

To import another script, use the `import` statement:
```buzz
import "std";

std\print("hello");
```

When importing, buzz will search the script in common places. With `?` being the library name:
- `./?.buzz`
- `./?/main.buzz`
- `./?/src/main.buzz`
- `./?/src/?.buzz`
- `/usr/share/buzz/?.buzz`
- `/usr/share/buzz/?/main.buzz`
- `/usr/share/buzz/?/src/main.buzz`
- `/usr/share/buzz/?/src/?.buzz`
- `/usr/local/share/buzz/?.buzz`
- `/usr/local/share/buzz/?/main.buzz`
- `/usr/local/share/buzz/?/src/main.buzz`
- `/usr/local/share/buzz/?/src/?.buzz`
- `$BUZZ_PATH/?.buzz`
- `$BUZZ_PATH/?/main.buzz`
- `$BUZZ_PATH/?/src/?.buzz`
- `$BUZZ_PATH/?/src/main.buzz`

When defining [`extern` functions](/guide/calling-native-code.html), buzz will search the symbol in a dynamic library. It'll be searched in the same common places:
- `./?.so`
- `./?/src/lib?.so`
- `/usr/share/so/lib?.so`
- `/usr/share/so/lib?/src/?.so`
- `/usr/local/share/so/lib?.so`
- `/usr/local/share/so/lib?/src/?.so`
- `$BUZZ_PATH/lib?.so`
- `$BUZZ_PATH/?/src/lib?.so`

### Alias
You can rename the imported namespace like so:
```buzz
import "std" as standard;

// ...

standard\print("hello");
```

You can also erase the namespace:
```buzz
import "std" as _;

// ...

print("hello");
```

## Exporting

To export symbols, use the `export` statement. If your script exports at least one symbol. You have to define a namespace for the script:

```buzz
// hello.buzz
namespace hello;

export fun sayHello() > void {
    std\print("Hello world!");
}
```

```buzz
// main.buzz
import "hello";

fun main(_: [str]) > void {
    hello\sayHello();
}
```

You can also put `export` right before the declaration:
```buzz
export fun sayHello() > void {
    print("Hello world!");
};
```

### Namespace

A namespace is any number of identifiers separated by `\`. It must be the first statement of a script and is required if the script exports at least one symbol:
```buzz
namespace some\valid\name;
```

### Alias
You can export a declaration with another name.
```buzz
// hello.buzz
fun sayHello() > void {
    std\print("Hello world!");
}

export sayHello as hello;
```

```buzz
// main.buzz
import "hello";

fun main(args: [str]) > void {
    hello\hello();
}
```
