# std

## assert
```buzz
fun assert(bool condition, str? message) > void 
```
If condition is false print message and exit program
- **`message`:** message printed if `condition` is false

## print
```buzz
fun print(str value) > void 
```
Prints value on stdout
- **`value`:** value to print

## parseInt
```buzz
fun parseInt(str string) > int? 
```
Parse number, returns `null` if string does not represent a number
- **`string`:** string to parse

**Returns:** integer parsed or null
## parseFloat
```buzz
fun parseFloat(str string) > float? 
```
Parse number, returns `null` if string does not represent a number
- **`string`:** string to parse

**Returns:** float parsed or null
## toInt
```buzz
fun toInt(float n) > int 
```
Cast float to a integer value
- **`n`:** value to cast

**Returns:** casted value
## toFloat
```buzz
fun toFloat(int n) > float 
```
Cast integer to a float value
- **`n`:** value to cast

**Returns:** casted value

## toUd
```buzz
fun toUd(any n) > ud
```
Cast number to a userdata
- **`n`:** value to cast

## parseUd
```buzz
fun parseUd(str string) > ud?
```
Parse `ud`, returns `null` if string does not represent a `ud` (u64)
- **`string`:** string to parse

**Returns:** `ud` parsed or `null`

**Returns:** casted value
## char
```buzz
fun char(int byte) > str 
```
Return ascii char for given byte

## random
```buzz
fun random(int? min = null, int? max = null) > int
```
Return evenly distributed random number between `min` and `max`
- **`min`**: Minimum value, if omitted `0`
- **`max`**: Maximum value, if omitted `min + 1`

**Returns:** Random value

## currentFiber
```buzz
fun currentFiber() > fib<any, any?>
```
**Returns:** the current fiber
