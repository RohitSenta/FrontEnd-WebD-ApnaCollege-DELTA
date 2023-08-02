
// Mouse Events

// Event On Click
let btns = document.querySelectorAll(".button1");
for(buttons of btns){
    buttons.onmouseenter = function() {
        console.log("You Entered Button");
    }
    buttons.addEventListener("click", sayHello);
    buttons.addEventListener("click", sayName);
}

function sayHello() {
    alert("Hello World!");
};
function sayName() {
    alert("Apna College");
};


// Event Listener Activity
let btnEve = document.querySelector(".btn1");
btnEve.addEventListener("click", function() {
    console.log("Generate Random Color");
    let h3 = document.querySelector('h3');
    let randomColor = getRendomColor();
    h3.innerText = randomColor;

    let div = document.querySelector('.div1');
    div.style.backgroundColor = randomColor;

    console.log("Color Updated");
});

function getRendomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
} 


// Event Listener On Paragraph
let para = document.querySelector('p');

para.addEventListener("click", function() {
    console.log("Paragraph Was Clicked");
});

let box = document.querySelector('.box');

box.addEventListener("mouseenter", function() {
    console.log("Mouse is inside a box");
});


// this In Event Listner
let h2 = document.querySelector('.h2');
let h3 = document.querySelector('.h3');
let p2 = document.querySelector('.p2');
let btn3 = document.querySelector('.btn3');

function changeBgColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "red";
}

h2.addEventListener("click", changeBgColor); 

h3.addEventListener("click", changeBgColor);

p2.addEventListener("click", changeBgColor); 

btn3.addEventListener("click", changeBgColor); 



// Keyboard Events


let btn4 = document.querySelector('.btn4');
let inp = document.querySelector('input');

inp.addEventListener("keydown", function(event) {
    console.log("Key =", event.key);
    console.log("Code =", event.code);
    console.log("Key Was Pressed");
});

inp.addEventListener("keyup", function() {
    console.log("Key Was Released");
});

let game = document.querySelector('#game');
game.addEventListener("keydown", function(event){
    console.log(event.code); // ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    if(event.code == "ArrowUp"){
        console.log("Character Moves Forword");
    } else if (event.code == "ArrowDown"){
        console.log("Character Moves Backword");
    } else if (event.code == "ArrowLeft"){
        console.log("Character Moves Leftword");
    } else if (event.code == "ArrowRight"){
        console.log("Character Moves Rightword");
    } 
    
    if (event.code == "KeyU"){
        console.log("Character Moves Up");
    } else if (event.code == "KeyD"){
        console.log("Character Moves Down");
    } else if (event.code == "KeyL"){
        console.log("Character Moves Left");
    } else if (event.code == "KeyR"){
        console.log("Character Moves Right");
    } 
});