// higher Order Function

console.log("Higher Order Functions \n\n");
console.log("A Function that does one or both");
console.log("1. takes one of multiple functions as arguments");
console.log("2. returns a function");
console.log("\n\n");

// Higher Order Function with takes one or multiple function as arguments
console.log("1. Takes one or multiple functions as arguments");

function multipleGreet(func, n){    // Higher Order Function
    for(let i=1; i<=n; i++){
        func();
    }
}
let greet = function(){
    console.log("Hello!");
}

function Greet() {
    console.log("Namaste!");
}

multipleGreet(greet, 10);
multipleGreet(Greet, 10);
console.log("\n\n");


// Higher Orger Function with return function
console.log("2. Returns a Function");

function oddEvenFectory(request) {
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }
    else {
        console.log("Wrong Request");
    }
}

let request = "odd";
console.log("Request is :", request);
let func = oddEvenFectory(request);
console.log(func(3));
console.log(func(10));

request = "even";
func = oddEvenFectory(request);
console.log("Request is :", request);
console.log(func(5));
console.log(func(8));