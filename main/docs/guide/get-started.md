# Get started

## REPL

Run `buzz` without arguments to start the REPL:

```zsh
buzz
```

The REPL is useful for quick experiments. It imports `buzz:std` and `buzz:debug` automatically, keeps successful declarations between submissions, and prints the value of expressions:

```text
>>> 1 + 2
3
>>> final name = "buzz";
>>> std\print("hello {name}");
hello buzz
```

If you are building buzz from source, use `zig build run` to start the same REPL from the build tree.

## Standalone scripts

Use `buzz run-script` to run a single script file:

```zsh
buzz run-script <script>.buzz
```

Any arguments after the script path are passed to the script's `main` function:

```zsh
buzz run-script hello.buzz Alice
```

## Package

Use `buzz init` to create a minimal package in the current directory:

```zsh
buzz init
```

The command asks for package metadata, then writes `manifest.buzz`, `build.zig`, `src/main.buzz`, a small library example, and a `vendors/<package-name>` link back to the package. After that, run:

```zsh
buzz run
```

`buzz run` executes `src/main.buzz` from the current package and passes any extra command-line arguments to that script.
