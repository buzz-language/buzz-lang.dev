# io

## FileMode
```buzz
enum FileMode {
    read,
    write,
    update,
}
```
File mode with which you can open a file
## File
```buzz
object File 
```
Object to manipulate an opened file

### open
```buzz
static fun open(str filename, FileMode mode) > File !> FileSystemError, UnexpectedError
```
Open file
- **`filename`:** Path of file to open
- **`mode`:** Mode with which to open it

**Returns:** opened file

### collect
```buzz
fun collect() > void
```
Close file. Automatically called by Garbage Collector.

### close
```buzz
fun close() > void
```
Close file

### readAll
```buzz
fun readAll(int? maxSize) > str !> ReadWriteError, FileSystemError, UnexpectedError
```
Reads file until `EOF`

**Returns:** read data

### readLine
```buzz
fun readLine(int? maxSize) > str? !> ReadWriteError, FileSystemError, UnexpectedError
```
Reads next line, returns null if nothing to read

**Returns:** read data

### read
```buzz
fun read(int n) > str? !> ReadWriteError, FileSystemError, InvalidArgumentError, UnexpectedError
```
Reads `n` bytes, returns null if nothing to read
- **`n`:** how many bytes to read

**Returns:** read data

### write
```buzz
fun write(str bytes) > void !> FileSystemError, ReadWriteError, UnexpectedError
```
Write bytes
- **`bytes`:** string to write

### isTTY
```buzz
fun isTTY() > bool
```
**Returns:** `true` if `File` is a terminal


## stdin
```buzz
const File stdin
```
## stdout
```buzz
const File stdout
```
## stderr
```buzz
const File stderr
```
## runFile
```buzz
fun runFile(str filename) > void !> CompileError, InterpretError, FileSystemError, ReadWriteError 
```
Run a buzz file
- **`filename`:** path to buzz file
