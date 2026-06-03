# Protocols

A `protocol` is a set of methods. Objects can conform to any number of them:
```buzz
protocol Translatable {
    mut fun translate(dx: int, dy: int) > void;
}

protocol Printable {
    fun print() > void;
}

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

// ...

final elements = [
    Point{ x = 0, y = 0 },
    Line{
        start = Point{ x = 10, y = 10 },
        end = Point{ x = 15, y = 12 },
    },
];

foreach (element in elements) {
    element.print();
}
```
