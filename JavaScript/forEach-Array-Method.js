// Array Methods - Higher Order Functions

console.log("Array Methos - Higher Order Functions \n\n");

console.log("1) forEach Method");
console.log("map");
console.log("filter");
console.log("some");
console.log("every");
console.log("reduce");

let arr = [1, 2, 3, 4, 5];
console.log("Each Elements");
let print = function(el) {
    console.log(el);
}
arr.forEach(print);
console.log("\n\n");


console.log("Each Marks");
let marks = [80, 90, 83, 92, 95, 98];
marks.forEach( function(el){
    console.log(el);
});
console.log("\n\n");


let names = ["Rohit", "Jay", "Anil", "yash", "sumit"];
console.log("Each Names");
names.forEach((el) => {
    console.log(el);
});
console.log("\n\n");


console.log("forEach Function with Objects");
let arrObj = [ 
    {
        name: "Rohit", 
        marks: 95
    }, 
    {
        name: "Jay",
        marks: 93
    }, 
    {
        name: "Anil",
        marks: 90
    }, 
    {
        name: "Yash",
        marks: 92
    } 
];

arrObj.forEach((student) => {
    console.log(student);
});
arrObj.forEach((student) => {
    console.log(student.name);
});
arrObj.forEach((student) => {
    console.log(student.marks);
});
console.log("\n\n");
