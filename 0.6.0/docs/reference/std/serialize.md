# serialize

## Boxed
```buzz
object Boxed
```
Utility object to manage deserialized data from, for example, decoded JSON

### data
```buzz
data: any
```
Wrapped data.

### init
```buzz
static fun init(data: any) > Boxed !> CircularReference, NotSerializable
```
Creates a `Boxed` wrapper around serializable data.
- **`data`:** Data to wrap
**Returns:** A new `Boxed`

### string
```buzz
fun string() > str?
```
When wrapped data is a string

### boolean
```buzz
fun boolean() > bool?
```
When wrapped data is a boolean

### integer
```buzz
fun integer() > int?
```
When wrapped data is a int

### float
```buzz
fun float() > double?
```
When wrapped data is a double

### map
```buzz
fun map() > {str: Boxed}?
```
When wrapped data is an object, object property values are themselves wrapped in a `Boxed`

### list
```buzz
fun list() > [Boxed]?
```
When wrapped data is a list, list elements are themselves warpped in a `Boxed`

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

### floatValue
```buzz
fun floatValue() > double
```
**Returns:** wrapped data number value or `0` if not a double

### mapValue
```buzz
fun mapValue() > {str: Boxed}
```
**Returns:** wrapped data map value or empty map if not a map

### listValue
```buzz
fun listValue() > [Boxed]
```
**Returns:** wrapped data list value or empty list if not a list

### q
```buzz
fun q(path: [any]) > Boxed
```
Query the json element at `path`, if nothing matches return `Boxed{}`
- **`path`:** Path to query
**Returns:** Found `Boxed` or `Boxed{}` (which is `null`)

## CircularReference
```buzz
object CircularReference
```
Error raised when serialization detects a circular reference.

## NotSerializable
```buzz
object NotSerializable
```
Error raised when a value cannot be serialized.

## serializeValue
```buzz
fun serializeValue(value: any) > any !> CircularReference, NotSerializable
```
Converts any serializable Buzz value into JSON-compatible data.
- **`value`:** Value to serialize
**Returns:** Serialized data

## JsonParseError
```buzz
object JsonParseError
```
Error raised when JSON parsing fails.

## jsonEncode
```buzz
fun jsonEncode(data: Boxed) > str !> CircularReference, NotSerializable
```
Encode to a JSON string
**Returns:** the JSON string

## jsonDecode
```buzz
fun jsonDecode(json: str) > Boxed !> JsonParseError, WriteWhileReadingError
```
Decode string into a Json instance
- **`str`:** json The JSON string
**Returns:** Boxed

