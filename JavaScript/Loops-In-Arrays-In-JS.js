console.log("Loops In Arrays In Javascript");
console.log("Loops in arrays are used to traverse an array and access array elements\n\n");

let friuts = ["Apple", "Mango", "Banana", "Orange", "Litchi"];
friuts.push("Pineapple");

console.log("forword");
for(let i=0; i<friuts.length; i++){
    console.log(i, friuts[i]);
}
console.log("\n");

console.log("backword");
for(let i=friuts.length-1; i>=0; i--){
    console.log(i, friuts[i]);
}
console.log("\n\n");

console.log("Nested Loopd For Nested Arrays\n\n");

let Heroes = [ ["Ironman", "Captian America", "Thor", "Hulk"], ["Superman", "Batman", "Aquaman", "Wonder Woman"] ];

for(let i=0; i<Heroes.length; i++){
    console.log(i, Heroes[i]);
    for(let j=0; j<Heroes[i].length; j++){
        console.log(`j=${j}, ${Heroes[i][j]}`);
    }
}
console.log("\n\n");

console.log("Student Marks Info\n\n");
let Student = [ ["Rohit", 95], ["Anil", 80], ["Parth", 90], ["Nikhil", 85] ];

for(let i=0; i<Student.length; i++){
    console.log(`Info of Student No #${i}`);
    for(let j=0; j<Student[i].length; j++){
        console.log(Student[i][j]);
    }
}
