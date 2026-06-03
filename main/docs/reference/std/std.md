# std

## assert
```buzz
fun assert(condition: bool, message: str? = null) > void
```
If condition is false print message and exit program
- **`condition`:** assert condition
- **`message`:** message printed if `condition` is false

## print
```buzz
fun print(value: str) > void
```
Prints value on stdout
- **`value`:** value to print

## parseInt
```buzz
fun parseInt(string: str) > int?
```
Parse integer, returns null if string does not represent a integer
- **`string`:** string to parse
**Returns:** integer parsed or null

## parseDouble
```buzz
fun parseDouble(string: str) > double?
```
Parse double, returns null if string does not represent a double
- **`string`:** string to parse
**Returns:** double parsed or null

## toInt
```buzz
fun toInt(n: double) > int
```
Cast integer to a double value
- **`n`:** value to cast
**Returns:** casted value

## toDouble
```buzz
fun toDouble(n: int) > double
```
Cast double to a integer value
- **`n`:** value to cast
**Returns:** casted value

## toUd
```buzz
fun toUd(n: any) > ud
```
Cast double or integer to userdata
- **`n`:** value to cast
**Returns:** casted value or 0 if value provided is not a number

## parseUd
```buzz
fun parseUd(string: str) > ud?
```
Parse ud, returns false if string does not represent a ud (u64)
- **`string`:** string to parse
**Returns:** ud parsed or null

## char
```buzz
fun char(byte: int) > str
```
Return ascii char for given byte

## random
```buzz
fun random(min: int? = null, max: int? = null) > int
```
Return evenly distributed random number between `min` and `max`
- **`min`:** Minimum value, if omitted `0`
- **`max`:** Maximum value, if omitted `min + 1`
**Returns:** Random value

## currentFiber
```buzz
fun currentFiber() > fib<any, any?>
```
**Returns:** Current fiber

## args
```buzz
fun args() > [str]
```
Returns the command line arguments with which the script was launched

## panic
```buzz
fun panic(message: str) > void
```
Print message and exit program

