const canvasPlace = document.querySelector('#gameDiv').querySelector('canvas');
const ctx = canvasPlace.getContext("2d");
const controls = document.querySelector("#controls");


const btnStart = document.querySelector("#startBTN").querySelector("button");
btnStart.addEventListener("click", startGame);
let startDraw = null;
function startGame(){
    if (btnStart.textContent === "Start the game"){
        btnStart.textContent = "Stop the game";
        if(isTouchDevice)controls.style.display = "flex";
    }else{
        btnStart.textContent = "Start the game";
        clearInterval(startDraw);
        startDraw = null;
        if (isTouchDevice)controls.style.display = "none";
    }
}


//Touch devices
function isTouchDevice() {
    return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
}