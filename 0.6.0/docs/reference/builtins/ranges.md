# Ranges

## toList
```buzz
fun toList() > [int]
```
**Returns:** A list containing the sequence of integers in that range

## len
```buzz
fun len() > int
```
**Returns:** How many integers there are in that range

## invert
```buzz
fun invert() > rg
```
**Returns:** A new range with its boundaries inverted

## subsetOf
```buzz
fun subsetOf(other: rg) > bool
```
- **`other`**: Other range to compare it to

**Returns:** `true` if the range is a subset of the `other` range

## intersect
```buzz
fun intersect(other: rg) > rg
```
- **`other`**: Range to intersect it with

**Returns:** A new range which is the intersection of the two ranges

## union
```buzz
fun union(other: rg) > rg
```
- **`other`**: Range to union it with

**Returns:** A new range which is the union of the two ranges

## contains
```buzz
fun contains(value: int) > bool
```
- **`value`**: Integer to look for in the range

**Returns:** `true` if `value` is inside the range

## high
```buzz
fun high() > int
```

**Returns:** The high bound of the range

## low
```buzz
fun low() > int
```

**Returns:** The low bound of the range
