# Building and installing

## Requirements
- Since this is built with Zig, you should be able to build buzz on a wide variety of architectures even though this has only been tested on x86/M1.
- Linux or macOS (Windows support [is coming](https://github.com/buzz-language/buzz/issues/74))
- libc
- zig master (exact version [here](https://github.com/buzz-language/buzz/blob/main/build.zig#L101))

## Build
1. Clone the project: `git clone https://github.com/buzz-language/buzz <buzz_dir>`
2. Checkout submodules: `git submodule update --init`
3. Have fun:
  - `zig build run -- <myscript.buzz>` to run a script
  - `zig build run` to start the REPL

## Install

```bash
# install locally at ~/.local
zig build -Doptimize=ReleaseSafe install -p ~/.local

# install globally at /usr/local
sudo zig build -Doptimize=ReleaseSafe install -p /usr/local
```

If you're usage if performance critical (game dev for example), you can build using `-Doptimize=ReleaseFast`.

Remember to modify PATH to include the `bin` directory where it is installed. For example, `export PATH=PATH:/home/xxx/.local/bin`. You can then run buzz with `buzz <myscript.buzz>`.

Additionally, install the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=giann.buzz) to get syntax highlighting. If you don't use VS Code but your editor supports [TextMate grammar files](https://github.com/buzz-language/code/blob/main/syntaxes/buzz.tmLanguage.json), you can use that.
