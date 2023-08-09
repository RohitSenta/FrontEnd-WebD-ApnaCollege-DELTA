// Upadating URL Using Query Strings - Axois

console.log("Upadating URL Using Query Strings - Axois \n\n");
console.log("\n");


let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector('input').value;
    console.log(country);
    let colArr = await getColleges(country);
    // console.log(colArr);

    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);
        // console.log(col);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch(err) {
        console.log("Error - ", err);
        return [];
    }
}