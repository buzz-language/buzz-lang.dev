# std

## assert
```buzz
fun assert(bool condition, str message) > void 
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
Parse number, returns false if string does not represent a number
- **`string`:** string to parse


**Returns:**  integer parsed or null
## parseFloat
```buzz
fun parseFloat(str string) > float? 
```
Parse number, returns false if string does not represent a number
- **`string`:** string to parse


**Returns:**  float parsed or null
## toInt
```buzz
fun toInt(float n) > int 
```
Cast integer to a float value
- **`n`:** value to cast


**Returns:**  casted value
## toFloat
```buzz
fun toFloat(int n) > float 
```
Cast float to a integer value
- **`n`:** value to cast


**Returns:**  casted value
## char
```buzz
fun char(int byte) > str 
```
Return ascii char for given byte