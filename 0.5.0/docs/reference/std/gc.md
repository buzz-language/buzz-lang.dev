# gc

## CollectError
```buzz
object CollectError 
```
Error occured while collecting

## allocated
```buzz
fun allocated() > int 
```
Returns the number of allocated bytes

**Returns:**  allocated bytes

## collect
```buzz
fun collect() > void !> CollectError 
```
Triggers a GC sweep