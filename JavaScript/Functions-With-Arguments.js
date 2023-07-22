// function with arguments
console.log("Functions With Arguments");
console.log("\n\n");

// print name function
console.log("Print Name - Function");
function printName(name){
    console.log("Name :", name);
}

printName("Rohit Senta");
printName("Apna College");
printName("Bhavnagar");
console.log("\n\n");

// print info function
console.log("Print Info - Function");
function printInfo(name, age, city){
    console.log(`${name}'s age is ${age}, and city is ${city}.`);
}

printInfo("Rohit", 26, "Bhavnagar");
printInfo("Yash", 25, "Surat"); 
printInfo("Vishwa", 24, "Ahmedabad"); 
printInfo("Anil", 23); 
console.log("\n\n");

// sum function
console.log("sum function for sum of 2 numbers");
function sum(num1, num2){
    console.log(`sum of ${num1} And ${num2} is : ${num1 + num2}`);
}

sum(5, 10);
sum(40, -10);
sum(4000, 1222);

