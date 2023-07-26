// Every And Sum - Array Method

console.log("Every And Sum - Array Method \n\n");

// Every Array Method
console.log("Every Array Method | Logical AND &&");
console.log("Returns true if every element of array gives true for some function. Else returns false. \n\n");

let arr = [1, 2, 3, 4];
console.log("Normal Array");
console.log(arr);
arr.every((el) => {
    console.log("Every Method");
    console.log (el % 2 == 0);
});
console.log("\n");

let evenArr = [2, 4, 6, 8];
console.log("Even Array");
console.log(evenArr);
evenArr.every((el) => {
    console.log("Every Method");
    console.log(el % 2 == 0);
});
console.log("\n");

let oddArr = [1, 3, 5, 6];
console.log("Odd Array");
console.log(oddArr);
oddArr.every((el) => {
    console.log("Every Method");
    console.log(el % 2 != 0);
});
console.log("\n\n");


// Some Array Method
console.log("Some Array Method | Logical OR ||");
console.log("Returns true if some elements of array give true for some function. Else returns false \n\n");

let arr1 = [1, 2, 3, 4];
console.log("Normal Array");
console.log(arr1);
let arr11 = arr1.some((el) => {
    return el % 2 == 0;
});
console.log("Some Method");
console.log(arr11);
console.log("\n");


let evenArr1 = [2, 4, 6, 8];
console.log("Even Array");
console.log(evenArr1);
let even1 = evenArr1.some((el) => {
    return (el % 2 == 0);
});
console.log("Some Method");
console.log(even1);
console.log("\n");


let oddArr1 = [1, 3, 5, 6];
console.log("Odd Array");
console.log(oddArr1);
let odd1 = oddArr1.some((el) => {
    return (el % 2 != 0);
});
console.log("Some Method");
console.log(odd1);
console.log("\n\n");
