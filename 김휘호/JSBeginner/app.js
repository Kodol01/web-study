const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;

let isPainting = false;
/*변수선언*/

function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown(){
    isPainting = true;
}

function CancelPainting(){
    isPainting = false;
}

function onLineWidthChange(event){
    ctx.beginPath();
    ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", CancelPainting);
canvas.addEventListener("mouseleave", CancelPainting);
/*document.addEventListener("mouseleave", CancelPainting);
document로 mouseleave 설정*/
lineWidth.addEventListener("change", onLineWidthChange);