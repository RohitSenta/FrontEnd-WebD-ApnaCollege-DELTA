// Destructuring Array

console.log("Destructuring Array \n\n");

let names = ["Tony", "Bruce", "Steve", "Peter", "scoot", "sam", "Rochet", "Bucky", "Barton"];
console.log(names);

let [winner, runnerUp, secondRunnerUp, ...others] = names;
console.log("Winner :", winner);
console.log("RunnerUp :", runnerUp);
console.log("SecondRunnerUp :", secondRunnerUp);
console.log("Others ", others);
console.log("\n\n");


// Destructuring For Objects
console.log("Destructuring Of Objects \n\n");

let student = {
    name: "Peter",
    class: 10,
    age: 15,
    subjects: ["Gujarati", "Hindi", "Math", "Science", "Social Science", "English"],
    username: "Peter@123",
    password: 12345,
}
console.log("Studnet Info :");
console.log(student);

let { username:user, password:secret, city:place = "Surat" } = student;
console.log("Username :", user);
console.log("Password :", secret);
console.log("City :", place)