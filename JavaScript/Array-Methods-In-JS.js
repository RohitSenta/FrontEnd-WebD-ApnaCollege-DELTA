console.log("Methods In JavaScript!!!\n\n");
// push method
console.log("Push Method");
console.log("It is add element at the End of an Array\n\n");

let cars = ["BMW", "Dogde", "Ford", "Toyota"];
console.log(cars);
cars.push("Volvo");
console.log(cars);
cars.push("Audi");
console.log(cars);
console.log("\n");

// pop method
console.log("Pop Method");
console.log("It Delete element of array from End & returns it\n\n");
cars.pop();
console.log(cars);
cars.pop();
console.log(cars);
console.log("\n");

// unshift method
console.log("Unshift Method");
console.log("It is add element at the Start of an Array\n\n");
cars.unshift("Mahindra");
console.log(cars);
cars.unshift("Tata");
console.log(cars);
cars.unshift("Cadilac");
console.log(cars);
cars.unshift("Honda");
console.log(cars);
console.log("\n");

// shift method
console.log("Shift Method");
console.log("It Delete element of array from Start & returns it\n\n");
cars.shift();
console.log(cars);
cars.shift();
console.log(cars);
console.log("\n\n");

// practice question
console.log("Practice Question\n\n");
console.log("For the given start of an array, change it to final using array methods ! \n\n");
let months = ['january', 'july', 'march', 'august'];
console.log(months);
months.shift();
console.log(months);
months.shift();
console.log(months);
console.log("\n");

months.unshift("june");
console.log(months);
months.unshift("july");
console.log(months);
console.log("\n\n");


// indexOf method
console.log("indexOf Method\n\n");
console.log("it returns index of something.\n\n");
let primary = ["red", "green", "blue"];
console.log(primary.indexOf("red"));
console.log(primary.indexOf("blue"));
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("Green"));
console.log(primary.indexOf("green"));
console.log("\n\n");

// includes method
console.log("includes Method\n\n");
console.log("it search for a value.\n\n");
let phone = ["Apple", "Samsung", "Sony"];
console.log(phone);
console.log(phone.includes("Apple"));
console.log(phone.includes("Sony"));
console.log(phone.includes("Nokia"));
console.log(phone.includes("samsung"));
console.log(phone.includes("Samsung"));
console.log("\n\n");


// concatination method
console.log("Concatination Method\n\n");
console.log("Concatination Method Marge Two Arrays. \n\n");

let conArr1 = ["Red", "Green", "Blue"];
let conArr2 = ["Yellow", "Blue", "Purple"];
console.log(conArr1);
console.log(conArr2);
let conBoth = conArr1.concat(conArr2);
console.log(conBoth);
console.log("\n\n");

// reverse method
console.log("Reverse Method\n\n");
console.log("Reverse Method Reverse An Arrays.\n\n");
console.log(conArr1.reverse());
console.log(conArr2.reverse());
console.log("\n\n");

// slice method
console.log("Slice Method\n\n");
console.log("Slice method copies a portion of an array\n\n");
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors);
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2, 3));
console.log(colors.slice(2, 4));
console.log(colors.slice(-2));
console.log("\n\n");

// splice method
console.log("Splice Method\n\n");
console.log("Splice method removes | replace | add elements in place. \n\n");
// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors);
console.log(colors.splice(4));
console.log(colors.splice(0, 1));
console.log(colors);
console.log(colors.splice(1, 1, "black", "grey"));
console.log(colors);
console.log("\n\n");

// sort method 
console.log("Sort Method\n\n");
console.log("Sort method is sort an array in assending or decending order.\n\n");
let days = ["monday", "saturday", "tuesday", "thursday", "friday", "wednesday", "sunday"];
console.log(days);
days.sort();
console.log(days);
let chars = ['a', 'b', 'c', 'd'];
console.log(chars);
console.log(chars.sort());
let numbers = [25, 16, 4, 49, 36, 9];
console.log(numbers);
console.log(numbers.sort());
console.log("Sort method is not work on numbers elements in array it is only work in strings or charecter elements");
console.log("\n\n");


// practice question
console.log("Peactice Question\n\n");
console.log("Q-1: For given start state of an array, change it to final form using spilce method.\n\n");
let start = ["january", "july", "march", "august"];
console.log(start);
start.splice(0, 2, "july", "june");
console.log(start);
console.log("\n\n");

console.log("Q-2: return the index of 'javascript' form given array, if it was reversed. \n\n");
let lenguages = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(lenguages);
console.log(lenguages.indexOf('javascript'));
lenguages.reverse();
console.log(lenguages.indexOf('javascript'));
