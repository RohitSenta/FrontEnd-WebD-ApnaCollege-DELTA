// Arrow => Functions

console.log("Arrow Functions \n\n");

const greet = () => {
    console.log("Hello !!");
    console.log("Namaste !!");
}
console.log(greet());
console.log("\n\n");


const sum = (a, b) => {
    console.log(a + b);
};
console.log("sum of a & b :");
let sum1 = sum(5, 3);
console.log(sum);
console.log("\n\n");


const cube = n => {     // paranthesis are optional for single argument
    return n * n * n;
}
let c = cube(3);
console.log("cube of number n :", c);
console.log("\n\n");


const pow = (a, b) => {
    return a**b;
}
let p = pow(2, 3);
console.log("a to the power b :", p);
console.log("\n\n");



// implicite return in arrow function
console.log("Implicit return in Arrow Function");
console.log("Implicit return automatic return value  \n\n");

let mul = (a, b) => a * b; 
let multi = mul(2, 3);
console.log("Multiplication of a & b :", multi);

let add = (a, b) => (
    a + b
)
let addition = add(3, 5);
console.log("Addition of a & b :", addition);
