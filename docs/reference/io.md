# io

## FileMode
```buzz
enum FileMode 
```
File mode with which you can open a file
## File
```buzz
object File 
```
Object to manipulate an opened file
## `File stdin`
stdin
## `File stdout`
stdout
## `File stderr`
stderr
## runFile
```buzz
fun runFile(str filename) > void !> CompileError, InterpretError, FileSystemError, ReadWriteError 
```
Run a buzz file
- **`filename`:** path to buzz file