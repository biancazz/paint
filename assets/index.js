const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");
const trazos = [];


let initialX;
let initialY;
let currentColor = "#000";


const dibujar = (cursorX, cursorY) => {
  context.beginPath();
  context.moveTo(initialX, initialY);
  context.lineWidth = 15;
  context.strokeStyle = currentColor;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(cursorX, cursorY);
  context.stroke();


  trazos.push({ x1: initialX, y1: initialY, x2: cursorX, y2: cursorY, color: currentColor });


  initialX = cursorX;
  initialY = cursorY;
};






const mouseDown = (evt) => {
  initialX = evt.offsetX;
  initialY = evt.offsetY;
  dibujar(initialX, initialY);
  mainCanvas.addEventListener("mousemove", mouseMoving);
};


const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY);
};


const mouseUp = () => {
  mainCanvas.removeEventListener("mousemove", mouseMoving);
};


const cambiarColor = (color) => {
  currentColor = color;
};


const borrarTodo = () => {
  context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  trazos.length = 0;
};




mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);


document.getElementById("rojo").addEventListener("click", () => cambiarColor("red"));
document.getElementById("verde").addEventListener("click", () => cambiarColor("green"));
document.getElementById("amarillo").addEventListener("click", () => cambiarColor("yellow"));
document.getElementById("azul").addEventListener("click", () => cambiarColor("blue"));
document.getElementById("negro").addEventListener("click", () => cambiarColor("black"));
document.getElementById("goma").addEventListener("click", () => cambiarColor("white"));
document.getElementById("borrarTodo").addEventListener("click", borrarTodo);
