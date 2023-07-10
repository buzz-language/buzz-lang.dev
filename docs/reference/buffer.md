# buffer

## Buffer
```buzz
object Buffer 
```
Read and write data to a string buffer

### buffer
```buzz
ud buffer
```
Pointer to underlying buffer memory

### init
```buzz
static fun init(int capacity = 0) > Buffer
```
Create a `Buffer`
- **`capacity`:** Optional initial capacity of the buffer

**Returns:** New buffer

### read
```buzz
fun read(int n) > str?
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
fun len() > int
```
Get buffer length
**Returns:** Buffer length

### cursor
```buzz
fun cursor() > int
```
Get current position in the buffer
**Returns:** Current position

### empty
```buzz
fun empty() > void
```
Empty the buffer (retains capacity)

### toString
```buzz
fun toString() > str
```
Get buffer content as a string
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