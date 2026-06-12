# Building and installing

## Requirements
- Since buzz is built with Zig, you should be able to build buzz on a wide variety of architectures even though this has only been tested on x86_64/aarch64.
- Linux, macOS or Windows
- libc
- Zig 0.16.0 (exact version [here](https://github.com/buzz-language/buzz/blob/main/build.zig.zon#L5))

## Build
1. Clone the project: `git clone https://github.com/buzz-language/buzz <buzz_dir>`
2. Check out submodules: `git submodule update --init`
3. Have fun:
  - `zig build run` to start the REPL
  - `zig build run -- run-script <script>.buzz` to run a standalone script
  - `zig build run -- run` to run `src/main.buzz` from the current package
  - `zig build run -- test <script>.buzz` to run a script's `test` blocks

## Install

```zsh
# install locally at ~/.local
zig build -Doptimize=ReleaseSafe install -p ~/.local

# install globally at /usr/local
sudo zig build -Doptimize=ReleaseSafe install -p /usr/local
```

If your usage is performance critical (game dev for example), you can build using `-Doptimize=ReleaseFast`.

Remember to modify PATH to include the `bin` directory where it is installed. For example, `export PATH=$PATH:/home/xxx/.local/bin`. You can then run buzz with commands such as `buzz`, `buzz run-script <script>.buzz`, or `buzz run`.

## CLI

The installed `buzz` binary uses subcommands:

```zsh
buzz                         # start the REPL
buzz run-script <script>.buzz # run a standalone script
buzz run                     # run src/main.buzz from the current package
buzz test <script>.buzz      # run test blocks from a script
buzz check <script>.buzz     # parse and type-check without running
buzz format <script>.buzz    # format a script
buzz init                    # create a minimal package
buzz fetch                   # fetch package dependencies
```

## Formatter

The CLI can format a buzz script and print the result to stdout:
```zsh
buzz format <script>.buzz
```

Use `--line-width` to change the formatter's line width:
```zsh
buzz format --line-width 100 <script>.buzz
```

## IDE support

### VS Code
Install the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=giann.buzz) to get syntax highlighting, LSP and DAP support.

### Helix
To get syntax highlighting and LSP support in helix:
- Clone https://github.com/buzz-language/tree-sitter-buzz somewhere
- Add the following to your `language.toml`:
```toml
[[language]]
name = "buzz"
scope = "source.buzz"
file-types = ["buzz"]
comment-token = "//"
indent = { tab-width = 4, unit = "    " }
language-servers = [ { name = "buzz-lsp" } ]

[[grammar]]
name = "buzz"
source = { path = "<PATH_TO_TREE_SITTER_BUZZ>" }

[language-server.buzz-lsp]
command = "buzz_lsp"
```
- Rebuild helix's grammars
```zsh
$ hx --grammar build
```
