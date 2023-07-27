// Default Parameter

console.log("Default Parameter - Method \n\n");
console.log("Giving a default value to the arguments \n\n");
console.log("\n");

function sum(a, b = 5){
    return a + b;
}
console.log(sum);
console.log("Sum of a + b :", sum(5, 3));
console.log("Sum With Default Value a + b :", sum(2));
console.log("\n\n");