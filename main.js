let canvas = document.getElementById('game-layer');
let ctx = canvas.getContext("2d");

let mousePosition = {
  x: 0,
  y: 0
};
let lastMousePosition = {
  x: 0,
  y: 0
};
let brush_is_painting = false;

let clear = function(color) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

let gameStats = function() {
  ctx.fillStyle = "black";
  ctx.font = "32px Sans";
  ctx.textBaseline = "top";
  ctx.fillText("Canvas size = " + canvas.width + " x " + canvas.height, 10, 10);
};

let mouseDown = function(event) {
  if (event.buttons === 1) {
    brush_is_painting = true;
  }
};

let mouseUp = function(event) {
  brush_is_painting = false;
};

let mouseMove = function(event) {
  lastMousePosition.x = mousePosition.x;
  lastMousePosition.y = mousePosition.y;
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
};

let paint = function() {
  if (brush_is_painting) {
    ctx.beginPath();
    ctx.moveTo(lastMousePosition.x, lastMousePosition.y);
    ctx.lineTo(mousePosition.x, mousePosition.y);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = "20";
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(mousePosition.x, mousePosition.y, 10, 10, 0, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
  }
};

let draw = function() {
  window.requestAnimationFrame(draw);

  paint();
  gameStats();
};

(function() {
  function redraw() {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = '5';
    ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    redraw();
  }

  function initialize() {
    window.addEventListener('resize', resizeCanvas, false);
    canvas.addEventListener('mousedown', mouseDown);
    canvas.addEventListener('mouseup', mouseUp);
    canvas.addEventListener('mousemove', mouseMove);
    resizeCanvas();
  }

  initialize();
})();

draw();
