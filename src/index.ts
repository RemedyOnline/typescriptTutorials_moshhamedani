console.log("Hi TypeScript");
console.log("This is my second Tutorial on you bro!");
console.log("I'm here to murder you, niqqa!!!!!!!!!");

let age: number = 15;
console.log(`My age is ${age}`);

if (age < 50) age += 10;
console.log(age);

let sales = 123456780;
let marks = 54345_2342;
let course = "Java";
let is_Married = true;
let level;

function render(document: any) {
	console.log(document);
}

// Enums
const small = 2;
const medium = 4;
const large = 6;

const enum Size {
	Small = 3,
	Medium = 6,
	Large = 9,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// TS Functions
function calculateTax(income: number, taxYear = 2010): number {
	//let y;
	let x;
	x = 3;
	if (taxYear <= 2_020) {
		return income * 1.2;
	} else {
		return (income * x) / 2;
	}
}

console.log(calculateTax(1700));

// TYPE ALIASES
type Employee = {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
};

let employee: Employee = {
	id: 1,
	name: "",
	retire: (date: Date) => {
		console.log(date);
	},
};

employee.name = "Mike";
// employee.id = 3;

// ADVANCED TYPES

// UNION TYPES
function kgToLbs(weight: number | string): number {
	if (typeof weight === "number") {
		return weight * 2;
	} else {
		return parseInt(weight) * 3;
	}
}

kgToLbs(12);
//kgToLbs(true);
kgToLbs("4kg");

// INTERSECTION TYPES
type Draggable = {
	drag: () => void;
};

type Resizable = {
	resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
	drag: () => {},
	resize: () => {},
};

let height: number & string;

// LITERAL TYPES
type EvenSizes = 20 | 40 | 60 | 80;
let size: EvenSizes = 40;

type Metrics = "cm" | "inch";

// NULLABLE TYPES
function greet(name: string | null | undefined) {
	if (name) console.log(name.toUpperCase());
	else console.log("Hellooo!");
}

greet(undefined);

// OPTIONAL CHAINING
type Customer = {
	birthday?: Date;
};

function getCustomer(id: number): Customer | null {
	return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// 1. if (customer !== null && customer !== undefined) console.log(customer.birthday);

// 2. Optional Property Access Operator...
console.log(customer?.birthday);
console.log(customer?.birthday?.getFullYear);

// 3. Optional Element access operator
//this is used when you are dealing with arrays.. Eg. customers[0]
//customers?.[0];

// . Optional Call
// let log: any = (message: )
