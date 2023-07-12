# math

## abs
```buzz
fun abs(float n) > float 
```


**Returns:**  absolute value of n
## acos
```buzz
fun acos(float n) > float 
```


**Returns:**  acos of n
## asin
```buzz
fun asin(float n) > float 
```


**Returns:**  asin of n
## atan
```buzz
fun atan(float n) > float 
```


**Returns:**  atan of n
## bzceil
```buzz
fun bzceil(float n) > int 
```


**Returns:**  ceiled n
## bzcos
```buzz
fun bzcos(float n) > float 
```


**Returns:**  cos of n
## `float pi`
π constant
## deg
```buzz
fun deg(float n) > float 
```
Convert radian to degree
## bzexp
```buzz
fun bzexp(float n) > float 
```


**Returns:**  exp of n
## bzfloor
```buzz
fun bzfloor(float n) > int 
```

## bzlog
```buzz
fun bzlog(float base, float n) > float 
```


**Returns:**  log(base) of n
## max
```buzz
fun max(float a, float b) > float 
```


**Returns:**  max of a and b
## min
```buzz
fun min(float a, float b) > float 
```


**Returns:**  min of a and b
## rad
```buzz
fun rad(float n) > float 
```
Convert degree to radian
## random
```buzz
fun random() > float 
```


**Returns:**  random number between 0 and 1
## bzsin
```buzz
fun bzsin(float n) > float 
```


**Returns:**  sin of n
## bzsqrt
```buzz
fun bzsqrt(float n) > float 
```


**Returns:**  square root of n
## bztan
```buzz
fun bztan(float n) > float 
```


**Returns:**  tan of n
## pow
```buzz
fun pow(float x, float y) > float !> lib.errors.OverflowError, lib.errors.UnderflowError 
```


**Returns:**  `x`^`y`
## buffer

## src
```buzz
object src.lib.buffer.Buffer 
```
Read and write data to a string buffer