// Function Expressions

console.log("Function Expressions\n\n");
console.log("This Function is assigned to a variable as its value and it is name less function ");

// name variable
let myName = function(fname) {
    console.log("My name is :", fname);
}
myName("Rohit");
console.log("\n");

// sum variable
let sum = function(a, b){
    return a + b;
}
console.log(sum);
console.log(sum("Sum of a and b = ", 5, 3));