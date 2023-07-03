const canvasPlace = document.querySelector("#gameDiv").querySelector("canvas");
const ctx = canvasPlace.getContext("2d");
const scoreLeftPlayer = document.querySelector("#leftPlayer");
const scoreRightPlayer = document.querySelector("#rightPlayer");
const controls = document.querySelector("#controls");
const controlsLeft = controls.querySelector("#controlsLeft");
const controlsRight = controls.querySelector("#controlsRight");
const sound = document.querySelector("#sound");

//Audio
let soundTheme = new Audio("../../src/sounds/Mario_Bros_medley.mp3");
soundTheme.loop = true;
soundTheme.volume = 0.2;
let touchRacket = new Audio("../../src/sounds/smb_fireball.wav");
let point = new Audio("../../src/sounds/smb_coin.wav");

//canvas dimmension
let tableWidth = canvasPlace.width;
let tableHight = canvasPlace.height;

//Ball
let xBall = tableWidth / 2;
let yBall = tableHight / 2;
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
let yRacketLeft = (yRacketRight = (tableHight - racketHight) / 2);
let xRacketLeft = 5;
let xRacketRight = tableWidth - xRacketLeft - racketWidth;

//Racket moviments
let racketLeftUp = "KeyW";
let racketLeftDown = "KeyS";
let racketRightUp = "ArrowUp";
let racketRightDown = "ArrowDown";
let yRacketLeftvelocity = (yRacketRightvelocity = 0);

//General
let colorFill = "#fff";
let colisionPoint = racketWidth + xRacketLeft;
let scoreLeft = (scoreRight = 0);
let touchup = false;

function firstScreen() {
  xBall = tableWidth / 2;
  yBall = tableHight / 2;
  yRacketLeft = yRacketRight = (tableHight - racketHight) / 2;
  draw();
}
firstScreen();

//Start Game
const btnStart = document.querySelector("#startBTN").querySelector("button");
btnStart.addEventListener("click", startGame);
let startDraw = null;
function startGame() {
  if (btnStart.textContent === "Start the game") {
    btnStart.textContent = "Stop the game";
    controls.style.display = isTouchDevice() ? "flex" : "none";
    soundTheme.play();
    startDraw = setInterval(draw, 30);
  } else {
    btnStart.textContent = "Start the game";
    clearInterval(startDraw);
    startDraw = null;
    firstScreen();
    soundTheme.pause();
    soundTheme.currentTime = 0;
    scoreLeft = scoreRight = 0;
    score(scoreLeft, scoreRight);
    controls.style.display = isTouchDevice() ? "none" : "flex";
  }
}

function draw() {
  yRacketLeft += yRacketLeftvelocity;
  yRacketLeft = yRacketLeft < 0 ? 0 : yRacketLeft;
  yRacketLeft =
    yRacketLeft > tableHight - racketHight
      ? (yRacketLeft = tableHight - racketHight)
      : yRacketLeft;

  yRacketRight += yRacketRightvelocity;
  yRacketRight = yRacketRight < 0 ? (yRacketRight = 0) : yRacketRight;
  yRacketRight =
    yRacketRight > tableHight - racketHight
      ? tableHight - racketHight
      : yRacketRight;

  clearDraw();
  circle(xBall, yBall, radiusBall, colorFill);
  rect(xRacketLeft, yRacketLeft, racketWidth, racketHight, colorFill);
  rect(xRacketRight, yRacketRight, racketWidth, racketHight, colorFill);
  racketColision();
  ballMoviment();
}

function clearDraw() {
  ctx.clearRect(0, 0, tableWidth, tableHight);
}

function circle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function rect(x, y, width, height, color) {
  ctx.rect(x, y, width, height);
  ctx.fillStyle = color;
  ctx.fill();
}

