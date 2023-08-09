// JSON In JavaScript

let jsonResp = '{"fact":"Cats spend nearly 1\/3 of their waking hours cleaning themselves.","length":64}';
console.log(jsonResp);

let validResp = JSON.parse(jsonResp); 
console.log(validResp);

let student = {
    fname: "Rohit",
    lname: "Senta",
    age: 26,
    city: "Surat",
}
let stuData = JSON.stringify(student);
console.log(stuData);