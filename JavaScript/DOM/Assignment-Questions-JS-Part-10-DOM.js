// Assignment Questions JS Part-10

// Question - 1
// mouseout
let box = document.querySelector('.box');

box.addEventListener('mouseout', function(){
    console.log("Mouse is Outside a box");
});

// keypress
let inp = document.querySelector('input');
inp.addEventListener("keypress", function(event){
    console.log("Key =", event.key);
    // console.log("Code =", event.code);
    console.log("Key is Pressed");
});

// scroll
let p = document.querySelector('p');
p.addEventListener("scroll", function(event) {
    this.onscroll(
        console.log("Page is Scrolled")
    )
});

//p = document.querySelector('p');
p.addEventListener("load", function() {
    console.log("Page is load");
});



// Question - 1

let btn = document.createElement('button');
btn.innerText = "Button";

let br = document.querySelector('.br');
br.insertAdjacentElement('afterend', btn);

btn.addEventListener('click', function(){
    this.style.backgroundColor = "green";
});



// Question - 3

let inp2 = document.createElement('input');
inp2.setAttribute("placeholder", "Enter your name");
inp2.setAttribute("class", "formInp")

let sumBtn = document.createElement('button');
sumBtn.innerText = "Submit";
sumBtn.setAttribute("class", "sumBtn");

let div2 = document.querySelector('.div2');
div2.append(inp2);
div2.append(" "); 
div2.append(sumBtn);

let h2 = document.createElement('h2');
let enteredKeys = "";

// inp2.addEventListener("change", function(event){
//     // event.preventDefault();

//     console.log(inp2.value);
//     if((inp2.value >= 'a' && inp2.value <= 'z') || (inp2.value >= 'A' && inp2.value <= 'Z') || (inp2.value == " ")){
//         enteredKeys += inp2.value;
//         console.log(enteredKeys);
//         h2.innerText = enteredKeys;
//     }
// });


inp2.addEventListener('keydown', function(event){
    if((event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z') || (event.key == " ")){
        enteredKeys += event.key;
        console.log(enteredKeys);
        h2.innerText = enteredKeys;
    }
    else {
        enteredKeys += '';
        h2.innerText = enteredKeys;
    }
});


// div2 = document.querySelector(".div2");
div2.insertAdjacentElement("beforebegin", h2);