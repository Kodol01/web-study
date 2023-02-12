const fileInput = document.getElementById("file");
const eraserBtn = document.getElementById("eraser-btn");
const destroyBtn = document.getElementById("destroy-btn");
const modeBtn = document.getElementById("mode-btn");
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");

const Canvas_width = 800;
const Canvas_height = 800;

canvas.width = Canvas_width;
canvas.height = Canvas_height;

ctx.lineWidth = lineWidth.value;

let isPainting = false;
let isFilling = false;
/*변수선언*/

function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown(){
    isPainting = true;
}

function CancelPainting(){
    isPainting = false;
}

function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
}

function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event){
    const colorValue = event.target.dataset.color
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill";
    }
    else{
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,Canvas_width,Canvas_height);
    }
}

function onDestroyClick(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,Canvas_width,Canvas_height);
}

function onEraserClick(){
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}

function onFileChange(event){
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function(){
        ctx.drawImage(image, 0, 0, Canvas_width, Canvas_height);
        /*fileInput.value = null; 파일없음으로 표시*/
    }

}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", CancelPainting);
canvas.addEventListener("mouseleave", CancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOption.forEach(color => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);