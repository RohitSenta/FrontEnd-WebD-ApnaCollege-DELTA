// "this" Keyword With Arrow Functions

console.log("'this' Keyword With Arrow Functions \n\n");
console.log("\n");

console.log("Normal Function - 'this'");
console.log("Scope of normal function is depends on calling function / calling object ");
console.log("\n");

console.log("Arrow Function - 'this'");
console.log("Scope of Arrow Function is Laxical Scope and it is depends on Parent Function Scope");
console.log("\n");


const student = {
    name: "Rohit",
    marks: 88,
    prop: this, // Global Scope
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);  // Perent Scope -> Window Object - Global Scope
        return this.marks;
    },
    getInfo1: function() {
        setTimeout( () => {
            console.log(this);  // student object
        }, 2000);
    }, 
    getInfo2: function() {
        setTimeout( function() {
            console.log(this);  // window object
        }, 2000);
    }
};

console.log(student);
console.log("\n");

console.log(student.getName());
console.log("\n");

console.log(student.getMarks());
console.log("\n");

console.log(student.getInfo1());
console.log("\n");

console.log(student.getInfo2());
console.log("\n");