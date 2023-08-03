// Simon Says Game


gameSeq = [];
userSeq = [];

let started = false;
let level = 0;
let maxScore = 0;

let h2 = document.querySelector('h2');

let btns = ["red", "yellow", "green", "purple"];

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("Gama Is Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    level++;
    // maxScore = level;
    h2.innerText = `Level ${level}`;
    userSeq = [];

    // random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
   
    gameSeq.push(randColor);
    console.log(gameSeq);

    currScore();
    highestScore();

    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart the game.`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        }, 200);

        reset();
    }
}

function btnPress() {
    let btn2 = this;
    userFlash(btn2);

    let userColor = btn2.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);

}

function currScore() {
    let currScore = document.querySelector('.currScore');
    currScore.innerText = `Current Score ${level-1}`;   
}

function highestScore() {
    let highScore = document.querySelector('.highScore');
    if(maxScore < level){
        maxScore = level;
    }
    highScore.innerText = `Highest Score : ${maxScore-1}`
}

let allBtns = document.querySelectorAll(".btn");
for(btn1 of allBtns){
    btn1.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}