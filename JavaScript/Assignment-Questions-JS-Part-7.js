// Assignment Questions JS Part-7

console.log("Assignment Questions JS Part-7 \n\n");
console.log("\n");

// Question 1
console.log("Q-1 : Write a arrow function named arrayAvarage that accepts an array of numbers and returns the avarage of those numbers \n\n");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayAvarage = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}

let avarage = arrayAvarage(arr);
console.log("Avarage of an array elements :", avarage);
console.log("\n\n");


// Question 2
console.log("Q-2 : Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not \n\n");

let n = 6;
let isEven = (n) => {
    if(n%2 == 0){
        console.log("Given Number is Even");
    } else {
        console.log("Given Number is Not Even");
    }
}
isEven(n);
console.log("\n\n");


// Question 3
console.log("Q-3 : What is the output of the following code : \n\n");

const object = {
    massege: 'Hello World!',

    logMassege() {
        console.log(this.massege);
    }
};
setTimeout(object.logMassege, 1000);
console.log("\n");


// Question 4
console.log("Q-4 : What is the output of following code : \n\n");

let length = 4;
function callback() {
    console.log(this.length); 
}

const object2 = {
    length: 5,

    method(callback){
        callback();
    },
};
object2.method(callback, 1, 2);
console.log("\n\n");