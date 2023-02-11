const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
    "#1abc9c",
    "#3498db",
    "#e74c3c",
    "#2c3e50"
];

function onClick(event) {
    ctx.beginPath();
    ctx.moveTo(400,400);
    const color = colors[Math.floor(Math.random()*colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove",onClick);