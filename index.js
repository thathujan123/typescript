var myString = "Hello, TypeScript";
var myNumber = 42;
var myBoolean = true;
var myNumberArray = [1, 2, 3, 4, 5];
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 10));
function greet(person) {
    return "Hello, ".concat(person.name, "! You are ").concat(person.age, " years old.");
}
var person = { name: "Alice", age: 30 };
console.log(greet(person));
function getStringOrNumber(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * value;
    }
}
console.log(getStringOrNumber("TypeScript"));
console.log(getStringOrNumber(7));
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getDetails = function () {
        return "".concat(this.year, " ").concat(this.make, " ").concat(this.model);
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getDetails());
function identity(value) {
    return value;
}
console.log(identity("TypeScript"));
console.log(identity(42));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function chooseDirection(direction) {
    switch (direction) {
        case Direction.Up:
            return "You chose Up!";
        case Direction.Down:
            return "You chose Down!";
        case Direction.Left:
            return "You chose Left!";
        case Direction.Right:
            return "You chose Right!";
        default:
            return "Invalid direction!";
    }
}
console.log(chooseDirection(Direction.Left));
function assertString(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("Value is not a string!");
    }
}
console.log(assertString("hello"));
                                                