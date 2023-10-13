# serialize

## Boxed
```buzz
object Boxed
```
Utility object to manage deserialized data from, for example, decoded JSON

### init
```buzz
static fun init(any data) > Boxed !> CircularReference, NotSerializable
```
Wrap `data` in a new `Boxed` instance
- **`data`:** Data to wrap

**Returns:** New `Boxed` instance

### q
```buzz
fun q([str] path) > Boxed
```
Query the json element at `path`, if nothing matches return `Boxed{}`
- **`path`:** Path to query

**Returns:** Found `Boxed` or `Boxed{}` (which wraps `null`)

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
{str, Boxed}? map
```
When wrapped data is an object, object property values are themselves wrapped in a `Boxed`

### list
```buzz
[Boxed]? list
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

### floatingValue
```buzz
fun floatingValue() > float
```
**Returns:** wrapped data number value or `0` if not a float

### mapValue
```buzz
fun mapValue() > {str, Boxed}
```
**Returns:** wrapped data map value or empty map if not a map

### listValue
```buzz
fun listValue() > [Boxed]
```
**Returns:** wrapped data list value or empty list if not a list

## serialize
```buzz
export extern fun serialize(any value) > any !> CircularReference, NotSerializable
```
Transform `data` to data that can be serialized.
- **`data`:** Data to serialize

**Return:** Serializable data

## jsonEncode
```buzz
fun jsonEncode(Boxed data, {Boxed, void}? seen) > str
```
Encode a [`Boxed`](/reference/std/serialize.html#boxed) instance to a JSON string
- **`data`:** Data to encode

**Returns:** The JSON string

## jsonDecode
```buzz
static fun jsonDecode(str json) > Boxed !> JsonParseError, WriteWhileReadingError
```
Decode string into a [`Boxed`](/reference/std/serialize.html#boxed) instance
- **`json`:** The JSON string

**Returns:** A [`Boxed`](/reference/std/serialize.html#boxed) instance wrapping the decoded data