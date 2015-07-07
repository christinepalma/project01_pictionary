var myCanvas = document.getElementById("my-canvas");
var ctx = myCanvas.getContext("2d");
ctx.beginPath();

// triangle
ctx.moveTo(100,250);
ctx.lineTo(200,150);
ctx.stroke();
ctx.moveTo(200,150);
ctx.lineTo(300,250);
ctx.stroke();
// ctx.moveTo(150,150);
// ctx.lineTo(100,350);
// ctx.stroke();

// square
ctx.moveTo(100,400);
ctx.lineTo(300,400);
ctx.stroke();
ctx.moveTo(300,400);
ctx.lineTo(300,250);
ctx.stroke();
ctx.moveTo(300,250);
ctx.lineTo(100,250);
ctx.stroke();
ctx.moveTo(100,250);
ctx.lineTo(100,400);
ctx.stroke();


// EVENT LISTENER TO MOUSE - MOUSEDOWN, MOUSEUP, MOUSEMOVE
// AND LOG COORDINATES
var isPenDown = false;

function penDown(evt) {
  console.log("This is penDown");
  console.log(evt.layerX, evt.layerY);
  isPenDown = true;
}

function penMove(evt) {
  console.log("evt.layerX, evt.layerY");
  ctx.lineTo(evt.layerX, evt.layerY);
  ctx.stroke();
}

function penUp(evt) {
  console.log("This is penUp");
  isPenDown = false;
}



myCanvas.addEventListener("mousedown", penDown);

myCanvas.addEventListener("mouseup", penUp);

myCanvas.addEventListener("mousemove", penMove );











// ROLL DICE!
var diceFinalValue = document.querySelector(".dice");
var roll_dice_button = document.querySelector('.roll_dice');

function rollDice() {
console.log('rollingDice');
diceFinalValue.innerText = Math.floor(Math.random() * 6) + 1;
}

roll_dice_button.addEventListener("click", rollDice);
