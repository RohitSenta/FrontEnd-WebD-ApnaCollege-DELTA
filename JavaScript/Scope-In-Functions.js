// Scope In Functions

console.log("Scope In Functions \n\n");
console.log("Scope is determines the accessibility of variables, objects, and functions from different parts of the code \n\n");

console.log("Three types of scope");
console.log("1. Function Scope");
console.log("1. Block Scope");
console.log("1. Laxical Scope");
console.log("\n\n");


// Function Scope 
console.log("1. Function Scope");
console.log("Variable defined inside a function are not accessible(visible) from outside the function \n\n");

let sum = 45; // Globle Scope Variable
function calcSum(a, b) {
    let sum = a + b; // Function Scope Variable
    console.log("Sum Inside Function =", sum)
}
calcSum(2, 3);
// console.log("Sum variable is not accessible form outside of function");
console.log("Globle Scope Variable :", sum);
console.log("\n\n");


// Block Scope
console.log("Block Scope");
console.log("Variable declared inside a {} block cannot be accessed from outside the block \n\n");

{
    let a = 25;     // Block Scope
    const b = 40;   // Blocl Scope
    var c = 45;     // Not A Block Scope
}
console.log("let and const keyword have a block scope that's why it is cannot accessed, but var keyword not have a block scope so it can be accessed");
// console.log("A =", a);
// console.log("B =", b);
console.log("C =", c);
console.log("\n\n");


// Laxical Scope
console.log("Laxical Scope");
console.log("A variable defined outside a function can be accessible inside another function defined after variable declaration");
console.log("The opposite is NOT true \n\n");

function outerFunc() {
    let x = 5;
    let y = 3;

    function innerFunc() {  // Function Scope
        console.log("x =", x);  // Laxical Scope
        console.log("y =", y);  // Laxical Scope
    }

    innerFunc();
}
outerFunc();
console.log("\n\n");