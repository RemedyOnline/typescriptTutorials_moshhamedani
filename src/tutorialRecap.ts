// Basic Types in TypeScript

let x: number = 10;
x = 30;

// 1. String
let message: string = "Hello, TypeScript!";
console.log(message);

// 2. Number
let myAge: number = 25;
console.log(`Age: ${myAge}`);

// 3. Boolean
let isActive: boolean = true;
console.log(`Is Active: ${isActive}`);

// 4. Array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(`Numbers: ${numbers}`);

// 5. Tuple
let person: [string, number] = ["John", 30];
console.log(`Person: ${person}`);

// 6. Enum
enum Color {
  Red,
  Green,
  Blue,
}
let favoriteColor: Color = Color.Green;
console.log(`Favorite Color: ${favoriteColor}`);

let worseColor: Color = Color.Red;
console.log(`Worse Color: ${worseColor}`);

// 7. Any
let randomValue: any = "Hello";
randomValue = 42;
console.log(`Random Value: ${randomValue}`);

// 8. Void
function logMessage(message: string): void {
  console.log(message);
}
logMessage("This is a void function");

// 9. Null and Undefined
let u: undefined = undefined;
let n: null = null;
console.log(`Undefined: ${u}, Null: ${n}`);

// 10. Never
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

// Uncomment the line below to see the error
// throwError("This is an error");

// 11. Object
let userDetails: object = { name: "Alice", age: 25 };
console.log(`User: ${JSON.stringify(userDetails)}`);
