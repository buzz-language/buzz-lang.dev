# ffi

## cstr
```buzz
fun cstr(str string) > str
```
Append `\0` at the end of the string

**Returns:** Null terminated string

## alignOf
```buzz
fun alignOf(str zigType) > int
```
Get alignment of zig type
- **`zigType`:** Zig type (must match C ABI)

**Returns:** Alignement of zig type

## sizeOf
```buzz
fun sizeOf(str zigType) > int
```
Get size of zig type
- **`zigType`:** Zig type (must match C ABI)

**Returns:** Size of zig type

## sizeOfStruct
```buzz
fun sizeOfStruct(type structType) > int
```
Get size of struct
- **`structType`:** Struct type

**Returns:** Size of the struct


## alignOfStruct
```buzz
fun alignOfStruct(type structType) > int
```
Get alignement of struct
- **`structType`:** Struct type

**Returns:** Alignement of the struct
