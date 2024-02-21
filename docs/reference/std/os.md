# os

## sleep
```buzz
fun sleep(float ms) > void 
```
Wait for the given amount of milliseconds
- **`ms`:** amount of milliseconds to wait

## time
```buzz
fun time() > float 
```


**Returns:**  epoch time in ms
## env
```buzz
fun env(str key) > str? !> InvalidArgumentError 
```
Returns environment variable under `key`
- **`key`:** environment variable name

## tmpDir
```buzz
fun tmpDir() > str 
```


**Returns:**  path to system temp directory
## tmpFilename
```buzz
fun tmpFilename(str? prefix) > str 
```

- **`prefix`:** prefix to the temp file name


**Returns:**  a temporary file name in system tmp dir
## exit
```buzz
fun exit(int exitCode) > void 
```
Exit program with `exitCode`
- **`exitCode`:** exit code

## execute
```buzz
fun execute([str] command) > int !> FileSystemError, UnexpectedError 
```
Execute command and return its exit code
- **`command`:** command to execute


**Returns:**  exit code of the command
## SocketProtocol
```buzz
enum SocketProtocol {
    tcp,
    udp,
    ipc,
}
```
Protocols supported over a socket
## Socket
```buzz
object Socket 
```
A socket

### connect
```buzz
static fun connect(str address, int port, SocketProtocol netProtocol) > Socket !> InvalidArgumentError, SocketError, NotYetImplementedError
```
Opens a socket
- **`address`:** A string containing either a IPv4, IPv6 or path to a socket file (IPC)
- **`port`:** Port to which to connect
- **`protocol`:** Protocol to use

**Returns:**  A new `Socket` opened and ready to use

### close
```buzz
fun close() > void
```
Close the socket

### receive
```buzz
fun receive(int n) > str? !> InvalidArgumentError, FileSystemError, ReadWriteError, UnexpectedError
```
Receive at most `n` bytes from the socket
- **`n`:** How many bytes we're prepare to receive

**Returns:** The bytes received or null if nothing to read

### receiveLine
```buzz
fun receiveLine() > str? !> FileSystemError, UnexpectedError, ReadWriteError
```
Receive from socket until it's closed or a linefeed is received

**Returns:** The bytes received or null if nothing to read

### receiveAll
```buzz
fun receiveAll() > str? !> FileSystemError, UnexpectedError, ReadWriteError
```
Receive from socket until it's closed

**Returns:** The bytes received or null if nothing to read

### send
```buzz
fun send(str bytes) > void !> FileSystemError, ReadWriteError, UnexpectedError
```
Send bytes on the socket
- **`bytes`:** Bytes to send

## TcpServer
```buzz
object TcpServer 
```
A TCP Server

### init
```buzz
static fun init(str address, int port, bool reuseAddr, bool reusePort) > TcpServer !> SocketError, UnexpectedError, InvalidArgumentError, FileSystemError
```
Starts a TCP server
- **`address`:** Address to listen on
- **`port`:** Port to listen on
- **`reuseAddr`:** Wether we want to accept multiple connections
- **`reusePort`:** Wether we want to accept multiple connections

**Returns:** New `TcpServer` bound to `<address>:<port>`

### accept
```buzz
fun accept() > Socket !> SocketError, UnexpectedError
```
Accept a new connection

**Returns:** Socket opened with the client

### close
```buzz
fun close() > void
```
Close server
