// Searching Colleges Of India Using Query Search - Axios

console.log("Searching Colleges Of India Using Query Search - Axios \n\n");
console.log("\n");


let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector('button');
btn.addEventListener("click", async () => {
    let state = document.querySelector('input').value;
    console.log(state);
    let clgeArr = await getColleges(state);
    // console.log(clgeArr);
    
    show(clgeArr);
});

function show(clgeArr) {
    let list = document.querySelector('#list');
    list.innerText = "";
    for(col of clgeArr){
        console.log(col.name);

        let li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(state){
    try {
        let res = await axios.get(url + state);
        return res.data;
    } catch (err) {
        console.log("Error -", err);
        return [];
    }
}