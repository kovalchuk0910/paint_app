const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const drawColor = document.querySelector('#color');
const lineWidthInput = document.querySelector('#lineWidth');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

//Start drawing
document.addEventListener("mousedown", (e) => {
    document.addEventListener("mousemove", draw);
    reposition(e);
});

//Stop drawing
document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", draw);
});

//Cursor position for drawing
let position = { 
    x: 0, 
    y: 0 
};

function reposition(e) {
    position.x = e.clientX - canvas.offsetLeft;
    position.y = e.clientY - canvas.offsetTop;
}

//Change color line and line width
let color = "black";
let lineWidth = 5;

drawColor.addEventListener("change", (e) => {
    color = drawColor.value;
})
lineWidthInput.addEventListener("change", () => {
    lineWidth = lineWidthInput.value;
})

//Render all
function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.moveTo(position.x, position.y);
  reposition(event);
  ctx.lineTo(position.x, position.y);
  ctx.stroke();
  ctx.closePath();
}

//Clear list
let clearBtn = document.querySelector('#clearBtn');

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})