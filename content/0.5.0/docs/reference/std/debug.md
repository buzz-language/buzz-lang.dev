# debug

## dump
```buzz
fun dump(any value) > void 
```
Dump any value to stdout

## ast
```buzz
fun ast(str source, str scriptName) > str !> CompileError 
```
Parse `source` and return the abstract syntax tree in JSON
- **`script`:** name (used to fetch eventual functions)

**Returns:** AST as JSON string