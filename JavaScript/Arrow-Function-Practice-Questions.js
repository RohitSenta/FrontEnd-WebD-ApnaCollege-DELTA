// Arrow Function Practice Questions

console.log("Arrow Function Practice Questions \n\n");

//Question 1
console.log("Q-1 : Write an arrow function that returns the square of number 'n'.");

// let square = (n) => {
//     return n * n;
// }

let square = n => n * n;

let ans = square(5);
console.log("Square of number n :", ans);
console.log("\n\n");


// Question 2
console.log("Q-2 : Write a function that prints 'Hello World' 5 times at intervals of 2s each.");
let id = setInterval(() => {
    console.log("Hello World !");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
}, 10000); 
