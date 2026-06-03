# ffi

## cstr
```buzz
fun cstr(string: str) > str
```
Convert a Buzz string to a null-terminated C string.
- **`string`:** string to terminate
**Returns:** null-terminated string

## FFITypeMismatchError
```buzz
object FFITypeMismatchError
```
Error raised when a Buzz value does not match the expected FFI type.

## FFIZigTypeParseError
```buzz
object FFIZigTypeParseError
```
Error raised when a Zig type string cannot be parsed.

## ValueNotForeignContainer
```buzz
object ValueNotForeignContainer
```
Error raised when raw foreign data is requested from a non-foreign value.

## alignOf
```buzz
fun alignOf(zigType: str) > int !> FFIZigTypeParseError
```
Returns the ABI alignment of a Zig type.
- **`zigType`:** Zig type expression
**Returns:** alignment in bytes

## sizeOf
```buzz
fun sizeOf(zigType: str) > int !> FFIZigTypeParseError
```
Returns the ABI size of a Zig type.
- **`zigType`:** Zig type expression
**Returns:** size in bytes

## sizeOfStruct
```buzz
fun sizeOfStruct(structType: type) > int
```
Returns the ABI size of a Buzz object laid out as a Zig struct.
- **`structType`:** Buzz object type to measure
**Returns:** size in bytes

## alignOfStruct
```buzz
fun alignOfStruct(structType: type) > int
```
Returns the ABI alignment of a Buzz object laid out as a Zig struct.
- **`structType`:** Buzz object type to measure
**Returns:** alignment in bytes

## rawData
```buzz
fun rawData(data: any) > str !> ValueNotForeignContainer
```
Returns the raw foreign data bytes stored in a foreign container.
- **`data`:** foreign container value
**Returns:** raw bytes

