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

### file
```buzz
file: ud
```
File descriptor

### open
```buzz
static fun open(filename: str, mode: FileMode) > mut File !> FileSystemError, UnexpectedError
```
Open file
- **`filename`:** Path of file to open
- **`mode`:** Mode with which to open it
**Returns:** opened file

### collect
```buzz
fun collect() > void
```
Close file when it is collected.

### close
```buzz
fun close() > void
```
Close file

### readAll
```buzz
fun readAll(maxSize: int?) > str !> ReadWriteError, FileSystemError, UnexpectedError
```
Reads file until `EOF`
**Returns:** Read data

### readLine
```buzz
fun readLine(maxSize: int?) > str? !> ReadWriteError, FileSystemError, UnexpectedError
```
Reads next line, returns null if nothing to read
**Returns:** Read data

### read
```buzz
fun read(n: int) > str? !> ReadWriteError, FileSystemError, InvalidArgumentError, UnexpectedError
```
Reads `n` bytes, returns null if nothing to read
- **`n`:** how many bytes to read
**Returns:** Read data

### write
```buzz
fun write(bytes: str) > void !> FileSystemError, ReadWriteError, UnexpectedError
```
Write bytes
- **`bytes`:** string to write

### isTTY
```buzz
fun isTTY() > bool
```
**Returns:** true if file is TTY

### getPoller
```buzz
fun getPoller() > mut FilePoller
```
**Returns:** FilePoller that can be used to poll incoming data on that file

## FilePoller
```buzz
object FilePoller
```
Object used to poll incoming data on a file.

### poller
```buzz
poller: ud
```
Underlying zig poller

### poll
```buzz
fun poll(timeout: int?) > str? !> FileSystemError, UnexpectedError
```
Poll file, blocking for at most `timeout` before returning.
- **`timeout`:** Maximum time to block, or null to block indefinitely
**Returns:** The string read if any, `null` otherwise

### collect
```buzz
fun collect() > void
```
Deinitialize poller when it is collected.

### deinit
```buzz
fun deinit() > void
```
Frees the poller.

## stdin
```buzz
final stdin: mut File
```
stdin

## stdout
```buzz
final stdout: mut File
```
stdout

## stderr
```buzz
final stderr: mut File
```
stderr

## runFile
```buzz
fun runFile(filename: str) > void !> CompileError, InterpretError, FileSystemError, ReadWriteError, UnexpectedError
```
Run a buzz file
- **`filename`:** path to buzz file

