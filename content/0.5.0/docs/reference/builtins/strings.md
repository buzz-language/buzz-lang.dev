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
fun byte(at: int = 0) > int
```
Get byte value of character
- **`at`**: index of character in the string

**Returns:** Byte value of character

## indexOf
```buzz
fun indexOf(needle: str) > int?
```
Find needle in string
- **`needle`**: needle to find

**Returns:** Index of found match

## startsWith
```buzz
fun startsWith(needle: str) > bool
```
Test if strings starts with needle
- **`needle`**: needle to find

**Returns:** `true` if strings starts with needle

## endsWith
```buzz
fun endsWith(needle: str) > bool
```
Test if strings ends with needle
- **`needle`**: needle to find

**Returns:** `true` if strings ends with needle


## replace
```buzz
fun replace(needle: str, with: str) > str
```
Replace first occurence of needle
- **`needle`**: needle to find
- **`with`**: replacement

**Returns:** New string

## split
```buzz
fun split(separator: str) > [str]
```
Split string
- **`separator`**: separator by which the string will be split

**Returns:** Splitted string

## sub
```buzz
fun sub(start: int, len: int?) > str
```
Get sub string
- **`start`**: Sub string start index
- **`end`**: Length of sub string, if `null` will go until end of string

**Returns:** The substring

## repeat
```buzz
fun repeat(n: int) > str
```
Repeat string
- **`n`**: How many times the string will be repeated

**Returns:** New string

## encodeBase64
```buzz
fun encodeBase64() > str
```
Base64 encode the string

**Returns:** Encoded string


## decodeBase64
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

## utf8Len
```buzz
fun utf8Len() > int
```

**Returns:** Number of UTF8 codepoints in the string or `0` if string is not a valid UTF8 sequence

## utf8Valid
```buzz
fun utf8Valid() > bool
```

**Returns:** `true` if string is a valid UTF8 sequence

## utf8Codepoints
```buzz
fun utf8Codepoints() > [str]
```

**Returns:** Return a list of the UTF8 string codepoints or an empty list if the string is not a valid UTF8 sequence