console.log("While Loop In JavaScript\n\n");

console.log("Forword");
let i = 1;

while(i<=5){
    console.log(i);
    i++;
}
console.log("\n");

console.log("Backword");
let j = 5;

while(j>=1){
    console.log(j);
    j--;
}
console.log("\n\n");

console.log("Print all even numbers form 0 to 20 : \n\n");
let n = 0;

while(n<=20){
    console.log(n);
    n+=2;
}
console.log("\n\n");


console.log("Favorate Movie Example \n\n");
let favMovie = "IronMan";

let guess = prompt("Guess my favorate movie !");

while(guess != favMovie){
    guess = prompt("Wrong Guess!!! Please Try Again !");
    if(guess == "quit"){
        console.log("You quit the game !");
        break;
    }
}

if(guess == favMovie){
    console.log(`Congrats! you guessed right movie! ${guess}!!!`);
}
console.log("\n\n");


console.log("Break Keyword In Loops\n\n");
let num = 1; 

while(num <= 5){
    if(num == 4){
        break;
    }
    console.log(num);
    num++;
}
console.log("We used break at 3");