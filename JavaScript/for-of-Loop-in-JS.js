console.log("For-Of Loop In JavaScript\n\n");
console.log("Foe-Of Loop is used for access of collaction of item or to accesss individual array item \n\n");

console.log("For Access Array Items \n\n");
let cars = [ "Mustang", "BMW", "Supra", "Charger", "Challanger", "Safari" ];

for(favCars of cars){
    console.log(favCars);
}
console.log("\n\n");

console.log("For String Item Access\n\n");
let str = "apnacollage";

for(char of str){
    console.log(char);
}
console.log("\n\n");


console.log("Nested For-Of Loop \n\n");
console.log("Nested For-Of Loop are used for access nested array items\n\n");

let heroes = [ ["ironman", "captain america", "thor", "hulk"], ["batman", "superman", "aquaman", "flash"] ];

for(list of heroes){
    console.log(list);
    for(hero of list){
        console.log(hero);
    }
}
