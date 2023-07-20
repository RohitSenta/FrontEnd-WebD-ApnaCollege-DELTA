// Array of Objects

console.log("Array Of objects\n\n");
console.log("Storing Information Of Multiple Students \n\n");

const studentsInfo = [
    {
        name: "Rohit",
        rollNo: 45,
        grade: "A+",
        city: "Bhavnagar" 
    },
    {
        name: "Anil",
        rollNo: 25,
        grade: "A",
        city: "Bhavnagar"
    },
    {
        name: "Parth",
        rollNo: 40,
        grade: "B",
        city: "Ahmedabad"
    },
    {
        name: "Nikhil",
        rollNo: 10,
        grade: "A",
        city: "Surat"
    }
];

console.log("Class All Information : ");
console.log(studentsInfo);
console.log("\n");

console.log("Individual Student Object Info : ");
console.log(studentsInfo[0]);
console.log(studentsInfo[1]);
console.log(studentsInfo[2]);
console.log("\n");

console.log("Individual Student Object item Info : ");
console.log(studentsInfo[1].name);
console.log(studentsInfo[1].rollNo);
console.log(studentsInfo[1].grade);
console.log(studentsInfo[1].city);

studentsInfo[1].city = "Rajkot";
console.log(studentsInfo[1].city);

studentsInfo[1].surname = "Senta";
console.log(studentsInfo[1]);
