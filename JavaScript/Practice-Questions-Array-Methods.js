// Pacrtice Questions 
console.log("Practice Questions - Array Methods \n\n");

// Question 1
console.log("Q-1 : Check if all numbers in our array are multiple of 10 or not. \n\n");

let arr1 = [10, 15, 20, 25, 30, 35, 40];
console.log("Rendom Numbers Array");
console.log(arr1);
let allNum = arr1.every((el) => {
    if(el % 10 == 0){
        return true;
    }
    else {
        return false;
    }
});
if(allNum == true){
    console.log(allNum);
    console.log("Yes, All Numbers Are Multiple Of 10");
} else {
    console.log(allNum);
    console.log("No, All Numbers Are Not Multiple Of 10");
}
console.log("\n\n");


// Question 2
console.log("Q-2 : Create a function to find the min number in an array ");

let minArr = [5, 6, 8, 4, 3, 9, 2, 7];
console.log("Random Number Array");
console.log(minArr);

function getMin(minArr){
    let ans1 = minArr.reduce((min, el) => {
        if(min > el){
            return el;
        } 
        else {
            return min;
        }
    });
    return ans1
}
let ansMin = getMin(minArr);
console.log("Minimum number in an array is :", ansMin);
console.log("\n\n");