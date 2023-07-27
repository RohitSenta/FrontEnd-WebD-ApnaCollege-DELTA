// Assignment Questions JS Part-8

console.log("Assignment Questions JS Part-8 \n\n");
console.log("\n");


// Question 1
console.log("Q-1 : Square and sum the array elements using the arrow function and than find the avarage of array \n\n");

let arr1 = [1, 2, 3, 4, 5];
console.log("Normal Numbers Array :");
console.log(arr1);
console.log("\n");

// square
let Square = arr1.map((el) => {
    return el * el;
})
console.log("Square Of Numbers :");
console.log(Square);
console.log("\n");

// sum
let Sum = arr1.reduce((num, el) => {
    return num + el;
});
console.log("Sum Of Array Elements :", Sum);
console.log("\n");

// avarage
let Avg = Sum / arr1.length;
console.log("Avarage Of Array Elements :", Avg);
console.log("\n\n");


// Question 2
console.log("Q-2 : Create a new array using the map function whose each element equal to the original element plus 5 \n\n");

let arr2 = [2, 4, 6, 8];
console.log("Normal Array :", arr2);
console.log("\n");

let newArr2 = arr2.map((el) => {
    return el + 5;
});
console.log("New Array Of Element + 5 :", newArr2);
console.log("\n\n");


// Question 3
console.log("Q-3 : Create a new array whose elements are in uppercase of words presents in the original array \n\n");

let arr3 = ["tony", "steve", "thor", "bruce", "peter", "barton"];
console.log("Normal Array :", arr3);
console.log("\n");

let newArr3 = arr3.map((el) => {
    return el.toUpperCase();
});
console.log("New Array With Uppercase :", newArr3);
console.log("\n\n");


// Question 4
console.log("Q-4 : Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled. \n\n");

let arr4 = [1, 2, 3, 4, 5];

// function doubleAndReturnArgs (arr, ...args){
//     let new1 = args.map((el) => {
//         return el * 2;
//     });
//     let new2 = arr + "," + new1;
//     return new2;
// }

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr, 
    ...args.map((el) => el * 2),
];

let newArr4 = doubleAndReturnArgs(arr4, 5, 6, 7);
console.log("New Array :", newArr4);
console.log("\n\n");


// Question 5
console.log("Q-6 : Write function called mergeObjects that accepts two objects and return a new object which contains all the key and value of the first object and second object \n\n");
let obj1 = {
    a: 1,
    b: 2,
};
console.log("Object 1 :", obj1);
let obj2 = {
    c: 3,
    d: 4,
};
console.log("Object 2 :", obj2);

const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
});
let newObj = mergeObjects(obj1, obj2);
console.log("New Array :", newObj);
console.log("\n\n");