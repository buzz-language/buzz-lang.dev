# Lists

## append
```buzz
fun append(value: T) > void
```
Append new element at end of the list
- **`value`**: New element

## insert
```buzz
fun insert(index: int, value: T) > T
```
Insert new element at `index` of the list. If `index` is less than `0`, element will be inserted at `0`. If `index` is greather than list length, it'll be appended at the end of the list.
- **`index`**: Index at which element will be inserted
- **`value`**: New element

**Returns:** The inserted value

## remove
```buzz
fun remove(at: int) > T
```
Remove element form the list shifting elements after index
- **`at`**: Index of element to remove

**Returns:** Removed element

## pop
```buzz
fun pop() > T?
```
Remove and return last element of list or `null` if list is empty

**Returns:** Last element

## len
```buzz
fun len() > int
```
**Returns:** Length of list

## sub
```buzz
fun sub(start: int, len: int?) > [T]
```
Get sub list
- **`start`**: Start index of sub list
- **`len`**: Length of sub list, if `null` will go to end of list

**Returns:** Sub list

## indexOf
```buzz
fun indexOf(needle: T) > int?
```
Search first occurence of the needle
- **`needle`**: Element to find

**Returns:** Index of element or `null` if not found

## cloneMutable
```buzz
fun clone() > mut [T]
```
**Returns:** Mutable clone of the list

## cloneImmutable
```buzz
fun clone() > [T]
```
**Returns:** Immutable clone of the list

## join
```buzz
fun join(separator: str) > str
```
Join list element in a string with a separator. Elements are converted to a string just like an interpolation would.
- **`separator`**: Separator to put between each elements

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
Map list to new list of target type by running `callback` for each element of the list.
- **`callback`:** Ran for each element

**Returns:** New list of item type `S`

## fill
```buzz
fun fill(value: T) > [T]
```
Fill the list with `value` and returns itself.
- **`value`:** Value to fill the list with

**Returns:** the list

## filter
```buzz
fun filter(callback: fun (index: int, element: T) > bool) > [T]
```
Filter list keeping element for which `callback` returns `true`.
- **`callback`:** Ran for each element

**Returns:** Filtered list

## reduce
```buzz
fun reduce::<S>(callback: fun (index: int, element: T, accumulator: S) > S, S initial) > S
```
Reduce list to value of type `S` by running `callback` with `accumulator` being the value being built.
- **`callback`:** Ran for each element
- **`initial`:** Initial value

**Returns:** Reduced value

## reverse
```buzz
fun reverse() > [T]
```
**Returns:** A new list with inverted values (e.g. `[ 1, 2, 3 ]` becomes `[3, 2, 1]`)
