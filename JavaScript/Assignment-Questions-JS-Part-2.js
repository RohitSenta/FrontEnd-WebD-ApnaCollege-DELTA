console.log("Assignment Question JS Part-2\n\n\n");

console.log("Q-1: Create a number variable num with some value.");
console.log("Now, print “good” if the number is divisible by 10 and print “bad” if it is not.\n\n");

let num = 220;
if(num%10 === 0){
    console.log("Number is Good");
} else {
    console.log("Number is not Good");
}
console.log("\n\n");


console.log("Q-2: Take the user's name & age as input using prompts.");
console.log("Then return back the following statement to the user as an alert (by substituting their name & age): name is age years old.\n\n");

let fname = prompt("Enter Your Name : ");
let age = prompt("Enter Your Age : ");

console.log(`${fname} is ${age} years old.`);
alert(`${fname} is ${age} years old.`);
console.log("\n\n");


console.log("Q-3: Write a switch statement to print the months in a quarter.\n\n");
let QuarterNum = 4;
switch (QuarterNum) {
    case 1 :
        console.log("Months In Quarter 1 is : January, Fabruary And March");
        break;
    case 2 : 
        console.log("Months In Quarter 2 is : April, May And June");
        break;
    case 3 :
        console.log("Months In Quarter 3 is : July, August And September");
        break;
    case 4 : 
        console.log("Months In Quarter 4 is : October, November And December");
        break;
    default :
        console.log("You Enter Wrong Quarter Number !!!");
}
console.log("\n\n");


console.log("Q-4: String is a 'golden string' if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.");
console.log("For a given string print if it is golden or not.\n\n");

let goldenStr = "Alphaits";
if(((goldenStr[0] == 'A') || (goldenStr[0] == 'a')) && (goldenStr.length > 5)){
    console.log("Given String is a Golden String !");
} else {
    console.log("Given Sting is Not a Golden String !!!");
}
console.log("\n\n");


console.log("Q-5 : Write a program to find the largest of 3 numbers.\n\n");

let num1 = 73;
let num2 = 45;
let num3 = 63;

if(num1 > num2){
    if (num1 > num3){
        console.log(`Number 1 is Largest Number : ${num1}`);
    } 
    else {
        console.log(`Number 3 is largest Number : ${num3}`);
    }
}
else if(num2 > num3){
    console.log(`Number 2 is Largest Number : ${num2}`);
}
else {
    console.log(`Number 3 is largest Number : ${num3}`);
}
console.log("\n\n");


console.log("Q-6 : Write a program to check if 2 numbers have the same last digit.\n\n");

let number1 = 222;
let number2 = 55552;

if((number1%10) == (number2%10)){
    console.log("Number 1 And Number 2 both have a same last digit ! which is :", (number1%10));
}
else {
    console.log("Number 1 And Number 2 both have a different last digit !!!");
}
console.log("\n\n");
