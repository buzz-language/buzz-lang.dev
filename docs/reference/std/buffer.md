# buffer

## WriteWhileReadingError
```buzz
object WriteWhileReadingError
```
Error raised when a buffer is written after reading has started.

## OutOfBoundError
```buzz
object OutOfBoundError
```
Error raised when a buffer index is out of bounds.

## Buffer
```buzz
object Buffer
```
Read and write data to a string buffer

### init
```buzz
static fun init(capacity: int = 0) > Buffer
```
**Returns:** A new `Buffer`

### fromStr
```buzz
static fun fromStr(string: str) > Buffer
```
Creates a buffer initialized with `string`.
- **`string`:** Bytes to write into the new buffer
**Returns:** A new `Buffer`

### collect
```buzz
fun collect() > void
```
Frees the buffer

### read
```buzz
fun read(n: int = 1) > str?
```
Reads `n` bytes
**Returns:** Read bytes or `null` if nothing to read

### write
```buzz
fun write(bytes: str) > void !> WriteWhileReadingError
```
Writes a string
- **`bytes`:** Bytes to write

### writeZ
```buzz
fun writeZ::<T>(zigType: str, values: [T]) > void !> FFITypeMismatchError
```
Writes values using a Zig type layout.
- **`zigType`:** Zig type expression
- **`values`:** Values to write

### writeZAt
```buzz
fun writeZAt::<T>(at: int, zigType: str, values: [T]) > void !> FFITypeMismatchError
```
Writes values at `at` using a Zig type layout.
- **`at`:** Offset at which to write
- **`zigType`:** Zig type expression
- **`values`:** Values to write

### readZ
```buzz
fun readZ::<T>(zigType: str) > T !> FFITypeMismatchError
```
Reads a value using a Zig type layout.
- **`zigType`:** Zig type expression
**Returns:** Read value

### readZAt
```buzz
fun readZAt::<T>(at: int, zigType: str) > T !> FFITypeMismatchError
```
Reads a value at `at` using a Zig type layout.
- **`at`:** Offset from which to read
- **`zigType`:** Zig type expression
**Returns:** Read value

### writeStruct
```buzz
fun writeStruct::<T>(structType: type, values: [T]) > void !> FFITypeMismatchError
```
Writes values using a Buzz object type as a Zig struct layout.
- **`structType`:** Buzz object type to use as struct layout
- **`values`:** Values to write

### writeStructAt
```buzz
fun writeStructAt::<T>(structType: type, at: int, values: [T]) > void !> FFITypeMismatchError
```
Writes values at `at` using a Buzz object type as a Zig struct layout.
- **`structType`:** Buzz object type to use as struct layout
- **`at`:** Offset at which to write
- **`values`:** Values to write

### readStruct
```buzz
fun readStruct::<T>(structType: type) > T
```
Reads a value using a Buzz object type as a Zig struct layout.
- **`structType`:** Buzz object type to use as struct layout
**Returns:** Read value

### readStructAt
```buzz
fun readStructAt::<T>(structType: type, at: int) > T
```
Reads a value at `at` using a Buzz object type as a Zig struct layout.
- **`structType`:** Buzz object type to use as struct layout
- **`at`:** Offset from which to read
**Returns:** Read value

### readBoolean
```buzz
fun readBoolean() > bool?
```
Reads a boolean
**Returns:** Boolean we read or `null` if nothing to read

### writeBoolean
```buzz
fun writeBoolean(boolean: bool) > void !> WriteWhileReadingError
```
Writes a boolean
- **`boolean`:** Boolean to write

### readInt
```buzz
fun readInt() > int? !> ReadWriteError
```
Reads an integer
**Returns:** Read integer or `null` if nothing to read

### writeInt
```buzz
fun writeInt(number: int) > void !> WriteWhileReadingError
```
Writes an integer
- **`number`:** Integer to write

### readUserData
```buzz
fun readUserData() > ud? !> ReadWriteError
```
Reads an ud
**Returns:** Read ud or `null` if nothing to read

### writeUserData
```buzz
fun writeUserData(userdata: ud) > void !> WriteWhileReadingError
```
Writes an ud
- **`number`:** UserDataeger to write

### readDouble
```buzz
fun readDouble() > double? !> ReadWriteError
```
Reads a double
**Returns:** Read double or `null` if nothing to read

### writeDouble
```buzz
fun writeDouble(number: double) > void !> WriteWhileReadingError
```
Writes a double
- **`number`:** Double to write

### len
```buzz
fun len(align: int = 1) > int
```
**Returns:** Length of the buffer

### cursor
```buzz
fun cursor() > int
```
**Returns:** Position of the reading cursor

### empty
```buzz
fun empty() > void
```
Empties the buffer

### toString
```buzz
fun toString() > str
```
Get buffer as string

### ptr
```buzz
fun ptr(at: int = 0, align: int = 1) > ud
```
Get buffer's ptr

### at
```buzz
fun at(index: int) > int !> OutOfBoundError
```
Get byte at `index`

### setAt
```buzz
fun setAt(index: int, value: int) > void !> WriteWhileReadingError, OutOfBoundError
```
Set byte at `index`

