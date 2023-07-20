console.log("Object Literals In JavaScript \n\n");
console.log("Object Literals are used to keyed collactions & complex entities.");
console.log("Object are collection of properties");
console.log("\n\n");

console.log("Student Data Object:");
const student = { 
    name: "Rohit",
    age: 26,
    marks: 81.30,
    city: "Surat"
};
console.log(student);
console.log("\n");

console.log("Cars Data Object:");
const cars = {
    ford: "Mustang",
    dodge: ["Charger", "Challenger"],
    toyota: "Supra",
    BWM: "M8 Conpitition"
};
console.log(cars);
console.log("\n\n");


console.log("Object Example \n\n");
console.log("Threds/Twitter Post Object");
console.log("create a object literals for the properties of threds/twitter which includes - username, content, likes, reposts, tags \n\n");

const post = {
    username: "@rohit_senta_",
    content: "This is my #firstPost",
    likes: 1000,
    reposts: 50,
    tags: ["@anilsenta", "@memepage"]
};
console.log("Detais of post : ", post);
console.log("\n");

console.log("Get Values");
console.log("Using object['valueName']");
console.log(post["username"]);
console.log(post["likes"]);
console.log(post["tags"]);
console.log("\n");

console.log("Using object.valueName - dotMethod");
console.log(post.username);
console.log(post.tags);
console.log(post.tags[1]);
console.log(post.likes);
console.log(post.reposts);
console.log("\n\n");


console.log("For Get Values \n\n");
console.log("JavaScript automatic converts objects key to strings");
console.log("Even if we made the number as a key, number will be converted to string \n\n");

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};
console.log(obj);
console.log("\n");

console.log(obj[1]);
console.log(obj[2]);
console.log(obj[true]);
console.log(obj[null]);
console.log(obj[undefined]);
console.log("\n");

// consnloe.log(obj.1);
// consnloe.log(obj.2);
console.log(obj.true);
console.log(obj.null);
console.log(obj.undefined);
console.log("\n\n");


// Add/Upadate value

console.log("Add/Update value \n\n");
console.log("Change the city name to 'Surat'");
console.log("Add new property, gender: Famale");
console.log("Change the marks to 'A' \n\n");

const stuData = {
    name: "Shradhda",
    age: 24,
    marks: 81.40,
    city: "Ahmedabad"
};
console.log(stuData);
console.log("\n");

stuData.name = "Rohit";
stuData.city = "Surat";
stuData.gender = "Male";
stuData.age = 26;
stuData.marks = "A";
delete stuData.marks;

console.log("Student data with change");
console.log(stuData);


