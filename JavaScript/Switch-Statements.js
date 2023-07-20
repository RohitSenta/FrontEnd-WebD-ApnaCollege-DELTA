
// switch statement
console.log("Switch Statement");
let trafficLight = "red";

switch (trafficLight) {
    case "red" : 
        console.log("You Have To Stop !");
        break;
    case "yellow" : 
        console.log("Slow Down Your Speed !");
        break;
    case "green" :
        console.log("You Can Go Now !");
        break;
    default : 
        console.log("Light is Off");
}
console.log("\n\n");


console.log("Practice Question");
console.log("Use switch statement to print the day of week using a number variable 'day' with value 1 to 7.");
console.log("1 = Monday, 2 = Tuesday & So On..");

let day = 4;

switch(day){
    case 1 : 
        console.log("Monday!");
        break;
    case 2 : 
        console.log("Tuesday!");
        break;
    case 3 : 
        console.log("Wednesday!");
        break;
    case 4 : 
        console.log("Thursday!");
        break;
    case 5 : 
        console.log("Friday!");
        break;
    case 6 : 
        console.log("Saturday!");
        break;
    case 7 : 
        console.log("Sunday!");
        break;
    default : 
        console.log("Holiday, Fun Day !!!");
}
console.log("\n\n");

