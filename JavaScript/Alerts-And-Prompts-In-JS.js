
console.log("Alerts And Prompts");
console.log("Alerts");
alert("This is an alert !!!");
alert("Something is Wrong !!!");
alert("Danger !!!!!!");
console.log("\n");

console.log("Error !");
console.error("This is an Error Message !!!");
console.error("Something is Wrong !!!");
console.log("\n");

console.log("Warning !");
console.warn("This is a warning Message !");
console.warn("Something is Wrong, do needful !");
console.log("\n");

console.log("Prompts");
prompt("Enter Something !");
let myName = prompt("Enter Your Name : ");
console.log(myName);

let fName = prompt("Enter Your Name");
let lName = prompt("Enter Your Surname");
console.log(`Your Name is ${fName + " " + lName} !`);
let msg = `Your Name is ${fName + " " + lName} !`;
alert(msg);