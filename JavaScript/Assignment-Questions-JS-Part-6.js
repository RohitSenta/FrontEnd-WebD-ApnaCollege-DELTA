// Assignment Questions JS Part-6

console.log("Assignment Question JS Part-6 \n\n");
console.log("\n");


// Question 1
console.log("Q-1 : Write a JavaScript Function that returns array elements larger than number. \n\n");

let arr = [2, 4, 1, 5, 9, 6, 3, 7, 0, 8];
let num = 5;
function largeNum(arr, num){
    console.log(`Larger number than ${num} in an array`);
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}
largeNum(arr, num);
console.log("\n\n");


// Question 2
console.log("Q-2: Write a JavaScript function to extract unique characters form a string");

let str = "abcdabcdefgggh";
console.log("Normal string :", str);
let ans = "";
function uniqueChar(str) {
    for(let i=0; i<str.length; i++){
        // let currChar = str[i];
        if(ans.indexOf(str[i]) == -1){
            ans += str[i];
        }
    }
    return ans;
}
uniqueChar(str);
console.log("Unique characters :", ans);
console.log("\n\n");


// Question 3
console.log("Q-3 : Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output \n\n");

let country = ["Australia", "Germany", "India", "United States Of America"];
let longest = "";

function longCon(contArr){
    for(let i=0; i<contArr.length; i++){
        if(longest.length < contArr[i].length){
            longest = contArr[i];
        }
    }
    return longest;
}
longCon(country);
console.log(longest);