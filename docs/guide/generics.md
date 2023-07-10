# Generics

```buzz
fun countMap(<K, V>, {K, V} map) > int {
    return map.size();
}

{str, int} map = {
    "one": 1,
    "two": 2,
    "three": 3,
};

countMap(<str, int>, map) == 3;
```