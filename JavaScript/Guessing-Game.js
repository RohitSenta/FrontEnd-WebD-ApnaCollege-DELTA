// Guessing Game

console.log("Guessing Game \n\n");
console.log("User enters a max number & than tries to guess a rendom generated number between 1 to max.");
console.log("\n\n");
const maxNum = prompt("Enter the max number");
console.log("Maximum Number :", maxNum);
console.log("\n");

console.log("Generating random number from 1 to manNum ");
const random = Math.floor( Math.random() * maxNum ) + 1;
// console.log("Generated Random Number :", random);

console.log("Now, User have to guess a random number \n\n");
let guess = prompt("Guess the random number");

while(true){
    if(guess == "quit"){
        console.log("User Quit The Game!!! \n\n");
        break;
    }

    if(guess == random){
        console.log("Congratulations!!! You Guessed Right Number !!! And Number is :", guess);
        break;
    } 
    else if (guess < random) {
        guess = prompt("Hint: Your guess is small !!! Please try again !!!");
    } 
    else {
        guess = prompt("Hint: Your guess is large !!! Please try again !!!");
    }

    
    // else {
    //     guess = prompt("Your guess was wrong!!! please try again !!!");
    // }
}