# Patterns

## match
```buzz
fun match(str subject) > [str]?
```
Get first match of the pattern against a string
- **`subject`**: Subject to match the pattern against

**Returns:** List of match and captures or `null` if nothing matches

## matchAll
```buzz
fun matchAll(str subject) > [[str]]?
```
Get all matches of the pattern against a string
- **`subject`**: Subject to match the pattern against

**Returns:** List of matches or `null` if nothing matches

## replace
```buzz
fun replace(str subject, str with) > str
```
Replace first occurence of the pattern
- **`subject`**: Subject to match the pattern against
- **`with`**: Replacement

**Returns:** New string

## replaceAll
```buzz
fun replaceAll(str subject, str with) > str
```
Replace all occurence of the pattern
- **`subject`**: Subject to match the pattern against
- **`with`**: Replacement

**Returns:** New string