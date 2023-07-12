# Fibers

## over
```buzz
fun over() > bool
```
**Returns:** `true` if fiber is over

## cancel
```buzz
fun cancel() > void
```
Cancel the fiber by changing its internal status to `over` preventing further `resume` or `resolve`