// Assignment Questions JS Part-3

console.log("Assignment Questions JS Part-4 \n\n");
console.log("\n");


// question 1
console.log("Q-1: Write a JavaScript program to get the first n elements of an array.");
let n1 = 3;
let exp1 = [7, 9, 0, -2];
let ans1 = exp1.slice(0, n1);
console.log(ans1);
console.log("\n\n");


// question 2
console.log("Q-2: Write a JavaScript program to get the first n elements of an array.")
let n2 = 3;
let exp2 = [7, 9, 0, -2];
let ans2 = exp1.slice((exp2.length)-n2);
console.log(ans2);
console.log("\n\n");


// question 3
console.log("Q-3: Write a program to check whether a string is blank or not.");
let str = prompt("Please Enter String");

if(str.length == 0){
    console.log("String is Blank ");
} else {
    console.log("String is Not Blank ");
}
console.log("\n\n");


// question 4
console.log("Q-4: Write a JavaScript program to test whether the character at the given index is lower case.");
let str1 = "ApnACoLLeGe";
console.log(str1);
let idx = 5;
console.log("index no :", idx);
if(str1[idx] == str1[idx].toLowerCase()){
    console.log("Charecter is LowerCase");
} else {
    console.log("Charecter is Not LowerCase");
}
console.log("\n\n");


// question 5
console.log("Q-5: Write a JavaScript program to strip leading and trailing spaces from a string.");
let str2 = prompt("Please Enter String!");
console.log(str2);
let newstr2 = str2.trim();
console.log(newstr2);
console.log("\n\n");

// question 6
console.log("Q-6: Write a JavaScript program to check if an element exists in an array or not");
let arr1 = ["january", 2, "march", 4 ,"may", 6, "july", 8, "september", 10, "november", 12];
// console.log(arr1.includes("april"));
let item = "november";
if(arr1.indexOf(item) != -1){
    console.log("Element is Exists in Array!");
} else {
    console.log("Element Not Exists in Array!");
}