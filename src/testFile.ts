let myArray = [1, 2, 4, 8];
let myArray2 = [true, true, false, true];
let myArray3 = ["Hello", "TS"];
let myArray4: string[] = [];
myArray4[1] = "God";
myArray4[1] = "Hi";
for (let i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);
}

// TUPLES
let user: [number, string] = [1, "Mike"];
