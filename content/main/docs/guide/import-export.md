# Import/Export

## Import

To import another script, use the `import` statement:
```buzz
import "buzz:std";

std\print("hello");
```

Import paths use one of these forms:

- `buzz:<library>` imports a buzz standard library script, for example `buzz:std`, `buzz:fs`, or `buzz:math`.
- `pkg:<name>/path/to/<script>` imports a script from a package dependency. The path after the package name is resolved inside `vendors/<name>/src/`.
- Relative paths import files next to the current script. The `.buzz` extension is optional.
- Absolute paths import the exact file at that path.

Package imports require dependencies to be prepared with [`buzz fetch`](/main/guide/package.html#buzz-fetch).

```buzz
import "buzz:std";
import "pkg:logger/logger.buzz";
import "utils/math";
```

When defining [`extern` functions](/main/guide/calling-native-code.html), buzz searches for the symbol in a dynamic library named after the script that declares the extern function. A script named `date.buzz` expects `libdate.so` on Linux, `libdate.dylib` on macOS, or `date.dll` on Windows.

Package scripts look for that library at the package root. Standalone scripts look next to the script, and `-L` paths can add fallback directories for standalone scripts.

### Alias
You can rename the imported namespace like so:
```buzz
import "buzz:std" as standard;

// ...

standard\print("hello");
```

You can also erase the namespace:
```buzz
import "buzz:std" as _;

// ...

print("hello");
```

Or import only the symbols you need. Selective imports are added directly to the current namespace:
```buzz
import print, parseInt from "buzz:std";

final number = parseInt("42")!;
print("{number}");
```

When an imported namespace has a prefix in common with the current script namespace, buzz keeps only the remaining part of the imported namespace.
```buzz
// lib.buzz
namespace app\utils;

export fun greet() > str {
    return "hello";
}
```

```buzz
// main.buzz
namespace app;

import "lib.buzz";

utils\greet();
```

## Exporting

To export symbols, use the `export` statement. If your script exports at least one symbol, you have to define a namespace for the script:

```buzz
// hello.buzz
namespace hello;

export fun sayHello() > void {
    std\print("Hello world!");
}
```

```buzz
// main.buzz
import "hello.buzz";

fun main(_: [str]) > void {
    hello\sayHello();
}
```

You can also export an existing declaration by name:
```buzz
final myConstant = 3.14;

export myConstant;
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
import "hello.buzz";

fun main(args: [str]) > void {
    hello\hello();
}
```
