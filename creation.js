let main = document.body.querySelector('main');
let xCanvas, yCanvas, color;
let x, y, radius;

function createCanvas(xCanvas, yCanvas){
    const createCanvas = document.createElement('canvas');
    main.querySelector('#canvasDiv').appendChild(createCanvas);
    const canvasPlace = main.querySelector('#canvasDiv').querySelector('canvas');
    canvasPlace.width = xCanvas;
    canvasPlace.height = yCanvas
}

function canvasBG(color){
    const canvasPlace = main.querySelector('#canvasDiv').querySelector('canvas');
    canvasPlace.style.backgroundColor = color;
}

function centerCanvas(){
    const canvasDiv = main.querySelector('#canvasDiv').style;
    canvasDiv.display = 'flex';
    canvasDiv.justifyContent = 'center';
}

function circle(x, y, radius, color){
    const canvasPlace = main.querySelector('#canvasDiv').querySelector('canvas');
    const ctx = canvasPlace.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function rect(x, y, width, height, color){
    const canvasPlace = main.querySelector('#canvasDiv').querySelector('canvas');
    const ctx = canvasPlace.getContext("2d");
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
}

function clearDraw(){
    const canvasPlace = main.querySelector('#canvasDiv').querySelector('canvas');
    const ctx = canvasPlace.getContext("2d");
    ctx.clearRect(0, 0, canvasPlace.width, canvasPlace.height);
}


