# gc

## allocated
```buzz
fun allocated() > int
```
Returns the number of allocated bytes
**Returns:** allocated bytes

## collect
```buzz
fun collect() > void !> CollectError
```
Triggers a GC sweep

