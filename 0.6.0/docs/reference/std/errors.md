# errors

## FileSystemError
```buzz
enum FileSystemError {
    AccessDenied,
    AntivirusInterference,
    BadPathName,
    Canceled,
    CrossDevice,
    ConcurrencyUnavailable,
    DeviceBusy,
    DirNotEmpty,
    DiskQuota,
    FastOpenAlreadyInProgress,
    FileBusy,
    FileDescriptorNotASocket,
    FileLocksUnsupported,
    FileNotFound,
    FileSystem,
    FileTooBig,
    HardwareFailure,
    InputOutput,
    InvalidBatchScriptArg,
    InvalidHandle,
    InvalidUtf8,
    InvalidWtf8,
    IsDir,
    LinkQuotaExceeded,
    NameTooLong,
    NetworkSubsystemFailed,
    NetworkNotFound,
    NoDevice,
    NoSpaceLeft,
    NonCanonical,
    NotDir,
    Unsupported,
    OperationUnsupported,
    PathAlreadyExists,
    PermissionDenied,
    PipeBusy,
    ProcessFdQuotaExceeded,
    ReadOnlyFileSystem,
    RenameAcrossMountPoints,
    SharingViolation,
    SocketNotConnected,
    SymLinkLoop,
    SystemFdQuotaExceeded,
    SystemResources,
    UnrecognizedVolume,
    WouldBlock,
}
```
Errors raised by filesystem operations.

## ExecError
```buzz
enum ExecError {
    AccessDenied,
    ChildExecFailed,
    CurrentWorkingDirectoryUnlinked,
    Canceled,
    InvalidExe,
    InvalidBatchScriptArg,
    InvalidFileDescriptor,
    InvalidName,
    InvalidProcessGroupId,
    InvalidUserId,
    InvalidWtf8,
    OperationUnsupported,
    PermissionDenied,
    ProcessAlreadyExec,
    ProcessNotFound,
    ResourceLimitReached,
    TooBig,
    WaitAbandoned,
    WaitTimeOut,
}
```
Errors raised while spawning or waiting for child processes.

## SocketError
```buzz
enum SocketError {
    AccessDenied,
    AddressFamilyUnsupported,
    AddressInUse,
    AddressUnavailable,
    AddressNotResolved,
    AlreadyBound,
    AlreadyConnected,
    BlockedByFirewall,
    Canceled,
    ConnectionAborted,
    ConnectionPending,
    ConnectionRefused,
    ConnectionResetByPeer,
    ConnectionTimedOut,
    DetectingNetworkConfigurationFailed,
    FileDescriptorNotASocket,
    FileNotFound,
    HostLacksNetworkAddresses,
    HostUnreachable,
    Incomplete,
    InterfaceNotFound,
    InvalidDnsAAAARecord,
    InvalidDnsARecord,
    InvalidDnsCnameRecord,
    InvalidCharacter,
    InvalidEnd,
    InvalidIPAddressFormat,
    InvalidIpv4Mapping,
    InvalidProtocolOption,
    MessageTooBig,
    NameServerFailure,
    NetworkSubsystemFailed,
    NetworkUnreachable,
    NetworkDown,
    NoAddressReturned,
    NotDir,
    OperationUnsupported,
    OptionUnsupported,
    PermissionDenied,
    ProcessFdQuotaExceeded,
    ProtocolFailure,
    ProtocolFamilyNotAvailable,
    ProtocolUnsupported,
    ProtocolUnsupportedByAddressFamily,
    ProtocolUnsupportedBySystem,
    ReadOnlyFileSystem,
    ResolvConfParseFailed,
    ResolveConfParseFailed,
    ServiceUnavailable,
    SocketModeUnsupported,
    SocketNotBound,
    SocketNotListening,
    SocketTypeUnsupported,
    SymLinkLoop,
    SystemFdQuotaExceeded,
    SystemResources,
    TemporaryNameServerFailure,
    Timeout,
    TimeoutTooBig,
    UnknownHostName,
    WouldBlock,
}
```
Errors raised by socket and networking operations.

## ReadWriteError
```buzz
enum ReadWriteError {
    BrokenPipe,
    ConnectionResetByPeer,
    ConnectionTimedOut,
    LockViolation,
    NetNameDeleted,
    NotOpenForReading,
    NotOpenForWriting,
    OperationAborted,
    ReadFailed,
    StreamTooLong,
    WriteFailed,
}
```
Errors raised while reading from or writing to streams.

## CompileError
```buzz
object CompileError
```
Error raised when Buzz source cannot be compiled.

## InterpretError
```buzz
object InterpretError
```
Error raised when Buzz bytecode cannot be interpreted.

## InvalidArgumentError
```buzz
object InvalidArgumentError
```
Error raised when an argument is invalid for an operation.

## NotYetImplementedError
```buzz
object NotYetImplementedError
```
Error raised for functionality that is not implemented yet.

## OverflowError
```buzz
object OverflowError
```
Error raised when an operation overflows.

## UnderflowError
```buzz
object UnderflowError
```
Error raised when an operation underflows.

## UnexpectedError
```buzz
object UnexpectedError
```
Error raised when an unexpected failure occurs.

