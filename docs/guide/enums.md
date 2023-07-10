# Enums

```buzz
| Enums can have number or string values
enum Natural {
    zero,
    one,
    two,
}

Natural.zero.value == 0;

| Values must either be implicit or be all defined
enum(int) NumEnum {
    three = 3,
    four = 4,
    five = 5,
}

enum(str) Country {
    usa = "United States of America",
    uk = "United Kingdoms",
    fr = "France",
}

| To get the value associated with a enum case
print(Country.usa.value); | -> "United States of America"

enum(str) Locale {
    fr,
    en,
    it,
}

Locale.fr.value == "fr";

| Create enum instance from its value
Locale? locale = Locale("fr");
locale == Locale.fr
```