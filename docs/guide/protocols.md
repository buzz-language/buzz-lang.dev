# Protocols

A `protocol` is a set of methods. Objects can conform to any number of them:
```buzz
protocol Translatable {
    fun translate(int dx, int dy) > void;
}

protocol Printable {
    fun print() > void;
}

object(Translatable, Printable) Point {
    int x,
    int y,

    fun translate(int dx, int dy) > void {
        this.x = this.x + dx;
        this.y = this.y + dy;
    }

    fun print() > void {
        print("Point ({this.x}, {this.y})");
    }
}

object(Printable) Line {
    Point start,
    Point end,

    fun print() > void {
        print("Line ({this.start.x}, {this.start.y}) ({this.end.x}, {this.end.y})");
    }
}

| ...

[Printable] elements = [
    Point{ x = 0, y = 0 },
    Line{
        start = Point{ x = 10, y = 10 },
        end = Point{ x = 15, y = 12 },
    },
];

foreach (int i, Printable element in elements) {
    element.print();
}
```
