// Sending Headers With API Request

console.log("Sending Headers With API Request - Axios \n\n");
console.log("\n");

const url = "https://icanhazdadjoke.com/";

async function randomJokes() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let result = await axios.get(url, config);
        console.log(result.data);
        console.log(result.data.joke);
    } 
    catch (err) {
        console.log("Error - ", err);
    }
}
randomJokes();