// Math Object In JavaScriot

console.log("Math Object In JavaScript \n\n");
console.log("Math Object is a collaction of mathamatical properties and methods \n\n");

// Math.PI Property
console.log("Math.PI Property");
console.log("Value Of PI :", Math.PI);
console.log("\n");

// Math.E Property
console.log("Math.E Priperty");
console.log("Value of E Constant :", Math.E);
console.log("\n");

// Math.abs(n) - Absolute Method
console.log("Math.abs(n) - Absolute Method");
console.log("Absolute value of 12 :", Math.abs(12));
console.log("Absolute value of -12 :", Math.abs(-12));
console.log("\n");

// Math.pow(a, b) Poer Method
console.log("Math.pow(a, b) - Power Method");
console.log("Value of 5 of power 2 :", Math.pow(5, 2));
console.log("\n");

// Math.floor(n) - RoundOff Nearest Smallest Number
console.log("Math.floor(n) - RoundOff Smallest Number Method");
console.log("Math.floor Method RounfOff to Nearest Smallest Integer Number");
console.log("Roundoff 5 :", Math.floor(5));
console.log("Roundoff 5.5 :", Math.floor(5.5));
console.log("Roundoff 5.99999 :", Math.floor(5.99999));
console.log("Roundoff 6.111 :", Math.floor(6.111));
console.log("Roundoff 6.5 :", Math.floor(6.5));
console.log("Roundoff -5 :", Math.floor(-5));
console.log("Roundoff -5.5 :", Math.floor(-5.5));
console.log("Roundoff -5.99999 :", Math.floor(-5.99999));
console.log("Roundoff -6.111 :", Math.floor(-6.111));
console.log("Roundoff -6.5 :", Math.floor(-6.5));
console.log("\n\n");

// Math.ceil(n) - RoundOff Nearest Largest Number
console.log("Math.ceil(n) - RoundOff Number Method");
console.log("Math.ceil Method RounfOff to Nearest, largest Integer Number");
console.log("Roundoff 5 :", Math.ceil(5));
console.log("Roundoff 5.5 :", Math.ceil(5.5));
console.log("Roundoff 5.99999 :", Math.ceil(5.99999));
console.log("Roundoff 6.111 :", Math.ceil(6.111));
console.log("Roundoff 6.5 :", Math.ceil(6.5));
console.log("Roundoff -5 :", Math.ceil(-5));
console.log("Roundoff -5.5 :", Math.ceil(-5.5));
console.log("Roundoff -5.99999 :", Math.ceil(-5.99999));
console.log("Roundoff -6.111 :", Math.ceil(-6.111));
console.log("Roundoff -6.5 :", Math.ceil(-6.5));
console.log("\n\n");

// Meth.random() - 0 to 1 Random Number
console.log("Math.rendom() - Give Rendom Number From 0 to 1");
console.log("Rendom Number Between 0 to 1(1 is exclusive) :", Math.random());
console.log("Rendom Number Between 0 to 1(1 is exclusive) :", Math.random());
console.log("\n\n");


// Randon Integers From 0 to 1
console.log("Rendon Integers - From 0 to 1 \n\n");

let step1 = Math.random();
console.log("Random Number From 0 to 1 :", step1);

let step2 = step1 * 10;
console.log("Multiplied by 10 for 1 to 10 Range : ", step2);

let step3 = Math.floor(step2);
console.log("Used Math.floor Method to Remove Decimals :", step3);

let step4 = step3 + 1;
console.log("Added 1 to Generate Number From 1 to 10 to Skip 0 :", step4);
console.log("Final Genated Rendom Number From 1 to 10 :", step4);
console.log("\n");

console.log("We Can Generate Random Number Using Single Line");
let ranNum = Math.floor( Math.random() * 10) + 1;
console.log("Final Generated Random Number Using Single Line Method :", ranNum);
console.log("\n\n");


// Practice Question
console.log("Q-1: Generate a random number between 1 to 100 \n\n");
let Num100 = Math.floor( Math.random() * 100 ) + 1;
console.log("Random Number Between 1 to 100 :", Num100);
console.log("\n\n");

console.log("Q-2: Generate a random number between 1 to 5 \n\n");
let Num5 = Math.floor( Math.random() * 5 ) + 1;
console.log("Random Number Between 1 to 5 :", Num5);
console.log("\n\n");

console.log("Q-3: Generate a random number between 20 to 50 \n\n");
let Num2050 = Math.floor( Math.random() * 30 ) + 20;
console.log("Random Number Between 20 to 50 :", Num2050);

