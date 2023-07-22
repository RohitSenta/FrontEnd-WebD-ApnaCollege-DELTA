// Function Practice Quesions
console.log("Function Practice Questions \n\n");
console.log("\n");


// practice question 1
console.log("Practice Question-1 : Create a Function that prints a poem \n\n");

function printPoem() {
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are");
}
printPoem();
console.log("\n\n");


// practice question 2
console.log("Practice Question-2 : Create a Function to roll a dice & always display the value of the dice (1 to 6) \n\n");

function rollDice() {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log("Dice Number :", random);
}
rollDice();
console.log("\n\n");


// practice question 3
console.log("Practice Question-3 : Create a Function that gives usthe avarage of 3 numbers \n\n");

function calcAvg(n1, n2, n3){
    let avg = (n1+n2+n3)/3
    console.log(`Avarage of ${n1}, ${n2} and ${n3} is : ${avg}`);
}
console.log(calcAvg);
calcAvg(20, 70, 30);
console.log("\n\n");


// practice question 4
console.log("Practice Question-4 : Create a Function that prints the multiplication table of a number \n\n");

function printTable(n) {
    console.log(`Table Of Number: ${n}`);
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
printTable(5);
console.log("\n\n");


// practice question 5
console.log("Practice Question-5 : Create a Function that returns the sum of numbers 1 to n \n\n");

function getSum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}
console.log("Sum of Number 1 to n", getSum(10));
console.log("\n\n");


// practice question 6
console.log("Practice Question-6 : Create a Function that returns the concatenation of all strings in an array \n\n");

let str = ["Hello", " ", "Java", "Script", "!!!"];
console.log(str);

function concStr(str) {
    let result = "";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

console.log(concStr);
console.log("Concatenation Of String :", concStr(str));
console.log("\n\n");


// practical question 7
console.log("Practical Question-7 : What will be the output of the following code \n\n");

let greet = "Hello !";

function changeGreet() {
    let greet = "Namaste !";
    console.log(greet);         // Function Scope
    function innerGreet() {
        console.log(greet);     // Laxical Scope
    }
    innerGreet();
}

console.log(greet);     // Globle Scope
changeGreet();