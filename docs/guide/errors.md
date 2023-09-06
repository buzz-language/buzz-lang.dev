# Error handling

## Throw an error
Any type of value can be thrown. Error can't be raised in the global scope. `test` functions ignore errors.
```buzz
throw "This failed";

enum(str) MyErrors {
    failed = "Something failed",
    bad = "Something bad",
    ohno = "Oh no!",
}

throw MyErrors.ohno;
```

When throwing an object instance, if the object has a `str message` field, its content will be printed instead of the object name.
```buzz
throw .{ message = "Something's wrong" } | -> Error: Something's wrong
throw SomeObject{ number = 12 }          | -> Error: object instance 0x1feb12 `SomeObject`
```

## Function signatures
Functions must specify which error they can raise with `!> type1, type2, ...`. The compiler will detect any unhandled error and require you to either specify it in the function signature or catch the error.
```buzz
fun willFail() > int !> MyErrors, OtherErrors, str {
    int random = rand();
    if (random == 1) {
        throw MyErrors.failed;
    } else if (random == 0) {
        throw OtherErrors.failed;
    }

    throw "something else";

    return 0;
}
```

When calling a function that can throw an error, you can choose to discard the error by providing a default value.
```buzz
| If `willFail` throws an error, `0` will be returned
int result = willFail() catch 0;
```

## Try/catch
Try/catch works as you would expect. If you omit the error type, it'll catch any error.
```buzz
try {
    willFail();
} catch (str error) {
    print("Caught error {error}");
} catch {
    print("Catches everything");
}
```

## Compile errors

Possible compile errors are:
| Code | Short name                  | Meaning                                                                          |
|------|-----------------------------|----------------------------------------------------------------------------------|
| 0    | already_conforming_protocol | Object conforms to the same protocol more than once                              |
| 1    | arguments_count             | Functions has too many arguments (255 maximum)                                   |
| 2    | arithmetic_operand_type     | Binary or unary operator operands have unexpected or non-matching types          |
| 3    | assignable                  | Tried to assign value to something not assignable                                |
| 4    | assignment_value_type       | Assigned value of the wrong type                                                 |
| 5    | binary_operand_type         | Binary operands have unexpected or non-matching types                            |
| 6    | bitwise_operand_type        | Bitwise operands have unexpected or non-matching types                           |
| 7    | block_too_large             | `try`/`catch` block is too large                                                 |
| 8    | call_argument_type          | Function argument have unexpected or non-matching types                          |
| 9    | call_arguments              | Function call has too many, not enough or unexpected arguments                   |
| 10   | callable                    | Value called is not callable                                                     |
| 11   | closures_count              | Too many closures defined in a function (255 maximum)                            |
| 12   | comparison_operand_type     | Comparison operands have unexpected or non-matching types                        |
| 13   | compile                     | Imported script does not compile                                                 |
| 14   | constant_default            | Object property default value or function argument default value is not constant |
| 15   | constant                    | Tried to assign value to a constant                                              |
| 16   | do_condition_type           | `do`|`until` condition is not a boolean                                          |
| 17   | enum_argument               | Enum instanciation with 0 or more than 1 value                                   |
| 18   | enum_case_type              | Bad enum case value |
| 19   | enum_case                   | Enum case does not exists |
| 20   | enum_cases_count            | Too little or too many enum cases (1 minimum, 255 maximum) |
| 21   | error_not_handled           | An error type is not |
| 22   | error_type                  | Error type can't be optional |
| 23   | expected_object             | Tried to instanciate something other that an object or foreign struct |
| 24   | export_count                | Too many export statement (16777215 maximum) |
| 25   | extern_main                 | Main function can't be `extern` |
| 26   | fiber_call_not_allowed      | Tried to async call something other than a function |
| 27   | fiber                       | Tried to resume something other than a fiber |
| 28   | field_access                | Value is not field accessible |
| 29   | for_condition_type          | `for` condition should be `bool` |
| 30   | foreach_iterable            | Value is not iterable |
| 31   | foreach_key_type            |                                                                                  |
| 32   | foreach_value_type          |                                                                                  |
| 33   | generic_type                |                                                                                  |
| 34   | global_initializer          |                                                                                  |
| 35   | globals_count               |                                                                                  |
| 36   | if_condition_type           |                                                                                  |
| 37   | inline_catch_type           |                                                                                  |
| 38   | inline_if_body_type         |                                                                                  |
| 39   | inline_if_else_type         |                                                                                  |
| 40   | jump_too_large              |                                                                                  |
| 41   | library_not_found           |                                                                                  |
| 42   | list_item_type              |                                                                                  |
| 43   | local_initializer           |                                                                                  |
| 44   | locals_count                |                                                                                  |
| 45   | logical_operand_type        |                                                                                  |
| 46   | loop_body_too_large         |                                                                                  |
| 47   | main_signature              |                                                                                  |
| 48   | map_key_type                |                                                                                  |
| 49   | map_value_type              |                                                                                  |
| 50   | missing_return              |                                                                                  |
| 51   | nested_try                  |                                                                                  |
| 52   | no_error                    |                                                                                  |
| 53   | optional                    |                                                                                  |
| 54   | pattern                     |                                                                                  |
| 55   | property_already_exists     |                                                                                  |
| 56   | property_default_value      |                                                                                  |
| 57   | property_does_not_exists    |                                                                                  |
| 58   | property_not_initialized    |                                                                                  |
| 59   | property_type               |                                                                                  |
| 60   | protocol_conforming         |                                                                                  |
| 61   | protocols_count             |                                                                                  |
| 62   | range_type                  |                                                                                  |
| 63   | raw_char                    |                                                                                  |
| 64   | resolvable                  |                                                                                  |
| 65   | resumable                   |                                                                                  |
| 66   | return_type                 |                                                                                  |
| 67   | runtime                     |                                                                                  |
| 68   | script_not_found            |                                                                                  |
| 69   | shadowed_global             |                                                                                  |
| 70   | subscript_key_type          |                                                                                  |
| 71   | subscript_value_type        |                                                                                  |
| 72   | subscriptable               |                                                                                  |
| 73   | symbol_not_found            |                                                                                  |
| 74   | syntax                      |                                                                                  |
| 75   | undefined                   |                                                                                  |
| 76   | unexpected_error_type       |                                                                                  |
| 77   | unknown_import              |                                                                                  |
| 78   | unknown                     |                                                                                  |
| 79   | variable_already_exists     |                                                                                  |
| 80   | while_condition_type        |                                                                                  |
| 81   | yield_not_allowed           |                                                                                  |
| 82   | yield_type                  |                                                                                  |
| 83   | zdef                        |                                                                                  |
| 84   | any_generic                 |                                                                                  |
| 85   | collect_signature           |                                                                                  |
| 86   | tostring_signature          |                                                                                  |
| 87   | gc                          |                                                                                  |