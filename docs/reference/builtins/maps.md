# Maps

## size
```buzz
fun size() > int
```
**Returns:** Number of elements in the map

## remove
```buzz
fun remove(K key) > V?
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