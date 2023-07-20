// Object of Objects - Nested Object

console.log("Objects Of Object - Nested Object\n\n");

console.log("Storing Information Of Multiple Students");
const classInfo = {
    Rohit: {
        grade: "A+",
        city: "Bhavnagar"
    },
    Parth: {
        grade: "A",
        city: "Ahmedabad"
    },
    Jay: {
        grade: "B",
        city: "Surat"
    }
};

console.log("Class All Information : ");
console.log(classInfo);
console.log("\n");

console.log("Class Individual Object Info : ");
console.log(classInfo.Rohit);
console.log(classInfo.Parth);
console.log(classInfo.Jay);
console.log("\n");

console.log("Class Individual Item of Individual Object Info");
console.log(classInfo.Rohit.city);
console.log(classInfo.Parth.grade);
console.log(classInfo.Jay.city);
classInfo.Parth.city = "Rajkot";
console.log(classInfo.Parth.city)
console.log("\n");

