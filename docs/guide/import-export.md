# Import/Export

## Import

To import another script, use the `import` statement:
```buzz
import "std";

print("hello"); | print is defined in `std`
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
You can scope the imported symbol behind a prefix to avoid name collision or for readability.
```buzz
import "std" as std;
import "io" as io;

| Defining our own print function
fun print(str message) > void {
    io.stdout.write(message);
}
```

## Exporting

To export symbols, use the `export` statement:

```buzz
| hello.buzz
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

You can also put `export` right before the declaration:
```buzz
export fun sayHello() > void {
    print("Hello world!");
};
```

### Alias
You can export a declaration with another name.
```buzz
| hello.buzz
fun sayHello() > void {
    print("Hello world!");
}

export sayHello as hello;
```

```buzz
| main.buzz
import "hello";

fun main([str] args) > void {
    hello();
}
```