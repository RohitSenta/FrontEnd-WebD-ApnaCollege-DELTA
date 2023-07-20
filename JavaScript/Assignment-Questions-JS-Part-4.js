console.log("Assignment Questions JavaScript Part-4 \n\n");


// question 1
console.log("Q-1 : Write a JS program to delete all occurrences of element 'num' in given array. \n\n");
let arr = [1, 2, 4, 3, 7, 9, 6, 3, 5, 2, 1];
console.log(arr);
let num = prompt("Enter number that you want to delete (0 to 9)");

for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i, 1);
    }
}
console.log(arr);
console.log("\n\n");


// question 2
console.log("Q-2 : Write a JS program to find no. of digits in given number\n\n");
let addNum = prompt("Enter any number ");
let count = 0;

for(let i=0; i<addNum.length; i++){
    count++;
}
console.log("Number of digits :", count);
console.log("\n\n");


// question 3
console.log("Q-3 : Write a JS program to find the sum of digits of number \n\n");
let sumNum = prompt("Enter the number for sum of digits ");
// let sumNum = 123455;
let sum = 0;
// let digit;
// let copy = sumNum;

for(let i=0; i<=sumNum; i++){
    digit = sumNum % 10;
    sum = sum + digit;
    sumNum = Math.floor(sumNum/10);
}
console.log("Total sum of digits of given number is :", sum);
console.log("\n\n");


// question 4
console.log("Q-4 : Write a JS program to print the factorial of number n \n\n");
let factNum = prompt("Enter number for find factorial");
let factorial = 1;

for(let i=1; i<=factNum; i++){
    factorial = factorial * i;
}
console.log(`Factorial of number ${factNum} is ${factorial}`);
console.log("\n\n");


// question 5
console.log("Q-5: Find largest number in an array with only positive numbers\n\n");
let arrlarge = [3, 15, 52, 42, 9, 24, 11, 35];
let largestNum = 0;

for(let i=0; i<arrlarge.length; i++){
    if(largestNum < arrlarge[i]){
        largestNum = arrlarge[i];
    }
}
console.log(`Largest number in array is : ${largestNum}`);
console.log("\n\n");