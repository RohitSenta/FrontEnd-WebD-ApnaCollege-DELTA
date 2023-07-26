// Map And Filter - Array Function

// Map - Array Function
console.log("Map And Filter - Array Function \n\n");

console.log("Map - Array Function \n\n");
console.log("Noraml Array");
let num = [1, 2, 3, 4];
console.log(num);

let double = num.map((el) => {
    return el * 2;
});
console.log("Double Array");
console.log(double);

let square = num.map((el) => {
    return el * el;
});
console.log("Square Array");
console.log(square);
console.log("\n\n");

console.log("Student Details Array");
let students = [
    {
        name: "Rohit",
        marks: 91
    },
    {
        name: "Prashant",
        marks: 86
    },
    {
        name: "Himanshu",
        marks: 88
    },
    {
        name: "Nirav",
        marks: 95
    }
];

let gpa = students.map((el) => {
    return el.marks / 10;
});
console.log("Name And Marks Array");
console.log(students);
console.log("GPA Array");
console.log(gpa);
console.log("\n\n");

// Filter - Array Function
console.log("Filter - Array Function \n\n");

let nums = [2, 4, 5, 6, 2, 7, 8, 9, 15, 12, 17, 16, 22, 25, 20];
console.log("Numbers Array");
console.log(nums);

let evenNum = nums.filter( (el) => {
    return el % 2 == 0;
});
console.log("Even Numbers Array");
console.log(evenNum);

let oddNum = nums.filter( (el) => {
    return el % 2 != 0;
});
console.log("Odd Numbers Array");
console.log(oddNum);