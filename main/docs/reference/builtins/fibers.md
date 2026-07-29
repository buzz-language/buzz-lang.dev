# Fibers

## over
```buzz
fun over() > bool
```
**Returns:** `true` once the fiber has completed or has been cancelled

## cancel
```buzz
fun cancel() > void
```
Mark the fiber as `over`, preventing further `resume` or `resolve`. The main fiber cannot be cancelled.

## isMain
```buzz
fun isMain() > bool
```
**Returns:** `true` if this fiber is the main fiber
