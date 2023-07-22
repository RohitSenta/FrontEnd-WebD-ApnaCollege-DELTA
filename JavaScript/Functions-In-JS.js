// Functions In JavaScript

console.log("Functions In JavaScript \n\n");
console.log("Function is a block of code that is prefrom/work when it is called. You can call it when you required. \n\n");
console.log("\n");

// first function
function myFunction() {
    console.log("Hello World!!!");
    console.log("This is my first Function in JavaScript !");
}
myFunction();
myFunction();
console.log("\n\n");

// print name function
console.log("Print Name :");
function printName() {
    console.log("Rohit Senta");
    console.log("Apna College");
}
printName();
console.log("\n\n");

// loops in function
console.log("Loops in function");
function print1to5() {
    console.log("Print numbers from 1 to 5");
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5();
console.log("\n\n");

// if-else condition in function
console.log("if-else condition in function");
function isAdult() {
    let age = 19;
    if(age >= 18){
        console.log("Adult");
    } else {
        console.log("Not Adult");
    }
}
isAdult();
console.log("\n\n");

