// conditional statements
// if statement
console.log ("before if condition statement");
let age = 23;
if(age >= 18){
    console.log ("You can vote!");
    console.log ("You can drive!");
    console.log (`age is : ${age}`);
}
if(age < 18){
    console.log ("You cannot vote!");
    console.log ("You cannot drive!");
    console.log (`age is : ${age}`);
}
console.log ("after if conditional statement");

let firstName = "Rohit";
if(firstName == "Rohit"){
    console.log (`Welcome ${firstName} !`);
}

console.log("\n\n");

// prectice question if condition
// traffic signsl light system
console.log("Practice Question - if Condition");
console.log("Create a traffic light system that shows what to do based on color.\n\n");

let color = "Red";
console.log(`Signal is : ${color}`);
if(color === "Red"){
    console.log("You Have to Stop !!!");
}
if(color === "Yellow"){
    console.log("Slow Down !!!");
}
if(color === "Green"){
    console.log("You Can Go Now !!!");
}
console.log ("\n\n");


// else-if statement
let marks = 72;
if (marks >= 80){
    console.log ("You Got A+ !");
    console.log (`Your Marks is : ${marks}`);
} 
else if (marks >= 60) {
    console.log ("You Got B+ !");
    console.log (`Your Marks is : ${marks}`);
}
else if (marks >= 33) {
    console.log ("You Got C+ !");
    console.log (`Your Marks is : ${marks}`);
}
else if (marks < 33) {
    console.log ("You Are Fail !!!");
    console.log (`Your Marks is : ${marks}`);
}
console.log ("\n\n");


// else statement
let score = 25;
if(score >= 33){
    console.log ("You Are Passed !!");
    console.log (`Your Score is : ${score}`);
} else {
    console.log ("You Are Failed !!!");
    console.log (`Your Score is : ${score}`);
}
console.log ("\n\n");

// Practice Question
console.log("Practice Question - Conditional Statement");
console.log("Create a system to calculate popcorn price based on the size of customers ask for.\n\n");
let size = "S";

if (size === "XL"){
    console.log ("Price is 250 Ruppes.");
    console.log (`You Selected ${size} Size Popcorn !!!`);
} 
else if (size === "L"){
    console.log ("Price is 200 Ruppes.");
    console.log (`You Selected ${size} Size Popcorn !!!`);
}
else if (size === "M"){
    console.log ("Price is 100 Ruppes.");
    console.log (`You Selected ${size} Size Popcorn !!!`);
}
else if (size === "S"){
    console.log ("Price is 50 Ruppes.");
    console.log (`You Selected ${size} Size Popcorn !!!`);
}
else {
    console.log ("Please Select Popcorn Size First");
}
console.log ("\n\n");


// Nested if-else 
let grade = 93;
if(grade >= 33){
    console.log ("Congratulations!!! You Have Cleared Exam !");
    if(grade >= 90){
        console.log ("You Got A+ Grade");
        console.log (`Your Marks is : ${grade}`);
    }
    else if(grade >= 80){
        console.log ("You Got A Grade");
        console.log (`Your Marks is : ${grade}`);
    }
    else if(grade >= 60){
        console.log ("You Got B Grade");
        console.log (`Your Marks is : ${grade}`);
    }
    else if(grade >= 33){
        console.log ("You Got C Grade");
        console.log (`Your Marks is : ${grade}`);
    }
}
else {
    console.log ("You Are Failed !!! Better Luck Next Time !");
    console.log (`Your Marks is : ${grade}`);
}
console.log ("\n\n");

