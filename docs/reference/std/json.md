# json

## encode
```buzz
fun encode(Boxed data, {Boxed, void}? seen) > str
```
Encode a [`Boxed`](/reference/std/serialize.html#boxed) instance to a JSON string
- **`data`:** Data to encode

**Returns:** The JSON string

## decode
```buzz
static fun decode(str json) > Boxed !> JsonParseError, WriteWhileReadingError
```
Decode string into a [`Boxed`](/reference/std/serialize.html#boxed) instance
- **`json`:** The JSON string

**Returns:** A [`Boxed`](/reference/std/serialize.html#boxed) instance wrapping the decoded data