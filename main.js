let canvas = document.getElementById('game-layer');
let stage = document.getElementById("stage");
let ctx = canvas.getContext("2d");

(function() {
  function initialize() {
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
  }

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

  initialize();
})();

let clear = function(color) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

let gameStats = function() {
  ctx.fillStyle = "black";
  ctx.font = "32px Sans";
  ctx.textBaseline = "top";
  ctx.fillText("Canvas size = " + canvas.width + " x " + canvas.height, 10, 10);
};

let draw = function() {
  window.requestAnimationFrame(draw);

  clear();
  gameStats();
};

draw();
