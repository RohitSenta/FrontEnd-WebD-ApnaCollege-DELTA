// Spread In JavaScript

console.log("Spread In JavaScript \n\n");
console.log("Expands an iterable into multiple value \n\n");

console.log("Spread With Array");
let arr = [2, 5, 7, 4, 3, 1, 9, 2, 4, 6, 2, 5];
console.log("Numbers Array :", arr);
let min = Math.min(...arr);
console.log("Minimum Number Of Array :", min);
let max = Math.max(...arr);
console.log("Maximum Number Of Array :", max);
console.log("Number Array With Spread :", ...arr);
console.log("\n");

console.log("Spread With String");
let str = "ApnaCollege";
console.log("String :", str);
console.log("Str With Spread :", ...str);
console.log("\n\n");


// Spread With An Array Literals
console.log("Spread With Array Literals \n\n");

let arr1 = [1, 2, 3, 4, 5];
console.log("Number Array :", arr1);
let newArr = [...arr1];
console.log("New Array :", newArr);
newArr.push(6);
console.log("New Array With Push :", newArr);
console.log("\n");

console.log("Spread With Strings \n\n");
let str1 = "Hello World !";
console.log("String :", str1);
let newStr = [...str1];
console.log("String Array :", newStr);
console.log("\n");

console.log("Two Array Spread");
let odd = [1, 3, 5, 7, 9];
console.log("Odd Array :", odd);
let even = [2, 4, 6, 8, 10];
console.log("Even Array :", even);
let allNum = [...odd, ...even];
console.log("Common Array :", allNum);
console.log("\n\n");


// Spread With An Object Literals
console.log("Spread With Object Literals \n\n");

const data = {
    email: "rohitsenta@gmail.com",
    password: "abcd",
};
console.log("User data :", data);

let dataCopy = {
    ...data,
    id: 1234,
    country: "India",
};
console.log("User data with ID :", dataCopy);
console.log("\n");

console.log("Array And String As Object \n\n");
let nums = [1, 2, 3, 4, 5]; // value
console.log("Nums Array :", nums);
let obj1 = {
    ...nums,
};
console.log("Nums As Object :", obj1); // key:Value Pair
console.log("\n");

let string = "Hello World !";
console.log("String :", string);
let obj2 = {
    ...string,
};
console.log("String As Object :", obj2);
console.log("\n\n");