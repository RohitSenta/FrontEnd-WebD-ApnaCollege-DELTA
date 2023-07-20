// Array Reference
// Array Reference Means Address in Memory

console.log("Array Reference \n\n");
console.log("Array Reference Means Address in Memory \n\n");
console.log(['a'] == ['a']);
console.log(['a'] === ['a']);

let arr = ['a', 'b'];
console.log(arr);
let arrCopy = arr;
console.log(arrCopy);
arrCopy.push('c');
console.log(arrCopy);
console.log(arr);
console.log(arr == arrCopy);
console.log(arr === arrCopy);
arr.push('d');
console.log(arr);
console.log(arrCopy);
arrCopy.pop();
console.log(arr);
console.log(arrCopy);

let newArr = ['a', 'b', 'c'];
console.log(newArr == arr);
console.log(newArr === arr);
arr.push("d");
console.log(arr);
console.log(newArr);
console.log("\n\n");


console.log("Constant Array\n\n");
console.log("For covert array in Constant you Const keyword\n\n");
const pi = 3.14;
console.log(pi);
// pi = 3.15;
// console.log(pi);

const constArr = [1, 2, 3, 4];
console.log(constArr);
constArr.push(5);
console.log(constArr);
constArr.pop();
console.log(constArr);
constArr = [5, 6, 7, 8];
console.log(constArr);

