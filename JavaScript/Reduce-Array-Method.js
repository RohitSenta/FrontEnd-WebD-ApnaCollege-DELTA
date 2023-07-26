// Reduce - Arry Method

console.log("Reduce - Array Method");
console.log("It Reduces the array to a single value \n\n");

let nums = [1, 2, 3, 4, 9, 5, 8, 6];
console.log("Numbers Array");
console.log(nums);

let finalValue = nums.reduce((result , el) => {
    return result + el;
});
console.log("Array Result After Reduced");
console.log(finalValue);
console.log("\n\n");


// Finding Maximum Number In An Array
console.log("Finding Maximum Number In An Array Using Reduce Method \n\n");

let numsArr = [2, 9, 4, 5, 3, 4, 7, 8, 1, 3];
console.log("Numbers Array");
console.log(numsArr);

// let max = -1;

// for(let i=0; i<numsArr.length; i++){
//     if(max < numsArr[i]){
//         max = numsArr[i];
//     }
// }
// console.log(max);


let ans = numsArr.reduce((max, el) => {
    if (max < el){
        return el;
    }
    else {
        return max;
    }
});
console.log("Max Number In An Array is :", ans);
console.log("\n\n");
