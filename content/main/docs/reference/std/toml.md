# toml

## Error
```buzz
enum Error {
    NotValidUtf8,
    Invalid,
}
```
Errors raised while decoding TOML.

## decode
```buzz
fun decode(source: str) > any !> Error
```
Decode TOML source into Buzz maps and lists.
- **`source`:** TOML source to decode
**Returns:** decoded TOML data

