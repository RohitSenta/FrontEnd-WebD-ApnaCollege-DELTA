// Asynchronous Nature In JavaScript

console.log("Asynchronous Nature In JavaScriot \n\n");
console.log("Call Stack In JavaScript \n\n");
console.log("\n");

function hello() {
    console.log("Inside hello function");
    console.log("Hello World !!!");
}

function demo() {
    console.log("Calling hello function");
    hello();
}

console.log("Calling demo function");
demo();
console.log("Done, bye!");
console.log("\n\n\n");


// Visulizing the Call Stack
console.log("Visulizing The Call Stack \n\n"); 

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log("Ans :", ans);
}

three();

console.log("\n\n");


// Single Threaded JavaScript
console.log("Single Threaded JavaScript \n\n");

setTimeout(() => {
    console.log("Hello JavaScript!");
}, 2000);
setTimeout(() => {
    console.log("Apna College!");
}, 2000);

console.log("Hello World!");