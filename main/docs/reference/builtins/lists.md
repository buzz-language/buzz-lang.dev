# Lists

## append
```buzz
fun append(value: T) > void
```
Append a new element at the end of the list
- **`value`**: New element

## insert
```buzz
fun insert(index: int, value: T) > T
```
Insert a new element at `index` of the list. If `index` is less than `0`, the element will be inserted at `0`. If `index` is greater than the list length, it'll be appended at the end of the list.
- **`index`**: Index at which the element will be inserted
- **`value`**: New element

**Returns:** The inserted value

## remove
```buzz
fun remove(at: int) > T
```
Remove an element from the list, shifting elements after the index
- **`at`**: Index of the element to remove

**Returns:** The removed element

## pop
```buzz
fun pop() > T?
```
Remove and return the last element of the list or `null` if the list is empty

**Returns:** The last element

## len
```buzz
fun len() > int
```
**Returns:** Length of the list

## sub
```buzz
fun sub(start: int, len: int?) > [T]
```
Get a sublist
- **`start`**: Start index of the sublist
- **`len`**: Length of the sublist, if `null` will go to the end of the list

**Returns:** Sublist

## indexOf
```buzz
fun indexOf(needle: T) > int?
```
Search the first occurrence of the needle
- **`needle`**: Element to find

**Returns:** Index of the element or `null` if not found

## cloneMutable
```buzz
fun cloneMutable() > mut [T]
```
**Returns:** Mutable clone of the list

## cloneImmutable
```buzz
fun cloneImmutable() > [T]
```
**Returns:** Immutable clone of the list

## copyMutable
```buzz
fun copyMutable() > mut [T]
```
**Returns:** Mutable copy of the list

## copyImmutable
```buzz
fun copyImmutable() > [T]
```
**Returns:** Immutable copy of the list

## join
```buzz
fun join(separator: str) > str
```
Join list elements in a string with a separator. Elements are converted to a string just like an interpolation would.
- **`separator`**: Separator to put between each element

**Returns:** Elements joined as a string

## forEach
```buzz
fun forEach(callback: fun (index: int, element: T) > void) > void
```
Runs `callback` for each element of the list.
- **`callback`:** Ran for each element

## sort
```buzz
fun sort(callback: fun (left: T, right: T) > bool) > [T]
```
Stable in-place sort. O(n) best case, O(n*log(n)) worst case and average case.
- **`callback`:** Used to compare elements

**Returns:** The list now sorted

## map
```buzz
fun map::<S>(callback: fun (index: int, element: T) > S) > [S]
```
Map the list to a new list of target type by running `callback` for each element of the list.
- **`callback`:** Ran for each element

**Returns:** New list of item type `S`

## fill
```buzz
fun fill(value: T) > [T]
```
Fill the list with `value` and return itself.
- **`value`:** Value to fill the list with

**Returns:** The list

## filter
```buzz
fun filter(callback: fun (index: int, element: T) > bool) > [T]
```
Filter the list, keeping elements for which `callback` returns `true`.
- **`callback`:** Ran for each element

**Returns:** Filtered list

## reduce
```buzz
fun reduce::<S>(callback: fun (index: int, element: T, accumulator: S) > S, S initial) > S
```
Reduce the list to a value of type `S` by running `callback` with `accumulator` being the value being built.
- **`callback`:** Ran for each element
- **`initial`:** Initial value

**Returns:** Reduced value

## reverse
```buzz
fun reverse() > [T]
```
**Returns:** A new list with inverted values (e.g. `[ 1, 2, 3 ]` becomes `[3, 2, 1]`)
