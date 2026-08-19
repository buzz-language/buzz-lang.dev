# API reference

This API is compliant with C ABI and can thus be used by any language that can conform to it (C, C++, Zig, Rust, etc.).

::: tip Warning
This API is unstable and will likely change a lot in the future.
:::

## `bz_allocated`
```zig
fn bz_allocated(self: *VM) usize;
```
Return the memory currently allocated by the given VM and any VM using the same garbage collector

## `bz_at`
```zig
fn bz_at(vm: *VM, at: u32) Value;
```
Returns the value at an absolute index of the stack

## `bz_call`
```zig
fn bz_call(self: *VM, closure: Value, arguments: ?[*]const *const Value, len: usize, catch_value: ?*Value) void;
```
Call a closure

## `bz_clone`
```zig
fn bz_clone(vm: *VM, value: Value) Value;
```
Clone a value

## `bz_collect`
```zig
fn bz_collect(self: *VM) void;
```
Trigger a GC sweep

## `bz_currentFiber`
```zig
fn bz_currentFiber(vm: *VM) Value;
```
Returns the current fiber

## `bz_deinitVM`
```zig
fn bz_deinitVM(self: *VM) void;
```
Deinitializes and destroys a VM

## `bz_dumpStack`
```zig
fn bz_dumpStack(vm: *VM) void;
```
Dump the stack content

## `bz_enumNext`
```zig
fn bz_enumNext(enum_value: Value, case: Value, vm: *VM) Value;
```
Get next enum case given the current one

## `bz_foreignContainerGet`
```zig
fn bz_foreignContainerGet(value: Value, field_idx: usize, vm: *VM) Value;
```

## `bz_foreignContainerSet`
```zig
fn bz_foreignContainerSet(value: Value, field_idx: usize, new_value: Value, vm: *VM) void;
```

## `bz_foreignContainerSlice`
```zig
fn bz_foreignContainerSlice(container_value: Value, len: *usize) [*]u8;
```

## `bz_getEnumCase`
```zig
fn bz_getEnumCase(enum_value: Value, case_name_value: Value, vm: *VM) Value;
```

## `bz_getEnumCaseFromValue`
```zig
fn bz_getEnumCaseFromValue(enum_value: Value, case_value: Value, vm: *VM) Value;
```

## `bz_getEnumInstanceValue`
```zig
fn bz_getEnumInstanceValue(enum_instance_value: Value) Value;
```

## `bz_getFiberProperty`
```zig
fn bz_getFiberProperty(vm: *VM, fiber: Value, property_idx: usize) Value;
```

## `bz_getListProperty`
```zig
fn bz_getListProperty(vm: *VM, list: Value, property_idx: usize, bind: bool) Value;
```

## `bz_getMapProperty`
```zig
fn bz_getMapProperty(vm: *VM, map: Value, property_idx: usize, bind: bool) Value;
```

## `bz_getObjectField`
```zig
fn bz_getObjectField(object_value: Value, field_idx: usize) Value;
```

## `bz_getObjectInstanceMethod`
```zig
fn bz_getObjectInstanceMethod(instance_value: Value, method_idx: usize, bind: bool, vm: *VM) Value;
```

## `bz_getObjectInstanceProperty`
```zig
fn bz_getObjectInstanceProperty(instance_value: Value, property_idx: usize) Value;
```

## `bz_getPatternProperty`
```zig
fn bz_getPatternProperty(vm: *VM, pattern: Value, property_idx: usize) Value;
```

## `bz_getProtocolMethod`
```zig
fn bz_getProtocolMethod(instance_value: Value, method_name: Value, vm: *VM) Value;
```

## `bz_getQualified`
```zig
fn bz_getQualified(self: *VM, qualified_name: [*]const u8, len: usize) Value;
```

## `bz_getRangeProperty`
```zig
fn bz_getRangeProperty(range_value: Value, property_idx: usize, bind: bool, vm: *VM) Value;
```

## `bz_getStringProperty`
```zig
fn bz_getStringProperty(vm: *VM, string: Value, method_idx: usize) Value;
```

