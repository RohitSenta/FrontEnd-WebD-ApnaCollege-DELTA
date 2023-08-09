// First API Request
console.log("First API Request \n\n");
console.log("\n");


// Rendom Fact About Cat - Using Then And Catch Method
let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    console.log("Data1 =>");
    console.log(data.fact);
    console.log("\n");
    return fetch(url);
  }) 
  .then((res2) => {
    return res2.json();
  })
  .then((data2) => {
    // console.log(data2);
    console.log("Data2 =>");
    console.log(data2.fact);
    console.log("\n");
  })
  .catch((err) => {
    console.log("ERROR - ", err);
  });

  console.log("Rendom Fact About Cat - Using Then And Catch Method");
  console.log("\n");



// Rendom Fact About Cat - Using async And await Method

async function getFects() {
    try {
        let res3 = await fetch(url);
        let data3 = await res3.json();
        console.log("Data3 =>");
        console.log(data3.fact);
        console.log("\n");

        let res4 = await fetch(url);
        let data4 = await res4.json();
        console.log("Data4 =>");
        console.log(data4.fact);
        console.log("\n");

    } catch(e) {
        console.log("Error - ", e);
    }
    
    console.log("\n");
    console.log("Rendom Fact About Cat - Using async And await Method");
    console.log("API Request Completed");
    console.log("\n");
}
getFects();

