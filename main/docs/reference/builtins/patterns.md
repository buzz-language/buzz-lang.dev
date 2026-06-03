# Patterns

## matchAgainst
```buzz
fun matchAgainst(subject: str) > [obj{ capture: str, start: int, end: int }]?
```
Get first match of the pattern against a string
- **`subject`**: Subject to match the pattern against

**Returns:** List of captures with their byte offsets, or `null` if nothing matches

## matchAllAgainst
```buzz
fun matchAllAgainst(subject: str) > [[obj{ capture: str, start: int, end: int }]]?
```
Get all matches of the pattern against a string
- **`subject`**: Subject to match the pattern against

**Returns:** List of matches, each containing captures with their byte offsets, or `null` if nothing matches

## replace
```buzz
fun replace(subject: str, with: str) > str
```
Replace first occurrence of the pattern
- **`subject`**: Subject to match the pattern against
- **`with`**: Replacement

**Returns:** New string

## replaceAll
```buzz
fun replaceAll(subject: str, with: str) > str
```
Replace all occurrences of the pattern
- **`subject`**: Subject to match the pattern against
- **`with`**: Replacement

**Returns:** New string
