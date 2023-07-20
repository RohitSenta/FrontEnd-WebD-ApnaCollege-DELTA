// trim Method
console.log("String trim() Method");
let msg = "    Hello    ";

let password = prompt("Set Your Password");
let newPassowrd = password.trim();
console.log(password);
console.log(newPassowrd);
console.log("\n\n");


// toUpperCase And toLowerCase Method
console.log("toUpperCase & toLowerCase Method\n\n");
let str = "Hello World I am Learning JavaScript";
console.log(str, "\n\n");

let upper = str.toUpperCase();
console.log(upper);

let lower = str.toLowerCase();
console.log(lower);
console.log("\n\n");


console.log("String Method With Arguments\n\n");


// indexOf method
console.log("IndexOf Method\n");
console.log("Return the first index of occurrence of some value in string. Or gives -1 if not found\n\n");
let str2 = "ILoveCoding";
console.log(str2);
console.log(str2.indexOf("Love"));
console.log(str2.indexOf("j"));
console.log(str2.indexOf("o"));
console.log("\n\n");


// method chainind
console.log("Method Chaining\n\n");
console.log("Using one method after another. Order of execution will be left to right.\n\n");

let msg1 = "    Hello   ";
console.log(msg1);

let newMsg = msg1.trim();
console.log("After trim :", newMsg);
newMsg = newMsg.toUpperCase();
console.log("After UpperCase :", newMsg);
console.log("\n");

console.log("We can also done this Using Method Chaining\n\n");
console.log(msg);
let newMsg2 = msg.trim().toUpperCase();
console.log("After trim and UpperCase :", newMsg2);
console.log("\n\n");


// slice method
console.log("Slice Method \n\n");
console.log("Returns a part of the original string as a new string\n\n");
let str3 = "HelloJavaScript!";
console.log(str3);
console.log(str3.slice(5));
console.log(str3.slice(5, 9));
console.log(str3.slice(0, 9));
console.log(str3.slice(-7));
console.log("\n\n");


// replace method
console.log("Replace Method\n\n");
console.log("Searches a value in the strind & returns a new string with the value replaced.\n\n");
let str4 = "HelloJavaScript!";
console.log(str4);
console.log(str4.replace("Hello", "Love"));
console.log(str4.replace('o', 'x'));
console.log(str4.replace('S', 'X'));
console.log("\n\n");


// repeat method
console.log("Repeat Method\n\n");
console.log("Returns a string with number of copies of a string.\n\n");
let str5 = "HelloWorld!";
console.log(str5);
console.log(str5.repeat(2));
console.log(str5.repeat(3));
console.log("\n\n");


// practice questions - string methods
console.log("Practice Question\n\n");
// question-1
console.log("Q-1 : trim and uppercase\n\n");
let ptc1 = "help!";
console.log(ptc1);
console.log("trimed and uppercased :", ptc1.trim().toUpperCase());
console.log("\n\n");

// question-2
console.log("Q-2 : For the given string, priduct the output for following:");
let name = "ApnaCollage";
console.log(name);
console.log(name.slice(4, 9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));
console.log("\n\n");

// question-3
console.log("Q-3 : Saparate the 'Collage' part in above string & replace 'l' with 't' in it :");
console.log(name);
let newName = name.slice(4).replace('l', 't');
console.log("Sliced and Replaced String :", newName.replace('l', 't'));