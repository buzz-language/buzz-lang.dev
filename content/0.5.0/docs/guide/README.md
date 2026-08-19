# Introduction

Buzz is a small/lightweight statically typed scripting language written in [Zig](https://ziglang.org). It started as a toy language following the excellent book [Crafting Interpreters](https://craftinginterpreters.com/) by Robert Nystrom. It is:
- Small in size and complexity (just a bit more than Lua though)
- Statically typed
- Unambiguous
- Without nonsensical coercion
- JIT compiled with [MIR](https://github.com/vnmakarov/mir)
- FFI