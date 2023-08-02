

// Question 1
let input = document.createElement('input');
let btn1 = document.createElement('button');
btn1.innerText = "Click Me!";

document.querySelector(".div2").append(input);
document.querySelector(".div2").append(" ");
document.querySelector(".div2").append(btn1);


// Question 2
input.setAttribute('placeholder', "Username");
btn1.setAttribute('id', "btn");


// Question 3
let button = document.querySelector('#btn');
button.classList.add('styles');


// Question 4 
let h1 = document.createElement('h1');
h1.innerHTML = "DOM Practice/Assignment";
h1.classList.add('under');

document.querySelector(".div2").prepend(h1);


// Question 5
let para = document.createElement('p');
para.innerHTML = "Apna College <b>Delta</b> Practice";

document.querySelector(".div2").append(para);
