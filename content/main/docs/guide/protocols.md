# Protocols

A `protocol` describes a set of methods without choosing a concrete object type.
It lets you write code in terms of behavior instead of a specific implementation.

## Declaring a protocol
Declare a protocol with one or more method signatures:

```buzz
protocol Translatable {
    mut fun translate(dx: int, dy: int) > void;
}

protocol Printable {
    fun print() > void;
}
```

The protocol only defines the required methods.
It does not declare fields or method bodies.

## Conforming to protocols
An object can conform to any number of protocols by listing them after `object`:

```buzz
object<Translatable, Printable> Point {
    x: int,
    y: int,

    mut fun translate(dx: int, dy: int) > void {
        this.x = this.x + dx;
        this.y = this.y + dy;
    }

    fun print() > void {
        std\print("Point ({this.x}, {this.y})");
    }
}

object<Printable> Line {
    start: Point,
    end: Point,

    fun print() > void {
        std\print("Line ({this.start.x}, {this.start.y}) ({this.end.x}, {this.end.y})");
    }
}
```

Each listed protocol method must be implemented by the object.
If a required method is missing, the compiler reports it.

Protocol methods can be regular methods, `mut` methods, and methods that can raise errors.
What matters is that the object provides the required signature.

Once a value conforms to a protocol, that protocol can be used like any other type: it can be stored in variables, passed as a method parameter, and placed in heterogeneous collections such as `[Printable]` or maps whose keys or values are protocol-typed. When you need the concrete object back, you can downcast a protocol value with `value as? T`, `value as! T`, or `if (value as concrete: T)`.

```buzz
// A protocol can be used directly in a parameter type.
fun render(shape: Printable) > void {
    shape.print();
}

// A concrete object can be stored behind the protocol type.
final point: Printable = Point{ x = 1, y = 2 };

// Different concrete types can share the same collection.
final shapes: [Printable] = [
    point,
    Line{
        start = Point{ x = 0, y = 0 },
        end = Point{ x = 3, y = 4 },
    },
];

render(point);

// `as?` returns `null` if the value is not a `Point`.
final maybePoint = point as? Point;
// `as!` assumes the value is a `Point` and raises an error otherwise.
final forcedPoint = point as! Point;

// `if (value as name: T)` downcasts and binds the concrete value.
if (point as concrete: Point) {
    std\print("{concrete.x}, {concrete.y}");
}
```
