// Rest In JavaScript

console.log("Rest In JavaScript \n\n");
console.log("Allows a function to take an indefinate numbers of arguments and bundle them in an array \n\n");

// let arr = [1, 2, 3, 4, 5];

function sum(...args) { // arguments
    for(let i=0; i<args.length; i++){
        console.log("You Gave Us: ", args[i]);
    }
}
sum(1, 2, 3, 4, 5);
console.log("\n\n");


// arguments collections
console.log("Arguments Collection :");
function min(){
    console.log(arguments);
    console.log(arguments.length);
}
console.log(min(1, 2, 3, 4));
console.log("\n\n");


// arguments sum
console.log("Argument Sum");
function sum(...args){
    return args.reduce((sum, el) => (sum + el));
}
console.log("Sum of arguments :", sum(1, 2, 3, 4));
console.log("\n\n");


console.log("Fund Min Function");
function min(msg ,...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if(min > el){
            return el;
        } else {
            return min;
        }
    })
}
console.log("Minimum :", min("Hello World", 1, 2, 3, 4));
console.log("\n\n");