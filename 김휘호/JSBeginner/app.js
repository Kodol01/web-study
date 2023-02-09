const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200,200,15,100);
ctx.fillRect(350,200,15,100);
ctx.fillRect(252.5,200,60,200);


ctx.arc(282.5,150,50,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(265,125,10,0,1*Math.PI);
ctx.arc(300,125,10,0,1*Math.PI);
ctx.fill();