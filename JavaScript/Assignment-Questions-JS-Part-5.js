console.log("Assignent Questions JavaScript Part-5 \n\n");
console.log("\n");

// Question 1
console.log("Q-1: Create a program that generates a random number representing a dice roll. [The number should be between 1 to 6] \n\n");

let dice = Math.floor( Math.random() * 6 ) + 1;
console.log("Random Number From 1 to 6 is :", dice); 
console.log("\n\n");

// Question 2
console.log("Q-2: Create an object reprasanting a car that stores the following properties for the car : name, modal, color \n\n");

const Cars = {
    Name: "Ford",
    Modal: "Mustang",
    Color: "Dark Red"
};
console.log(Cars);
// console.log(Cars["Name"]);
// console.log(Cars["Modal"]);
// console.log(Cars["Color"]);
console.log(Cars.Name);
console.log(Cars.Modal);
console.log(Cars.Color);
console.log("\n\n");

// Question 3
console.log("Q-3: Create an object Parson with their name, age and city. Edit their city's original value to change it to 'New York', And Add a new property country and set it to the United States. \n\n");

const Person = {
    Name: "Tony Stark",
    Age: 52,
    City: "Delhi",
};
console.log(Person);
Person.City = "New York";
Person.Country = "United States";

console.log(Person);
console.log("Person's Name :",Person.Name);
console.log("Person's Age :", Person.Age);
console.log("Person's City :", Person.City);
console.log("Person's Country :", Person.Country);