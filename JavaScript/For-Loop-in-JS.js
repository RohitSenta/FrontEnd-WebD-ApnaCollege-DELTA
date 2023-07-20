// loops in javascript

console.log("Loops in JavaScript\n\n");
console.log("Used to iterate a piece of code");
console.log("\n\n");

console.log("For-Loop\n\n");
console.log("Example - Forword Run : ");
for(let i=1; i<=5; i++){
    console.log(i);
}
console.log("\n");

console.log("Example - Forword Run : ");
for(let i=5; i>=1; i--){
    console.log(i);
}
console.log("\n\n");

console.log("Exp : Print All Odd Numbers Form 1 To 15. \n\n");
// for(let i=1; i<=15; i++){
//     if(i%2 != 0){
//         console.log(i);
//     }
// }
console.log("Forwords");
for(let i=1; i<=15; i=i+2){
    console.log(i);
}
console.log("Backwords");
for(let i=15; i>=1; i=i-2){
    console.log(i);
}
console.log("\n\n");

console.log("Exp : Print All Even Numbers Form 2 To 10. \n\n");
// for(let i=2; i<=10; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }
console.log("Forwords");
for(let i=2; i<=10; i=i+2){
    console.log(i);
}
console.log("Backwords");
for(let i=10; i>=2; i=i-2){
    console.log(i);
}
console.log("\n\n");

console.log("Infinite Loop \n\n");
// for (let i=1; i>=0; i++){
//     console.log(i);
// }
// for(let i=1; i<=5; i--){
//     console.log(i);
// }
// for(let i=0;  ; i++){
//     console.log(i);
// }
console.log("\n\n");


console.log("Print the multipliccation table of number n \n\n");
// for(let i=1; i<=10; i++){
//     console.log(5 * i);
// }
let n = prompt("Enter your number :");
n = parseInt(n);
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}
console.log("\n\n");

// Nested for loop
console.log("Nested for loop");
console.log("Nested for loop is for loop inside for loop \n\n");
for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}
console.log("\n\n");