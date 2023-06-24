const canvasPlace = document.querySelector('#gameDiv').querySelector('canvas');
const ctx = canvasPlace.getContext("2d");
const scoreLeftPlayer = document.querySelector("#leftPlayer");
const scoreRightPlayer = document.querySelector("#rightPlayer");

//canvas dimmension
let tableWidth = canvasPlace.width;
let tableHight = canvasPlace.height;

//Ball
let xBall = tableWidth/2;
let yBall = tableHight/2;
let radiusBall = 4;
let xVelocity = 3;
let yVelocity = 2;
let ballLeftside = xBall - radiusBall;
let ballRightSide = xBall + radiusBall;
let ballTopSide = yBall - radiusBall;
let ballBottom = yBall + radiusBall;

//Racket
let racketWidth = 2;
let racketHight = 30;
let yRacketLeft = (tableHight-racketHight)/2;
let xRacketLeft = 5;
let yRacketRight = (tableHight-racketHight)/2;
let xRacketRight = tableWidth - xRacketLeft - racketWidth;

//Racket moviments
let racketLeftUp = 'KeyW';
let racketLeftDown = 'KeyS';
let racketRightUp = 'ArrowUp';
let racketRightDown = 'ArrowDown';

//General
let colorFill = "#fff";
let colisionPoint = racketWidth+xRacketLeft;
let scoreLeft = 0;
let scoreRight = 0;

function firstScreen(){
    xBall = tableWidth/2;
    yBall = tableHight/2;
    yRacketLeft = yRacketRight = (tableHight-racketHight)/2;
    draw();
}
firstScreen();

//Start Game
const btnStart = document.querySelector("#startBTN").querySelector("button");
btnStart.addEventListener("click", startGame);
let startDraw = null;
function startGame(){
    if (btnStart.textContent === "Start the game"){
        btnStart.textContent = "Stop the game";
        startDraw = setInterval(draw,30);
    }else{
        btnStart.textContent = "Start the game";
        clearInterval(startDraw);
        startDraw = null;
        firstScreen();
        scoreLeft = scoreRight = 0;
        score(scoreLeft, scoreRight);
    }
}

function draw(){
    clearDraw();
    circle(xBall, yBall, radiusBall, colorFill);
    rect(xRacketLeft, yRacketLeft, racketWidth, racketHight, colorFill);
    rect(xRacketRight, yRacketRight, racketWidth, racketHight, colorFill);
    racketLeftMovement(racketLeftUp, racketLeftDown);
    racketRightMovement(racketRightUp, racketRightDown);
    racketColision();
    ballMoviment();
}

function clearDraw(){
    ctx.clearRect(0, 0, tableWidth, tableHight);
}

function circle(x, y, radius, color){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function rect(x, y, width, height, color){
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
}

function ballMoviment(){
    xBall += xVelocity;
    yBall += yVelocity;
    ballLeftside = xBall - radiusBall;
    ballRightSide = xBall + radiusBall;

    if (xBall >= tableWidth){
        scoreLeft++;
        xVelocity *= -1;
    }
    if (xBall <= 0){
        scoreRight++;
        xVelocity *= -1;
    }
    if (yBall+radiusBall > tableHight || yBall-radiusBall < 0){
        yVelocity *= -1;
    }
    score(scoreLeft, scoreRight);
}

function racketColision() {
    ballLeftside = xBall - radiusBall;
    ballRightSide = xBall + radiusBall;
    ballTopSide = yBall - radiusBall;
    ballBottom = yBall + radiusBall;

    if (ballLeftside <= xRacketLeft + racketWidth
        && ballTopSide < yRacketLeft + racketHight
        && ballBottom > yRacketLeft) {
        xBall = colisionPoint+radiusBall;
        xVelocity *= -1;
    }
    if (ballRightSide+1 >= xRacketRight
        && ballTopSide < yRacketRight + racketHight
        && ballBottom > yRacketRight) {
        xBall = tableWidth-colisionPoint-radiusBall;
        xVelocity *= -1;
    }
}

//Racket movements
//Prevent scrow with arrows
window.addEventListener("keydown", function(e) {
    if(["ArrowUp","ArrowDown"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

function racketRightMovement(keyUp, keyDown){
    document.addEventListener('keydown', (event) => {
        if(event.code == keyUp && yRacketRight > 0) {
            yRacketRight -= 1/100;
        }
        if(event.code == keyDown && yRacketRight < (tableHight-racketHight)) {
            yRacketRight += 1/100;
        }
      }, false);
}

function racketLeftMovement(keyUp, keyDown){
    document.addEventListener('keydown', (event) => {
        if(event.code == keyUp && yRacketLeft > 0) {
            yRacketLeft -= 1/100;
        }
        if(event.code == keyDown && yRacketLeft < (tableHight-racketHight)) {
            yRacketLeft += 1/100;
        }
      }, false);
}

//Score
function score(left, right){
    scoreLeftPlayer.textContent = left;
    scoreRightPlayer.textContent = right;
}