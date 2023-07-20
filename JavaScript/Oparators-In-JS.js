
// Operators 
// Assignment & Arithmatic Oparator
console.log("Assignment & Arrithmatic Oparator");
let a = 10;
let b = 5;
console.log("Sum is : ", a + b);
console.log("\n\n");

// comparison oparator
console.log("Comparison Oparator");
let age1 = 16;
let age2 = 23;
console.log (`Age1 is : ${age1}`);
console.log (`Age2 is : ${age2}`);
console.log (`Age1 is Greater than 18 : ${age1 > 18}`);
console.log (`Age1 is Lesser than 18 : ${age1 < 18}`);

console.log (`Age2 is equals to 18 : ${age2 == 18}`);
console.log (`Age2 is Greaterthan or equals to 18 : ${age2 >= 18}`);
console.log (`Age2 is Lesserthan or equals to 18 : ${age2 <= 18}`);
console.log (`Age2 is Not equals to 18 : ${age2 <= 18}`);
console.log ("\n\n");

// Logical Operator
console.log("Logical Operators\n\n");

console.log("Logical && AND Operator");
console.log("If Both Conditions Are True Than and Than Ans Will Be True");
let mathMarks = 88;
if (mathMarks >= 33 && mathMarks >= 80){
    console.log ("You Are Passed Exam !");
    console.log ("You Got A+ Grade");
}
console.log("\n");

console.log("Logical || OR Operator");
console.log("If Any One Conditions Are True Than Ans Will Be True");
let phyMarks = 75;
if (phyMarks >= 33 || phyMarks >= 80){
    console.log ("You Are Passed Exam !");
    console.log ("You Got A+ Grade");
}
console.log("\n");

console.log("Logical ! NOT Operator");
console.log("it is reverse the resuts - !true = false, !false = true");
let chamMarks = 44;
if (!(chamMarks<33)){
    console.log("You have Cleared Exam!");
}
console.log("\n\n");


console.log("Practice Question\n\n");
console.log("A 'Good String' is a string that start with the latter 'a' and has a lenght > 3. write a program to find if a string is good or not");

let strName = "ajay";
if((strName[0]==='a') && (strName.length > 3)){
    console.log("String is Good !");
} else {
    console.log("String is Not Good !!!");
}

let number1 = 12;
if((number1%3 === 0) && ((number1+1 == 15) || (number1-1 == 11))){
    console.log("Safe !");
} else {
    console.log ("Not Safe!!");
}
console.log("\n\n");

