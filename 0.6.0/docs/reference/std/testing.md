# testing

## Tester
```buzz
object Tester
```
Test runner with assertion helpers.

### tests
```buzz
tests: mut [bool]
```
Test results.

### asserts
```buzz
asserts: mut [bool]
```
Assertion results.

### elapsed
```buzz
elapsed: double
```
Elapsed test time in milliseconds.

### beforeAll
```buzz
beforeAll: fun anonymous(t: Tester) > void?
```
Hook run once before all tests.

### beforeEach
```buzz
beforeEach: fun anonymous(t: Tester) > void?
```
Hook run before each test.

### afterAll
```buzz
afterAll: fun anonymous(t: Tester) > void?
```
Hook run once after all tests.

### afterEach
```buzz
afterEach: fun anonymous(t: Tester) > void?
```
Hook run after each test.

### init
```buzz
static fun init(beforeAll: fun anonymous(t: Tester) > void?, beforeEach: fun anonymous(t: Tester) > void?, afterAll: fun anonymous(t: Tester) > void?, afterEach: fun anonymous(t: Tester) > void?) > mut Tester
```
Creates a new tester and runs the `beforeAll` hook when provided.
- **`beforeAll`:** Hook run once before all tests
- **`beforeEach`:** Hook run before each test
- **`afterAll`:** Hook run once after all tests
- **`afterEach`:** Hook run after each test
**Returns:** A new `Tester`

### reset
```buzz
fun reset() > void
```
Clears test results and elapsed time.

### failedAsserts
```buzz
fun failedAsserts() > int
```
**Returns:** number of failed assertions

### failedTests
```buzz
fun failedTests() > int
```
**Returns:** number of failed tests

### succeededTests
```buzz
fun succeededTests() > int
```
**Returns:** number of succeeded tests

### it
```buzz
fun it(message: str, fn: fun anonymous() > void) > void
```
Runs a test case.
- **`message`:** Test description
- **`fn`:** Test body

### summary
```buzz
fun summary() > void
```
Prints a test summary and exits with a failure code when any test failed.

### report
```buzz
fun report(error: str?, message: str?) > void
```
Reports an assertion failure.
- **`error`:** Error details
- **`message`:** Assertion message

### assert
```buzz
fun assert(condition: bool, error: str?, message: str?) > void
```
Records whether an assertion condition succeeded.
- **`condition`:** Condition that must be true
- **`error`:** Error details printed when false
- **`message`:** Assertion message

### assertEqual
```buzz
fun assertEqual(actual: any, expected: any, message: str?) > void
```
Asserts that two values are equal.
- **`actual`:** Actual value
- **`expected`:** Expected value
- **`message`:** Assertion message

### assertNotEqual
```buzz
fun assertNotEqual(actual: any, expected: any, message: str?) > void
```
Asserts that two values are not equal.
- **`actual`:** Actual value
- **`expected`:** Value that should differ
- **`message`:** Assertion message

### assertAreEqual
```buzz
fun assertAreEqual(values: [any], message: str?) > void
```
Asserts that all values are equal.
- **`values`:** Values to compare
- **`message`:** Assertion message

### assertAreNotEqual
```buzz
fun assertAreNotEqual(values: [any], message: str?) > void
```
Asserts that adjacent values are not equal.
- **`values`:** Values to compare
- **`message`:** Assertion message

### assertOfType
```buzz
fun assertOfType::<T>(value: any, message: str?) > void
```
Asserts that a value has type `T`.
- **`value`:** Value to check
- **`message`:** Assertion message

### assertThrows
```buzz
fun assertThrows::<T>(fn: fun () > void !> T, message: str?) > void
```
Asserts that a function throws an error of type `T`.
- **`fn`:** Function expected to throw
- **`message`:** Assertion message

### assertDoesNotThrow
```buzz
fun assertDoesNotThrow::<T>(fn: fun anonymous() > void, message: str?) > void
```
Asserts that a function does not throw an error of type `T`.
- **`fn`:** Function expected not to throw
- **`message`:** Assertion message

