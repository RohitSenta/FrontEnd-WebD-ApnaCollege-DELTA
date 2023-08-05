// Callback-Hell-In-JavaScript

let h2 = document.querySelector('h2');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h2.style.color = color;
            resolve("Color Changed!");
        }, delay)
    })
  ;
}

changeColor("yellow", 1000)
    .then(() => {
        console.log("yellow color was completed");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("orange color was completed");
        return changeColor("red", 1000);
    })
    .then(() => {
        console.log("red color was completed");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("green color was completed");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("blue color was completed");
    });


// changeColor("yellow", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("red", 1000, () => {
//             changeColor("green", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });

// callbacks nesting => This is Called - callback hell 