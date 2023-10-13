# `Buffer`

## Buffer
```buzz
object Buffer 
```
Read and write data to a string `Buffer`

### init
```buzz
static fun init(int capacity = 0) > Buffer
```
Create a `Buffer`
- **`capacity`:** Optional initial capacity of the `Buffer`

**Returns:** New `Buffer`

### fromStr
```buzz
static fun fromStr(str string) > Buffer
```
Create a `Buffer` with `string` as its initial value
- **`string`:** Initial value

**Returns:** New `Buffer`

### collect
```buzz
fun collect() > void
```
Free underlying memory (automatically called by the Garbage Collector)

### read
```buzz
fun read(int n = 1) > str?
```
Read bytes
- **`n`:** How many bytes to read

**Returns:** Binary string

### write
```buzz
fun write(str bytes) > void !> WriteWhileReadingError
```
Write bytes
- **`bytes`:** Bytes to write

### writeZ
```buzz
fun writeZ::<T>(str zigType, [T] values) > void !> WriteWhileReadingError, FFITypeMismatchError
```
Write `values` to the `Buffer` checking that `T` matches the zig type specified by `zigType`
- **`zigType`:** Zig type (must match C ABI)
- **`values`:** Values to write

### writeZAt
```buzz
fun writeZAt::<T>(int at, str zigType, [T] values) > void !> WriteWhileReadingError, FFITypeMismatchError
```
Write `values` to the `Buffer` at index `at`, checking that `T` matches the zig type specified by `zigType`
- **`at`:** Where to write the data in the `Buffer`
- **`zigType`:** Zig type (must match C ABI)
- **`values`:** Values to write

### readZ
```buzz
fun readZ::<T>(str zigType) > T !> FFITypeMismatchError
```
Read data from the `Buffer` checking that `T` matches the zig type specified by `zigType`
- **`zigType`:** Zig type (must match C ABI)

**Returns:** Data read of buzz type `T` and zig type `zigType`

### readZAt
```buzz
fun readZAt::<T>(int at, str zigType) > T !> FFITypeMismatchError
```
Read data from the `Buffer` at index `at`, checking that `T` matches the zig type specified by `zigType`
- **`at`:** Where to read the data in the `Buffer`
- **`zigType`:** Zig type (must match C ABI)

**Returns:** Data read of buzz type `T` and zig type `zigType`

### writeStruct
```buzz
fun writeStruct::<T>(type structType, [T] values) > void !> WriteWhileReadingError, FFITypeMismatchError
```
Write foreign struct(s) of type `T` to the `Buffer`. The struct type is specified both for the compiler with generic type `T` and to the function with `structType` which will be used to know the specific layout and size of the struct.
- **`structType`**: Struct type
- **`values`**: Values to write

### writeStructAt
```buzz
fun writeStructAt::<T>(type structType, int at, [T] values) > void !> WriteWhileReadingError, FFITypeMismatchError
```
Write foreign struct(s) of type `T` to the `Buffer` at index `at`. The struct type is specified both for the compiler with generic type `T` and to the function with `structType` which will be used to know the specific layout and size of the struct.
- **`structType`**: Struct type
- **`at`:** Where to write the data to the `Buffer`
- **`values`**: Values to write

### readStruct
```buzz
fun readStruct::<T>(type structType) > T !> FFITypeMismatchError
```
Read foreign struct of type `T` from the `Buffer`. The struct type is specified both for the compiler with generic type `T` and to the function with `structType` which will be used to know the specific layout and size of the struct.
- **`structType`**: Struct type

**Returns:** Value read

### readStructAt
```buzz
fun readStructAt::<T>(type structType, int at) > T !> FFITypeMismatchError
```
Read foreign struct of type `T` from the `Buffer` at index `at`. The struct type is specified both for the compiler with generic type `T` and to the function with `structType` which will be used to know the specific layout and size of the struct.
- **`structType`**: Struct type

**Returns:** Value read

### readBoolean
```buzz
fun readBoolean() > bool?
```
Read a boolean
**Returns:** Boolean read

### writeBoolean
```buzz
fun writeBoolean(bool boolean) > void !> WriteWhileReadingError
```
Write a boolean
- **`boolean`:** Boolean to write

### readInt
```buzz
fun readInt() > int?
```
Read a integer
**Returns:** Integer read

### writeInt
```buzz
fun writeInt(int number) > void !> WriteWhileReadingError
```
Write an integer
- **`number`:** Integer to write

### readFloat
```buzz
fun readFloat() > float?
```
Read a float
**Returns:** Float read

### writeFloat
```buzz
fun writeFloat(float number) > void !> WriteWhileReadingError
```
Write an float
- **`number`:** Float to write

### len
```buzz
fun len(int align = 1) > int
```
Get `Buffer` length
- **`align`:** Alignement

**Returns:** Buffer length

### cursor
```buzz
fun cursor() > int
```
Get current position in the `Buffer`
**Returns:** Current position

### empty
```buzz
fun empty() > void
```
Empty the `Buffer` (retains capacity)

### ptr
```buzz
fun ptr(int at = 0, int align = 1) > ud
```
Returns pointer at `at * align` in the `Buffer` as userdata
- **`at`:** From where to get the pointer
- **`align`:** Alignment

**Returns:** Pointer

### toString
```buzz
fun toString() > str
```
Get `Buffer` content as a string
**Returns:** Buffer content

### at
```buzz
fun at(int index) > int !> OutOfBoundError
```
Get byte at given index
- **`index`:** Which byte to get
**Returns:** Byte

### setAt
```buzz
fun setAt(int index, int value) > void !> WriteWhileReadingError, OutOfBoundError
```
Set byte at given index
- **`index`:** Which byte to set
- **`value`:** Value to set