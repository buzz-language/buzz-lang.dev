# Building and installing

## How to install

```bash
# install locally at ~/.local
zig build -Doptimize=ReleaseSafe install -p ~/.local

# install globally at /usr/local
sudo zig build -Doptimize=ReleaseSafe install -p /usr/local
```

Then, you can run buzz with `buzz <myscript.buzz>`. Remember to modify PATH to include the `bin` directory where it is installed. For example, `export PATH=PATH:/home/xxx/.local/bin`.

Additionally, install the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=giann.buzz) to get syntax highlighting. If you don't use VS Code but your editor supports [TextMate grammar files](https://github.com/buzz-language/code/blob/main/syntaxes/buzz.tmLanguage.json), you can use that.

## How to build/develop

### Requirements
- Since this is built with Zig, you should be able to build buzz on a wide variety of architectures even though this has only been tested on x86/M1.
- Linux or macOS (not much work is needed to make it work on [Windows](https://github.com/buzz-language/buzz/issues/74))
- libpcre (not libpcre2)
- libc
- [mimalloc](https://github.com/microsoft/mimalloc) (can be turned off by building buzz with `-Duse_mimalloc=false`)
- zig master

### Steps
1. Clone the project: `git clone https://github.com/buzz-language/buzz <buzz_dir>`
2. Checkout submodules: `git submodule update --init`
3. Build MIR:
```bash
cd mir
make
```
4. Have fun: `zig build run -- <myscript.buzz>`