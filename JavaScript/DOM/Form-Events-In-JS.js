
// Form Events
let form = document.querySelector('form');

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Form Submitted!");
    console.dir(form);

    // let user = document.querySelector('#user');
    // let pass = document.querySelector('#pass');

    let user = this.elements[0];    // form.elements[0]
    let pass = this.elements[1];    // form.elements[1]

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);

}); 

let inp = document.querySelector("#user");

inp.addEventListener("change", function(){
    console.log("Change Event");    
    console.log("Final value =", this.value);   
});

inp.addEventListener("input", function(){
    console.log("Input Event");    
    console.log("Final value =", this.value);   
});


let text = document.querySelector("#text");
let p = document.querySelector('p');

text.addEventListener("input", function(){
    console.log(text.value);
    p.innerText = text.value;
})