
// Promises For Callback Hell
console.log("Promises For Callback Hell In JavaScript");
console.log("\n\n");

// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }
// saveToDb(
//     "Apna College", 
//     () => {
//         console.log("Success : your data was saved ");
//         saveToDb(
//             "Hello World!!", 
//             () => {
//                 console.log("Success : data2 saved! ");
//                 saveToDb(
//                     "Rohit Senta",
//                     () => {
//                         console.log("Success : data3 saved! ");
//                     },
//                     () => {
//                         console.log("failure : weak connection! ");
//                     }
//                 );
//             }, 
//             () => {
//                 console.log("failure : weak connection! ");
//             }
//         );
//     }, () => {
//         console.log("Failure : Weak Connection! Data not saved!");
//     }
// );


// Use Of Promises
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("Success : Data was saved !");
        } else { 
            reject("Failure : Weak Connection !!!");
        }
    }); 
}
saveToDb("Apna College") // request = promise object 
    .then((result) => {
        console.log("Data1 Saved");
        console.log("Result of Promise :", result);
        return saveToDb("Hello World")
    })
    .then((result) => {
        console.log("Data2 Saved");
        console.log("Result of Promise :", result);
        return saveToDb("Rohit Senta");
    }) 
    .then((result) => {
        console.log("Data3 Saved");
        console.log("Result of Promise :", result);
    })
    .catch((error) => {
        console.log("Promise was rejected");
        console.log("Error of Promise :", error);
    });
