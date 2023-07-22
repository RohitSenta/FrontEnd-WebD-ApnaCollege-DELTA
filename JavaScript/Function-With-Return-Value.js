// Function With Return Value

console.log("Function With Retuen Value \n\n");
console.log("Return Keyword is used to return some value from the function");
console.log("\n");

console.log("Sum of Two Values");
function sumTwo(a, b){
    console.log(`Sum of ${a} And ${b} :`);
    return a + b;
}
let sum1 = sumTwo(3, 4);
console.log("Sum =", sum1);
console.log("\n");


console.log("Sum of Three or more Values");
function sumThree(a, b) {
    return a + b;
}
let sum2 = sumThree(sumThree(5, 3), 4);
console.log("Sum of 3 Value :", sum2);
console.log("\n\n");


console.log("Age Check");
function isAdult(age){
    if(age >= 18){
        return "Adult";
    } else {
        return "Not Adult";
    }
}
console.log("You are :", isAdult(17));
