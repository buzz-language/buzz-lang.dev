# C API

The `buzz_api` makes it possible to interact with the buzz VM from C ABI compatible code. Most of the standard library [is implemented using it](https://github.com/buzz-language/buzz/tree/main/src/lib). If you plan to make bindings to a C library, using this API is the way to go.

**Note:** This API is unstable and will be subject to change in the future.

## Value
```zig
pub const Value = packed struct {
    val: u64,
}
```
A buzz value NaN boxed in a  `f64`.

### Null
```zig
pub const Null
```
Buzz constant for the `null` value

### Void
```zig
pub const Void
```
Buzz constant for the `void` value

### True
```zig
pub const True
```
Buzz constant for the `true` value

### False
```zig
pub const False
```
Buzz constant for the `false` value

### fromBoolean
```zig
pub inline fn fromBoolean(val: bool) Value
```
- **`val`**: Boolean
Create a buzz value from a boolean

### fromInteger
```zig
pub inline fn fromInteger(val: i32) Value
```
- **`val`**: Integer
Create a buzz value from an integer

### fromFloat
```zig
pub inline fn fromFloat(val: f64) Value
```
- **`val`**: Float
Create a buzz value from a float

### fromObj
```zig
pub inline fn fromObj(val: *anyopaque) Value
```
- **`val`**: Pointer
Create a buzz value from a pointer

### isBool
```zig
pub inline fn isBool(self: Value) bool
```
- **`self`**: Buzz value

**Returns:** `true if value is a boolean

### isInteger
```zig
pub inline fn isInteger(self: Value) bool
```
- **`self`**: Buzz value

**Returns:** `true if value is an integer

### isFloat
```zig
pub inline fn isFloat(self: Value) bool
```
- **`self`**: Buzz value

**Returns:** `true if value is a float

### isNumber
```zig
pub inline fn isNumber(self: Value) bool
```
- **`self`**: Buzz value

**Returns:** `true if value is a number (int or float)

### isObj
```zig
pub inline fn isObj(self: Value) bool
```
- **`self`**: Buzz value

**Returns:** `true if value is a pointer

### isNull
```zig
pub inline fn isNull(self: Value) bool
```
- **`self`**: Buzz value

**Returns:** `true if value is `null`

### isVoid
```zig
pub inline fn isVoid(self: Value) bool
```
- **`self`**: Buzz value

**Returns:** `true if value is `void`

### boolean
```zig
pub inline fn boolean(self: Value) bool
```
- **`self`**: Buzz value

**Returns:** the value as boolean

### integer
```zig
pub inline fn integer(self: Value) i32
```
- **`self`**: Buzz value

**Returns:** the value as integer

### float
```zig
pub inline fn float(self: Value) f64
```
- **`self`**: Buzz value

**Returns:** the value as float

### obj
```zig
pub inline fn obj(self: Value) *anyopaque
```
- **`self`**: Buzz value
**Returns:** the value as pointer


##  bz_toObjNative
```zig
pub extern fn bz_toObjNative(value: Value) *ObjNative;
```
Converts buzz `Value` to an `ObjNative` pointer.

**Returns:** The pointer

## bz_newVM
```zig
pub extern fn bz_newVM(self: *VM) *VM;
```
Create a new buzz VM
- **`self`**: Pointer to current buzz VM

**Returns:** Pointer to the new VM

## bz_deinitVM
```zig
pub extern fn bz_deinitVM(self: *VM) void;
```
- **`self`**: Pointer to the buzz VM
Deinit a buzz VM

## bz_compile
```zig
pub extern fn bz_compile(self: *VM, source: ?[*]const u8, source_len: usize, file_name: ?[*]const u8, file_name_len: usize) ?*ObjFunction;
```
Compile `source` and returns the compiled function
- **`self`**: Pointer to the buzz VM
- **`source`**: Source to compile
- **`source_len`**: Length of the source string
- **`filename`**: Name of the script
- **`filename_len`**: Length of the script's name

**Returns:** Pointer to the compiled function or `null` if could not compile it

## bz_interpret
```zig
pub extern fn bz_interpret(self: *VM, function: *ObjFunction) bool;
```
Interpret a buzz function

**Returns:** `true` if interpretation succeeded, `false` otherwise

## bz_call
```zig
pub extern fn bz_call(self: *VM, closure: *ObjClosure, arguments: [*]const *const Value, len: usize, catch_value: ?*Value) void;
```
Calls a buzz closure
- **`self`**: Pointer to the buzz VM
- **`closure`**: Closure to run
- **`arguments`**: Arguments
- **`len`**: Number of arguments
- **`catch_value`**: Pointer to the value which will be used a the function return value if the call fails (or `null` if none)

## bz_push
```zig
pub extern fn bz_push(self: *VM, value: Value) void;
```
Push a buzz value on the stack
- **`self`**: Pointer to the buzz VM
- **`value`**: Value to push

## bz_pop
```zig
pub extern fn bz_pop(self: *VM) Value;
```
Pop a buzz value from the stack
- **`self`**: Pointer to the buzz VM

**Returns:** the popped value

## bz_peek
```zig
pub extern fn bz_peek(self: *VM, distance: u32) Value;
```
Return the buzz value at `distance` from the top of the stack
- **`self`**: Pointer to the buzz VM
- **`distance`**: Distance from the top of the stack

**Returns:** the peeked value

## bz_pushBool
```zig
pub extern fn bz_pushBool(self: *VM, value: bool) void;
```
Push a buzz boolean value on the stack
- **`self`**: Pointer to the buzz VM
- **`value`**: Boolean to push

## bz_pushFloat
```zig
pub extern fn bz_pushFloat(self: *VM, value: f64) void;
```
Push a buzz float value on the stack
- **`self`**: Pointer to the buzz VM
- **`value`**: Float to push

## bz_pushInteger
```zig
pub extern fn bz_pushInteger(self: *VM, value: i32) void;
```
Push a buzz integer value on the stack
- **`self`**: Pointer to the buzz VM
- **`value`**: Integer to push

## bz_pushString
```zig
pub extern fn bz_pushString(self: *VM, value: *ObjString) void;
```
Push a buzz string value on the stack
- **`self`**: Pointer to the buzz VM
- **`value`**: String to push

## bz_pushList
```zig
pub extern fn bz_pushList(self: *VM, value: *ObjList) void;
```
Push a buzz list value on the stack
- **`self`**: Pointer to the buzz VM
- **`value`**: List to push

## bz_pushUserData
```zig
pub extern fn bz_pushUserData(self: *VM, value: *ObjUserData) void;
```
Push a buzz user data value on the stack
- **`self`**: Pointer to the buzz VM
- **`value`**: User data to push

## bz_pushNull
```zig
pub extern fn bz_pushNull(self: *VM) void;
```
Push the null value on the stack
- **`self`**: Pointer to the buzz VM

## bz_pushVoid
```zig
pub extern fn bz_pushVoid(self: *VM) void;
```
Push the void value on the stack
- **`self`**: Pointer to the buzz VM

## bz_pushObjectInstance
```zig
pub extern fn bz_pushObjectInstance(vm: *VM, payload: *ObjObjectInstance) void;
```
Push a buzz object instance value on the stack
- **`self`**: Pointer to the buzz VM
- **`value`**: Object instance

## bz_pushEnumInstance
```zig
pub extern fn bz_pushEnumInstance(vm: *VM, payload: *ObjEnumInstance) void;
```
Push a buzz enum instance value on the stack
- **`self`**: Pointer to the buzz VM
- **`value`**: Enum instance

## bz_pushError
```zig
pub extern fn bz_pushError(self: *VM, qualified_name: [*]const u8, len: usize) void;
```
Push instance of an error object
- **`self`**: Pointer to the buzz VM
- **`qualified_name`**: Qualified name of the error (e.g. `errors.FileSystemError`)
- **`len`**: Length of the qualified name

## bz_pushErrorEnum
```zig
pub extern fn bz_pushErrorEnum(self: *VM, qualified_name: [*]const u8, name_len: usize, case: [*]const u8, case_len: usize) void;
```
Push instance of an error enum instance
- **`self`**: Pointer to the buzz VM
- **`qualified_name`**: Qualified name of the enum
- **`name_len`**: Length of the enum's qualified name
- **`case`**: Enum case name
- **`case_len`**: Enum case name's length

## bz_throw
```zig
pub extern fn bz_throw(vm: *VM, value: Value) void;
```
Raise an error
- **`vm`**: Pointer to the buzz VM
- **`value`**: Value to raise

## bz_getQualified
```zig
pub extern fn bz_getQualified(self: *VM, qualified_name: [*]const u8, len: usize) Value;
```
Get global value with its qualified name
- **`self`**: Pointer to the buzz VM
- **`qualified_name`**: Qualified name of the enum
- **`len`**: Length of the enum's qualified name

**Returns:** The global

## bz_allocated
```zig
pub extern fn bz_allocated(self: *VM) usize;
```
Get the current amount of allocated memory in bytes
- **`self`**: Pointer to the buzz VM

**Returns:** Bytes allocated

## bz_collect
```zig
pub extern fn bz_collect(self: *VM) bool;
```
Trigger a GC sweep
- **`self`**: Pointer to the buzz VM

**Returns:** `false` if the sweep failed

## bz_clone
```zig
pub extern fn bz_clone(vm: *VM, value: Value) Value;
```
Return a shallow copy of a value
- **`self`**: Pointer to the buzz VM
- **`value`**: Value to clone

**Returns:** Value clone

## bz_valueToString
```zig
pub extern fn bz_valueToString(value: Value, len: *usize) ?[*]const u8;
```
Converts a `ObjString` to a C string
- **`value`**: Value to convert (must wrap an `ObjString`)
- **`len`**: The length of the string will be set there

**Returns:** The string

## bz_valueToUserData
```zig
pub extern fn bz_valueToUserData(value: Value) *UserData;
```
Get user data pointer from a `ObjUserData` value
- **`value`**: Value to convert (must wrap an `ObjUserData`)

**Returns:** User data pointer

## bz_valueDump
```zig
pub extern fn bz_valueDump(value: Value, vm: *VM) void;
```
Dump value to `stderr`. Will limit itself to a depth of 50 levels.
- **`value`**: Value to dump
- **`vm`**: Pointer to the buzz VM

## bz_valueToClosure
```zig
pub extern fn bz_valueToClosure(value: Value) *ObjClosure;
```
Converts a value to an `ObjClosure`
- **`value`**: Value to convert (must wrap an `ObjClosure`)

**Returns:** The `ObjClosure`

## bz_valueEqual
```zig
pub extern fn bz_valueEqual(self: Value, other: Value) Value;
```
Compare two values
- **`self`**: First value
- **`other`**: Other value

**Returns:** `true` if values are equal

## bz_valueIs
```zig
pub extern fn bz_valueIs(self: Value, type_def: Value) Value;
```
Check the type of a value
- **`self`**: Value
- **`type_def`**: Type definition to check against (must be an `ObjTypeDef`)

**Returns:** `true` when `self` if of type `type_def`

## bz_stringType
```zig
pub extern fn bz_stringType(vm: *VM) Value;
```
Get the string type

**Returns:** Return the string `ObjTypeDef` value

## bz_string
```zig
pub extern fn bz_string(vm: *VM, string: ?[*]const u8, len: usize) ?*ObjString;
```
Create an `ObjString` from a C string
- **`vm`**: Pointer to the buzz VM
- **`string`**: String to use
- **`len`**: Length of the string

**Returns:** The `ObjString` or `null` if allocation failed

## bz_objStringToString
```zig
pub extern fn bz_objStringToString(obj_string: *ObjString, len: *usize) ?[*]const u8;
```
Get the C string from an `ObjString`
- **`obj_string`**: String to use
- **`len`**: The length of the string will be set there

**Returns:** C string of the `ObjString`

## bz_objStringToValue
```zig
pub extern fn bz_objStringToValue(obj_string: *ObjString) Value;
```
Get buzz value from an `ObjString`
- **`obj_string`**: String to use

**Returns:** `ObjString`

## bz_objStringConcat
```zig
pub extern fn bz_objStringConcat(vm: *VM, obj_string: Value, other: Value) Value;
```
Concatenate two `ObjString`
- **`vm`**: Pointer to the buzz VM
- **`obj_string`**: First `ObjString`
- **`other`**: Second `ObjString`

**Returns:** New `ObjString`

## bz_toString
```zig
pub extern fn bz_toString(vm: *VM, value: Value) Value;
```
Convert value to its string representation
- **`vm`**: Pointer to the buzz VM
- **`value`**: Value to convert

**Returns:** New `ObjString`

## bz_newList
```zig
pub extern fn bz_newList(vm: *VM, of_type: Value) Value;
```
Create new list of the given type
- **`vm`**: Pointer to the buzz VM
- **`of_type`**: `ObjTypeDef` of the list items

**Returns:** New `ObjList`

## bz_listAppend
```zig
pub extern fn bz_listAppend(vm: *VM, list: Value, value: Value) void;
```
Create new list of the given type
- **`vm`**: Pointer to the buzz VM
- **`list`**: `ObjList`
- **`value`**: Value to add

## bz_valueToList
```zig
pub extern fn bz_valueToList(value: Value) *ObjList;
```
Converts a value to an `ObjList`
- **`value`**: Value to convert

**Returns:** The `ObjList`

## bz_listGet
```zig
pub extern fn bz_listGet(self: Value, index: usize) Value;
```
Get element of list at given index
- **`self`**: `ObjList`
- **`index`**: Index

**Returns:** Element of the list

## bz_listSet
```zig
pub extern fn bz_listSet(vm: *VM, self: Value, index: usize, value: Value) void;
```
Set element of list at given index
- **`self`**: `ObjList`
- **`index`**: Index
- **`value`**: Element to set

## bz_listLen
```zig
pub extern fn bz_listLen(self: *ObjList) usize;
```
Get list length
- **`self`**: `ObjList`

**Returns:** Length of the list

## bz_listConcat
```zig
pub extern fn bz_listConcat(vm: *VM, list: Value, other_list: Value) Value;
```
Concatenate two `ObjList`
- **`vm`**: Pointer to the buzz VM
- **`obj_string`**: First `ObjList`
- **`other`**: Second `ObjList`

**Returns:** New `ObjList`

## bz_newMap
```zig
pub extern fn bz_newMap(vm: *VM, map_type: Value) Value;
```
Create new map of the given type
- **`vm`**: Pointer to the buzz VM
- **`map_type`**: `ObjTypeDef` of the map

**Returns:** New `ObjMap`

## bz_mapSet
```zig
pub extern fn bz_mapSet(vm: *VM, map: Value, key: Value, value: Value) void;
```
Set element of map at given index
- **`self`**: `ObjList`
- **`key`**: Key
- **`value`**: Element to set

## bz_mapGet
```zig
pub extern fn bz_mapGet(map: Value, key: Value) Value;
```
Get element of map at given index
- **`self`**: `ObjMap`
- **`key`**: Key

**Returns:** Element of the map

## bz_mapConcat
```zig
pub extern fn bz_mapConcat(vm: *VM, map: Value, other_map: Value) Value;
```
Concatenate two `ObjMap`
- **`vm`**: Pointer to the buzz VM
- **`obj_string`**: First `ObjMap`
- **`other`**: Second `ObjMap`

**Returns:** New `ObjMap`

## bz_newUserData
```zig
pub extern fn bz_newUserData(vm: *VM, userdata: *UserData) ?*ObjUserData;
```
Create new `ObjUserData` from opaque pointer
- **`vm`**: Pointer to the buzz VM
- **`userdata`**: Pointer to wrap

**Returns:** New `ObjUserData`

## bz_userDataToValue
```zig
pub extern fn bz_userDataToValue(userdata: *ObjUserData) Value;
```
Wraps `ObjUserData` in a buzz value
- **`userdata`**: `ObjUserData`

**Returns:** value

## bz_valueToObject
```zig
pub extern fn bz_valueToObject(value: Value) *ObjObject;
```
Convert value to `ObjObject`
- **`value`**: Value to convert

**Returns:** `ObjObject`

## bz_instance
```zig
pub extern fn bz_instance(vm: *VM, object_value: Value, typedef_value: Value) Value;
```
Create new instance of the given `ObjObject`
- **`vm`**: Pointer to the buzz VM
- **`object_value`**: `ObjObject` to instanciate
- **`typedef_value`**: `ObjTypeDef` of the instance (TODO: should not be required)

**Returns:** `ObjObjectInstance`

## bz_setInstanceField
```zig
pub extern fn bz_setInstanceField(vm: *VM, instance_value: Value, field_name_value: Value, value: Value) void;
```
Set instance field
- **`vm`**: Pointer to the buzz VM
- **`instance_value`**: `ObjObjectInstance`
- **`field_name_value`**: Field name `ObjString`
- **`value`**: Value to set

## bz_getInstanceField
```zig
pub extern fn bz_getInstanceField(vm: *VM, instance_value: Value, field_name_value: Value) Value;
```
Get instance field
- **`vm`**: Pointer to the buzz VM
- **`instance_value`**: `ObjObjectInstance`
- **`field_name_value`**: Field name `ObjString`

**Returns:** field value

## bz_getObjectField
```zig
pub extern fn bz_getObjectField(object_value: Value, field_name_value: Value) Value;
```
Get static object field
- **`vm`**: Pointer to the buzz VM
- **`object_value`**: `ObjObject`
- **`field_name_value`**: Field name `ObjString`

**Returns:** field value

## bz_setObjectField
```zig
pub extern fn bz_setObjectField(vm: *VM, object_value: Value, field_name_value: Value, value: Value) void;
```
Set static object field
- **`vm`**: Pointer to the buzz VM
- **`object_value`**: `ObjObject`
- **`field_name_value`**: Field name `ObjString`
- **`value`**: Value to set

## bz_getEnumCaseValue
```zig
pub extern fn bz_getEnumCaseValue(enum_instance_value: Value) Value;
```
Get enum case value
- **`enum_instance_value`**: `ObjEnumInstance`

**Returns:** case value

## bz_getEnumCase
```zig
pub extern fn bz_getEnumCase(vm: *VM, enum_value: Value, case_name_value: Value) Value;
```
Get enum case
- **`enum_instance_value`**: `ObjEnumInstance`
- **`case_name_value`**: Case name as `ObjString`

**Returns:** `ObjEnumInstance`

## bz_getEnumCaseFromValue
```zig
pub extern fn bz_getEnumCaseFromValue(vm: *VM, enum_value: Value, case_value: Value) Value;
```
Get `ObjEnumInstance` from case value
- **`vm`**: Pointer to the buzz VM
- **`enum_value`**: `ObjEnum`
- **`case_value`**: Case value

**Returns:** `ObjEnumInstance`

## ObjUpValue
```zig
pub const ObjUpValue
```
Opaque structure that represents a upvalue
## ObjNative
```zig
pub const ObjNative
```
Opaque structure that represents a native function
## ObjFunction
```zig
pub const ObjFunction
```
Opaque structure that represents a function
## ObjClosure
```zig
pub const ObjClosure
```
Opaque structure that represents a closure
## ObjTypeDef
```zig
pub const ObjTypeDef
```
Opaque structure that represents a type definition
## ObjString
```zig
pub const ObjString
```
Opaque structure that represents a string
## ObjList
```zig
pub const ObjList
```
Opaque structure that represents a list
## ObjMap
```zig
pub const ObjMap
```
Opaque structure that represents a map
## ObjUserData
```zig
pub const ObjUserData
```
Opaque structure that represents a user data
## ObjObjectInstance
```zig
pub const ObjObjectInstance
```
Opaque structure that represents an object instance
## ObjObject
```zig
pub const ObjObject
```
Opaque structure that represents an object
## ObjEnumInstance
```zig
pub const ObjEnumInstance
```
Opaque structure that represents an enum instance
## ObjEnum
```zig
pub const ObjEnum
```
Opaque structure that represents an enum
## ObjPattern

```zig
pub const ObjPattern
```
Opaque structure that represents a pattern

## ObjFiber
```zig
pub const ObjFiber
```
Opaque structure that represents a fiber