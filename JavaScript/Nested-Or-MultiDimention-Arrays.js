// Nested or Mutli-Dimentional Array

console.log("Nested or Multi-Dimentional Array \n\n");
console.log("Nested Array is a Array of Arrays \n\n");

let num = [ [2, 4], [3, 6], [4, 8] ];
console.log(num);
console.log(num.length);
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log("\n");

console.log(num[0][0]);
console.log(num[0][1]);
console.log(num[1][0]);
console.log(num[1][1]);
console.log(num[2][1]);
console.log(num[2][1]);
console.log("\n\n");

// practice question
console.log("Practice Question \n\n");
console.log("Create a nested array of tic-tac-toe game state. \n\n");

let tictactoe = [ ['X', ' ', 'O'], [' ', 'X', ' '], ['O', ' ', "x"] ];
console.log(tictactoe);
tictactoe[0][1] = 'O';
console.log(tictactoe);
console.log("\n\n");