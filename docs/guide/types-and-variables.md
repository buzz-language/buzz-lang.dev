# Types and variables

## Basic types
```buzz
bool aBoolean = true;
| Immutable sequence of bytes
str aString = "hello world";
str multiline = `
    i'm on several
    lines
    yes
`;
int aNumber = 23; | i32
aNumber = 0b110;
aNumber = 0xA12F;
float aFloat = 23.123; | f64
| A PCRE regex
pat aPattern = _hello [a-z]+_;
| Userdata are pointers to foreign data wrapped inside a buzz obj
ud userdata = GetSomeForeignData();

| A constant
const float pi = 3.14;
```

## Data structures
```buzz
[int] aListOfNumbers = [1, 2, 3];
| Keys and values can be of any type
{str, int} aMap = {
    "one": 1,
    "two": 2,
    "three": 3,
};
| A range results in a list of ints
[int] range = 0..10;
```