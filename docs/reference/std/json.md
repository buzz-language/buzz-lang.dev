# json

## Json
```buzz
object Json
```
Utility object to manage data from a JSON string

### encode
```buzz
fun encode({Json, void}? seen) > str
```
Encode to a JSON string

**Returns:** The JSON string

### decode
```buzz
static fun decode(str json) > Json !> JsonParseError, WriteWhileReadingError
```
Decode string into a `Json` instance
- **`json`:** The JSON string

**Returns:** A `Json` instance wrapping the decoded data

### q
```buzz
fun q([str] path) > Json
```
Query the json element at `path`, if nothing matches return `Json{}`
- **`path`:** Path to query

**Returns:** Found `Json` or `Json{}` (which wraps `null`)

### string
```buzz
str? string
```
When wrapped data is a string

### boolean
```buzz
bool? boolean
```
When wrapped data is a boolean

### integer
```buzz
int? integer
```
When wrapped data is a int

### floating
```buzz
float? floating
```
When wrapped data is a float

### map
```buzz
{str, Json}? map
```
When wrapped data is an object, object property values are themselves wrapped in a `Json`

### list
```buzz
[Json]? list
```
When wrapped data is a list, list elements are themselves warpped in a `Json`

### stringValue
```buzz
fun stringValue() > str
```
**Returns:** wrapped data string value or empty string if not a string

### booleanValue
```buzz
fun booleanValue() > bool
```
**Returns:** wrapped data boolean value or `false` if not a boolean

### integerValue
```buzz
fun integerValue() > int
```
**Returns:** wrapped data number value or `0` if not an integer

### floatingValue
```buzz
fun floatingValue() > float
```
**Returns:** wrapped data number value or `0` if not a float

### mapValue
```buzz
fun mapValue() > {str, Json}
```
**Returns:** wrapped data map value or empty map if not a map

### listValue
```buzz
fun listValue() > [Json]
```
**Returns:** wrapped data list value or empty list if not a list
