// "this" Keyword In JavaScript

console.log("'this' - Keyword In JavaScript \n\n");
console.log("'this' keyword refers to an object that is executing the current piece of code.");
console.log("\n\n");

const student = {
    name: "Rohit",
    age: 26,
    math: 86,
    phy: 92,
    eng: 83,
    getAvg() {
        console.log(this);
        let Avg = (this.math + this.phy + this.eng) / 3;
        console.log(`${this.name}'s age is ${this.age} & avarage marks : ${Avg}`);
    }
}
console.log("Student Info: ");
console.log(student.getAvg());

function getAvg() {
    console.log(this);
}
console.log(getAvg());
console.log("\n\n");