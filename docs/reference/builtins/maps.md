# Maps

## size
```buzz
fun size() > int
```
**Returns:** Number of elements in the map

## remove
```buzz
fun remove(key: K) > V?
```
Remove element from the map
- **`key``**: Key of element to remove

**Returns:** Removed element or `null` if nothing was under `key`

## keys
```buzz
fun keys() > [K]
```
**Returns:** Return list of the map keys

## values
```buzz
fun values() > [V]
```
**Returns:** Return list of the map values

## cloneMutable
```buzz
fun cloneMutable() > mut {K, V}
```
**Returns:** A mutable clone of the map

## cloneImmutable
```buzz
fun cloneImmutable() > {K, V}
```
**Returns:** An immutable clone of the map

## reduce
```buzz
fun reduce::<T>(callback: fun (key: K, value: V, accumulator: T) > T, initial: T) > T
```
Reduce map to value of type `T` by running `callback` with `accumulator` being the value being built.
- **`callback`:** Ran for each element
- **`initial`:** Initial value

**Returns:** Reduced value

## filter
```buzz
fun filter(callback: fun (key: K, value: V) > bool) > {K: V}
```
Filter map keeping element for which `callback` returns `true`.
- **`callback`:** Ran for each element

**Returns:** Filtered map

## forEach
```buzz
fun forEach(callback: fun (key: K, value: V) > void) > void
```
Runs `callback` for each element of the map.
- **`callback`:** Ran for each element

## map
```buzz
fun map::<A, B>(callback: fun (key: K, value: V) > obj{ key: A, value: B }) > {A: B}
```
Transform map to new map of target type by running `callback` for each element of the map.
- **`callback`:** Ran for each element

**Returns:** New map of key type `A` and value type `B`

## sort
```buzz
fun sort(callback: fun (left: K, right: K) > bool) > {K: V}
```
Stable in-place sort. O(n) best case, O(n*log(n)) worst case and average case.
- **`callback`:** Used to compare elements

**Returns:** The map now sorted

## diff
```buzz
fun diff(other: {K: V}) > {K: V}
```
Returns elements of the map no present in `other`.
- **`other`:** Other map of the same type

**Returns:** Difference with `other`

## intersect
```buzz
fun intersect(other: {K: V}) > {K: V}
```
Returns elements present in both current map and `other`.
- **`other`:** Other map of the same type

**Returns:** Intersection with `other`
