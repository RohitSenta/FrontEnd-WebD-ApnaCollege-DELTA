console.log("Arrays In JavaScript !!!\n\n");


// let student1 = "Rohit";
// let student2 = "Anil";
// let student3 = "Hardik";

let students = ["Rohit", "Anil", "Hardik"];
console.log(students[0], "\n");
let nums = [2, 4, 6, 8];
console.log(nums[2]);
console.log("\n\n");


console.log("Creating An Array\n\n");

let marks = [99, 95, 78, 82, 90];
console.log("Marks :", marks);
let names = ["Adam", "Max", "Bob"];
console.log("Names :", names);
let info = ["Rohit", 45, 5.5]; // mixed array
console.log("Info :", info);
let newArr = []; // empty array
console.log("Empty Arr :", newArr);
console.log("\n");

console.log("Data of Info : first item is '", info[0],"' and first charecter of first item is :", info[0][0]);
console.log("\n\n");


console.log("Arrays Are Mutable\n\n");
console.log("You can change Array Value\n\n");
let fruits = ["Banana", "Apple", "Orange"];
console.log(fruits);
console.log(fruits[0]);
fruits[0] = "Mango";
console.log(fruits[0]);
console.log(fruits);
fruits[3] = "Pinapple";
console.log(fruits);
fruits[8] = "Watermalon";
console.log(fruits);