function ballMoviment() {
  xBall += xVelocity;
  yBall += yVelocity;
  ballLeftside = xBall - radiusBall;
  ballRightSide = xBall + radiusBall;

  if (xBall >= tableWidth) {
    scoreLeft++;
    xVelocity *= -1;
    point.play();
  }
  if (xBall <= 0) {
    scoreRight++;
    xVelocity *= -1;
    point.play();
  }

  yVelocity =
    yBall + radiusBall > tableHight || yBall - radiusBall < 0
      ? (yVelocity *= -1)
      : yVelocity;
  score(scoreLeft, scoreRight);
}

function racketColision() {
  ballLeftside = xBall - radiusBall;
  ballRightSide = xBall + radiusBall;
  ballTopSide = yBall - radiusBall;
  ballBottom = yBall + radiusBall;

  if (
    ballLeftside <= xRacketLeft + racketWidth &&
    ballTopSide < yRacketLeft + racketHight &&
    ballBottom > yRacketLeft
  ) {
    xBall = colisionPoint + radiusBall;
    xVelocity *= -1;
    touchRacket.play();
  }
  if (
    ballRightSide + 1 >= xRacketRight &&
    ballTopSide < yRacketRight + racketHight &&
    ballBottom > yRacketRight
  ) {
    xBall = tableWidth - colisionPoint - radiusBall;
    xVelocity *= -1;
    touchRacket.play();
  }
}

//Racket movements
//Prevent scrow with arrows
window.addEventListener(
  "keydown",
  function (e) {
    if (["ArrowUp", "ArrowDown"].indexOf(e.code) > -1) {
      e.preventDefault();
    }
  },
  false
);

//Control with keys
document.addEventListener(
  "keydown",
  (event) => {
    yRacketLeftvelocity =
      event.code == racketLeftUp
        ? -5
        : event.code == racketLeftDown
        ? 5
        : yRacketLeftvelocity;
    yRacketRightvelocity =
      event.code == racketRightUp
        ? -5
        : event.code == racketRightDown
        ? 5
        : yRacketRightvelocity;
  },
  false
);

document.addEventListener(
  "keyup",
  (event) => {
    yRacketLeftvelocity =
      event.code == racketLeftUp || event.code == racketLeftDown
        ? 0
        : yRacketLeftvelocity;
    yRacketRightvelocity =
      event.code == racketRightUp || event.code == racketRightDown
        ? 0
        : yRacketRightvelocity;
  },
  false
);

//Control with buttons touch
controlsLeft.querySelector(".up").addEventListener(
  "touchstart",
  () => {
    yRacketLeftvelocity = -5;
  },
  false
);
controlsLeft.querySelector(".down").addEventListener(
  "touchstart",
  () => {
    yRacketLeftvelocity = 5;
  },
  false
);
controlsRight.querySelector(".up").addEventListener(
  "touchstart",
  () => {
    yRacketRightvelocity = -5;
  },
  false
);
controlsRight.querySelector(".down").addEventListener(
  "touchstart",
  () => {
    yRacketRightvelocity = 5;
  },
  false
);

controlsLeft.querySelector(".up").addEventListener(
  "touchend",
  () => {
    yRacketLeftvelocity = 0;
  },
  false
);
controlsLeft.querySelector(".down").addEventListener(
  "touchend",
  () => {
    yRacketLeftvelocity = 0;
  },
  false
);
controlsRight.querySelector(".up").addEventListener(
  "touchend",
  () => {
    yRacketRightvelocity = 0;
  },
  false
);
controlsRight.querySelector(".down").addEventListener(
  "touchend",
  () => {
    yRacketRightvelocity = 0;
  },
  false
);

//Score
function score(left, right) {
  scoreLeftPlayer.textContent = left;
  scoreRightPlayer.textContent = right;
}

//Touch devices
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

sound.addEventListener(
  "click",
  () => {
    if (soundTheme.volume > 0) {
      soundTheme.volume = 0;
      touchRacket.volume = 0;
      point.volume = 0;
      sound.src = "../../src/svg/volumeOff.svg";
    } else {
      soundTheme.volume = 0.2;
      touchRacket.volume = 1;
      point.volume = 1;
      sound.src = "../../src/svg/volumeOn.svg";
    }
  },
  false
);