## `bz_getUpValue`
```zig
fn bz_getUpValue(ctx: *NativeCtx, slot: usize) Value;
```

## `bz_getUserDataPtr`
```zig
fn bz_getUserDataPtr(userdata: Value) u64;
```

## `bz_listAppend`
```zig
fn bz_listAppend(list: Value, value: Value, vm: *VM) void;
```

## `bz_listConcat`
```zig
fn bz_listConcat(list: Value, other_list: Value, vm: *VM) Value;
```

## `bz_listGet`
```zig
fn bz_listGet(list: Value, index: i32, checked: bool) Value;
```

## `bz_listLen`
```zig
fn bz_listLen(list: Value) usize;
```

## `bz_listNext`
```zig
fn bz_listNext(list_value: Value, index: *Value, vm: *VM) Value;
```

## `bz_listSet`
```zig
fn bz_listSet(list: Value, index: usize, value: Value, vm: *VM) void;
```

## `bz_listType`
```zig
fn bz_listType(vm: *VM, item_type: Value, mutable: bool) Value;
```

## `bz_mapConcat`
```zig
fn bz_mapConcat(map: Value, other_map: Value, vm: *VM) Value;
```

## `bz_mapGet`
```zig
fn bz_mapGet(map: Value, key: Value) Value;
```

## `bz_mapNext`
```zig
fn bz_mapNext(map_value: Value, index: *Value) Value;
```

## `bz_mapSet`
```zig
fn bz_mapSet(map: Value, key: Value, value: Value, vm: *VM) void;
```

## `bz_mapType`
```zig
fn bz_mapType(vm: *VM, key_type: Value, value_type: Value, mutable: bool) Value;
```

## `bz_memcpy`
```zig
fn bz_memcpy(dest: [*]u8, dest_len: usize, source: [*]u8, source_len: usize) void;
```

## `bz_newForeignContainerFromSlice`
```zig
fn bz_newForeignContainerFromSlice(vm: *VM, type_def: Value, ptr: [*]u8, len: usize) Value;
```

## `bz_newForeignContainerInstance`
```zig
fn bz_newForeignContainerInstance(vm: *VM, typedef_value: Value) Value;
```

## `bz_newList`
```zig
fn bz_newList(vm: *VM, list_type: Value) Value;
```

## `bz_newMap`
```zig
fn bz_newMap(vm: *VM, map_type: Value) Value;
```

## `bz_newObjectInstance`
```zig
fn bz_newObjectInstance(vm: *VM, object_value: Value, typedef_value: Value) Value;
```

## `bz_newQualifiedObjectInstance`
```zig
fn bz_newQualifiedObjectInstance(self: *VM, qualified_name: [*]const u8, len: usize, mutable: bool) Value;
```

## `bz_newRange`
```zig
fn bz_newRange(vm: *VM, low: i32, high: i32) Value;
```

## `bz_newUserData`
```zig
fn bz_newUserData(vm: *VM, userdata: u64) Value;
```

## `bz_newVM`
```zig
fn bz_newVM(self: *VM) *VM;
```

## `bz_panic`
```zig
fn bz_panic(vm: *VM, msg: [*]const u8, len: usize) void;
```

## `bz_peek`
```zig
fn bz_peek(self: *VM, distance: u32) Value;
```

## `bz_pop`
```zig
fn bz_pop(self: *VM) Value;
```

## `bz_popTryCtx`
```zig
fn bz_popTryCtx(self: *VM) void;
```

## `bz_push`
```zig
fn bz_push(self: *VM, value: Value) void;
```

## `bz_pushError`
```zig
fn bz_pushError(self: *VM, qualified_name: [*]const u8, len: usize, message: ?[*]const u8, mlen: usize) void;
```

## `bz_pushErrorEnum`
```zig
fn bz_pushErrorEnum(self: *VM, qualified_name: [*]const u8, name_len: usize, case: [*]const u8, case_len: usize) void;
```

