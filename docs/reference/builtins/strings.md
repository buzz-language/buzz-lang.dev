# Strings

## len
```buzz
fun len() > int
```
**Returns:** Length of the string

## upper
```buzz
fun upper() > str
```
**Returns:** Uppercased string

## lower
```buzz
fun lower() > str
```
**Returns:** Lowercased string

## trim
```buzz
fun trim() > str
```
**Returns:** Trimmed string

## byte
```buzz
fun byte(int at) > int
```
Get byte value of character
- **`at`**: index of character in the string

**Returns:** Byte value of character

## indexOf
```buzz
fun indexOf(str needle) > int?
```
Find needle in string
- **`needle`**: needle to find

**Returns:** Index of found match

## startsWith
```buzz
fun startsWith(str needle) > bool
```
Test if strings starts with needle
- **`needle`**: needle to find

**Returns:** `true` if strings starts with needle

## endsWith
```buzz
fun endsWith(str needle) > bool
```
Test if strings ends with needle
- **`needle`**: needle to find

**Returns:** `true` if strings ends with needle


## replace
```buzz
fun replace(str needle, str with) > str
```
Replace first occurence of needle
- **`needle`**: needle to find
- **`with`**: replacement

**Returns:** New string

## split
```buzz
fun split(str separator) > [str]
```
Split string
- **`separator`**: separator by which the string will be split

**Returns:** Splitted string

## sub
```buzz
fun sub(int start, int? len) > str
```
Get sub string
- **`start`**: Sub string start index
- **`end`**: Length of sub string, if `null` will go until end of string

**Returns:** The substring

## repeat
```buzz
fun repeat(int n) > str
```
Repeat string
- **`n`**: How many times the string will be repeated

**Returns:** New string

## encodeBase
```buzz
fun encodeBase64() > str
```
Base64 encode the string

**Returns:** Encoded string


## decodeBase
```buzz
fun decodeBase64() > str
```
Base64 decode the string

**Returns:** Decoded string

## hex
```buzz
fun hex() > str
```
Converts binary string to hexadecimal representation

**Returns:** Hex string

## bin
```buzz
fun bin() > str
```
Converts hexadecimal string to binary string

**Returns:** Binary string