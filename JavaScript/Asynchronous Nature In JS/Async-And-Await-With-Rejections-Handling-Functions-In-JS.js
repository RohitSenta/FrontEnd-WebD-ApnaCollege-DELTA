// Async & Await With Rejections Hendling Functions In JavaScript

console.log("Async & Await With Rejections Hendling Functions In JavaScript \n\n");

// 
async function greet() {
    // throw "Weak Connection !";
    return "Hello !";
}

greet()
    .then((result) => {
        console.log("Promise was resolved");
        console.log("result was :", result);
    })
    .catch((err) => {
        console.log("Promise was rejected with err :", err);
    });

let demo = async () => {
    return "Hello World !";
};
console.log("\n\n");



// Await Keyword
console.log("Await Keyword \n\n");

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo2() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}



// Async & Await Function For Color Change Function 
console.log("Async & Await Fir Color Change Function \n\n");

h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3){
                reject("Promise Rejected !");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("Color Changed!");
        }, delay);
    });
}

async function colors() {
    try{
        await changeColor("yellow", 1000);
        await changeColor("orange", 1000);
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
    } catch (err) {
        console.log("Error Caught :");
        console.log(err);
    }

    let a = 5;
    console.log("a =", a);
    console.log("New Number =", a + 3);
}

colors();