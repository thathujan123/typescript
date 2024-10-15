let myString: string = "Hello, TypeScript";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myNumberArray: number[] = [1, 2, 3, 4, 5];
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log(addNumbers(5, 10));
interface Person {
  name: string;
  age: number;
}
function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}
const person: Person = { name: "Alice", age: 30 };
console.log(greet(person));
function getStringOrNumber(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * value;
  }
}
console.log(getStringOrNumber("TypeScript"));
console.log(getStringOrNumber(7));
class Car {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDetails(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getDetails());
function identity<T>(value: T): T {
  return value;
}
console.log(identity<string>("TypeScript"));
console.log(identity<number>(42));
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
function chooseDirection(direction: Direction): string {
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
function assertString(value: unknown): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    throw new Error("Value is not a string!");
  }
}
console.log(assertString("hello"));
