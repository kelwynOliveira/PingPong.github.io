//Table variables
let tableWidth = window.innerWidth*80/100;
let tableHight = tableWidth/1.8;

//Ping pong ball variables
let xBall = tableWidth/2;
let yBall = tableHight/2;
let diameter = 15;
let radiusBall = diameter/2;
let colorFill = 'white';
let xVelocity = 2;
let yVelocity = 2;

//Racket Variables
let racketWidth = 10;
let racketHight = 90;
let yRacketLeft = tableHight/2 - 45;
let xRacketLeft = 5;
let yRacketRight = tableHight/2 - 45;
let xRacketRight = tableWidth - racketWidth - 5;
let racket;

//Racket moviments
let racketLeftUp = 'KeyW';
let racketLeftDown = 'KeyS';
let racketRightUp = 'ArrowUp';
let racketRightDown = 'ArrowDown';

//Pannel points

function setup() {
    createCanvas(tableWidth, tableHight);
    canvasBG('black');
    centerCanvas();
}
setup();

function draw(){
    clearDraw();
    circle(xBall, yBall, radiusBall, colorFill);
    rect(xRacketLeft, yRacketLeft, racketWidth, racketHight, colorFill);
    rect(xRacketRight, yRacketRight, racketWidth, racketHight, colorFill);
    racketLeftMovement(racketLeftUp, racketLeftDown);
    racketRightMovement(racketRightUp, racketRightDown);
    racketColision();
    ballMoviment()
}
setInterval(draw,10);

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

function racketRightMovement(keyUp, keyDown){
    document.addEventListener('keydown', (event) => {
        if(event.code == keyUp && yRacketRight > 0) {
            yRacketRight -= 1/30;
        }
        if(event.code == keyDown && yRacketRight < (tableHight-racketHight)) {
            yRacketRight += 1/40;
        }
      }, false);
}

function racketLeftMovement(keyUp, keyDown){
    document.addEventListener('keydown', (event) => {
        if(event.code == keyUp && yRacketLeft > 0) {
            yRacketLeft -= 1/30;
        }
        if(event.code == keyDown && yRacketLeft < (tableHight-racketHight)) {
            yRacketLeft += 1/40;
        }
      }, false);
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