## `bz_rangeNext`
```zig
fn bz_rangeNext(range_value: Value, index_slot: Value) Value;
```

## `bz_readZigValueFromBuffer`
```zig
fn bz_readZigValueFromBuffer(vm: *VM, ztype: *ZigType, at: usize, buf: [*]u8, len: usize) Value;
```

## `bz_rethrow`
```zig
fn bz_rethrow(vm: *VM) void;
```

## `bz_run`
```zig
fn bz_run(self: *VM, source: ?[*]const u8, source_len: usize, file_name: ?[*]const u8, file_name_len: usize) bool;
```

## `bz_serialize`
```zig
fn bz_serialize(vm: *VM, value: Value, error_value: *Value) Value;
```

## `bz_setObjectField`
```zig
fn bz_setObjectField(object_value: Value, field_idx: usize, value: Value, vm: *VM) void;
```

## `bz_setObjectInstanceProperty`
```zig
fn bz_setObjectInstanceProperty(instance_value: Value, property_idx: usize, value: Value, vm: *VM) void;
```

## `bz_setTryCtx`
```zig
fn bz_setTryCtx(self: *VM) *TryCtx;
```

## `bz_setUpValue`
```zig
fn bz_setUpValue(ctx: *NativeCtx, slot: usize, value: Value) void;
```

## `bz_stringConcat`
```zig
fn bz_stringConcat(string: Value, other: Value, vm: *VM) Value;
```

## `bz_stringNext`
```zig
fn bz_stringNext(string_value: Value, index: *Value, vm: *VM) Value;
```

## `bz_stringSubscript`
```zig
fn bz_stringSubscript(obj_string: Value, index_value: Value, checked: bool, vm: *VM) Value;
```

## `bz_stringToValue`
```zig
fn bz_stringToValue(vm: *VM, string: ?[*]const u8, len: usize) Value;
```

## `bz_stringToValueZ`
```zig
fn bz_stringToValueZ(vm: *VM, string: ?[*:0]const u8) Value;
```

## `bz_stringType`
```zig
fn bz_stringType(vm: *VM) Value;
```

## `bz_throw`
```zig
fn bz_throw(vm: *VM, value: Value) void;
```

## `bz_valueCastToString`
```zig
fn bz_valueCastToString(value: Value, vm: *VM) Value;
```

## `bz_valueDump`
```zig
fn bz_valueDump(value: Value, vm: *VM) void;
```

## `bz_valueEqual`
```zig
fn bz_valueEqual(self: Value, other: Value) Value;
```

## `bz_valueIs`
```zig
fn bz_valueIs(self: Value, type_def: Value) Value;
```

## `bz_valueIsForeignContainer`
```zig
fn bz_valueIsForeignContainer(value: Value) bool;
```

## `bz_valueToCString`
```zig
fn bz_valueToCString(value: Value) ?[*:0]const u8;
```

## `bz_valueToForeignContainerPtr`
```zig
fn bz_valueToForeignContainerPtr(value: Value) [*]u8;
```

## `bz_valueToString`
```zig
fn bz_valueToString(value: Value, len: *usize) ?[*]const u8;
```

## `bz_valueTypeOf`
```zig
fn bz_valueTypeOf(self: Value, vm: *VM) Value;
```

## `bz_writeZigValueToBuffer`
```zig
fn bz_writeZigValueToBuffer(vm: *VM, value: Value, ztype: *const ZigType, at: usize, buf: [*]u8, capacity: usize) void;
```

## `bz_zigType`
```zig
fn bz_zigType(vm: *VM, ztype: [*]const u8, len: usize, expected_type: *Value) ?*ZigType;
```

## `bz_zigTypeAlignment`
```zig
fn bz_zigTypeAlignment(self: *ZigType) u16;
```

## `bz_zigTypeSize`
```zig
fn bz_zigTypeSize(self: *ZigType) usize;
```

## `bz_zigTypeToCString`
```zig
fn bz_zigTypeToCString(self: *ZigType, vm: *VM) [*:0]const u8;
```

