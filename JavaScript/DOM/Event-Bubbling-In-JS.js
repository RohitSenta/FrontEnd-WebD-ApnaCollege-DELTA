// Event Bubbling In JavaScript 
console.log("Event-Bubbling In JavaScript\n\n");

let div = document.querySelector(".div");
let ul = document.querySelector(".ul");
let lis = document.querySelectorAll(".li");

div.addEventListener("click", function() {
    console.log("div was clicked");
});

ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("li was clicked");
    });
}
console.log("\n\n");

// Event Bubbling Activity
console.log("Event Bubbling Activity \n\n");

let btn = document.querySelector(".btn");
let inp = document.querySelector(".input");
let ul2 = document.querySelector(".ul2");
let li2 = document.querySelector(".li2");

btn.addEventListener("click", function() {
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul2.appendChild(item);

    let delBtn = document.createElement('button');
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    console.log(inp.value);
    inp.value = "";
});


ul2.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Item Deleted");
    }
});

// let del = document.querySelectorAll(".delete");
// for(delBtns of del){
//     delBtns.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }