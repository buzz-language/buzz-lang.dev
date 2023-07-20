# Enums
Enums are a lists of constant values, either strings or numbers. By default an enum is of value type `int` and each case will have a incremented value starting at `0`.
To get the value associated with a case, use the `value` property.
```buzz
enum Natural {
    zero,
    one,
    two,
}

Natural.zero.value == 0;
```

If the enum's value type is not `int`, it must be specified between parentheses after the `enum` keyword.
```buzz
enum(str) Country {
    usa = "United States of America",
    uk = "United Kingdoms",
    fr = "France",
}
```

To get the enum case from its value, you can call the enum like a function with the value as argument.
```buzz
Country? country = Country("France");
country == Country.fr;
```

When the value type is `str`, you can omit case values which will be the same as the case name.
```buzz
Locale {
    fr,
    it,
    en,
}

Local.en.value == "en";
```

If one case value is specified **all** cases must also have a value.