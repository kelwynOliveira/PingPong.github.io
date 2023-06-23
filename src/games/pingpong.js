const canvasPlace = document.querySelector('#gameDiv').querySelector('canvas');
const ctx = canvasPlace.getContext("2d");

//General
let colorFill = "#fff";

//canvas dimmension
let tableWidth = canvasPlace.width;
let tableHight = canvasPlace.height;

//Ball
let xBall = tableWidth/2;
let yBall = tableHight/2;
let radiusBall = 4;
let xVelocity = 2;
let yVelocity = 2;

//Racket
let racketWidth = 2;
let racketHight = 30;
let yRacketLeft = (tableHight-racketHight)/2;
let xRacketLeft = 5;
let yRacketRight = (tableHight-racketHight)/2;
let xRacketRight = tableWidth - racketWidth - 5;




circle(xBall, yBall, radiusBall, colorFill);
rect(xRacketLeft, yRacketLeft, racketWidth, racketHight, colorFill);
rect(xRacketRight, yRacketRight, racketWidth, racketHight, colorFill);

const btnStart = document.querySelector("#startBTN").querySelector("button");
btnStart.addEventListener("click", startGame);

function startGame(){
    btnStart.textContent === "Start the game" ? btnStart.textContent = "Stop the game":btnStart.textContent = "Start the game";
    setInterval(draw,20);
    // let draw = setInterval(function(){
    //     draw();
    //     if (start === false){clearInterval(draw)}
    // },20)

}

function draw(){
    clearDraw();
    circle(xBall, yBall, radiusBall, colorFill);
    rect(xRacketLeft, yRacketLeft, racketWidth, racketHight, colorFill);
    rect(xRacketRight, yRacketRight, racketWidth, racketHight, colorFill);
    // racketLeftMovement(racketLeftUp, racketLeftDown);
    // racketRightMovement(racketRightUp, racketRightDown);
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
    if (xBall+radiusBall > tableWidth || xBall-radiusBall < 0){
        xVelocity *= -1;
    }
    if (yBall+radiusBall > tableHight || yBall-radiusBall < 0){
        yVelocity *= -1;
    }
}

function racketColision() {
    let ballLeftside = xBall - radiusBall;
    let ballRightSide = xBall + radiusBall;
    let ballTopSide = yBall - radiusBall;
    let ballBottom = yBall + radiusBall;

    if (ballLeftside < xRacketLeft + racketWidth
        && ballTopSide < yRacketLeft + racketHight
        && ballBottom > yRacketLeft) {
        xVelocity *= -1;
    }
    if (ballRightSide > xRacketRight
        && ballTopSide < yRacketRight + racketHight
        && ballBottom > yRacketRight) {
        xVelocity *= -1;
    }
}