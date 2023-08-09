
// API Request Using Axios
console.log("API Request Using Axios \n\n");
console.log("\n");


// API for cat facts
console.log("API for cat fact \n\n");
let btn = document.querySelector('.btn1');
btn.addEventListener("click", async ()=> {
    let fact = await getFects();
    console.log(fact);
    let p = document.querySelector('#result');
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFects() {
    try {
        let res = await axios.get(url);
        // console.log(res);
        return res.data.fact;
    } catch (e) {
        console.log("Error - ", e);
        return "No Fact Found";
    }
}


// API for dog image
console.log("API for dog image \n\n");

let btn2 = document.querySelector('.btn2');
btn2.addEventListener("click", async ()=> {
    let link = await getImage();
    console.log(link);
    let img = document.querySelector('#img');
    img.setAttribute('src', link);
});

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getImage() {
    try {
        let res2 = await axios.get(url2);
        // console.log(res2.data.message);
        return res2.data.message;
    } catch (err) {
        console.log("Error - ", err);
        return "Image Not Found";
    }
}
