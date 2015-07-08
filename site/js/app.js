var myCanvas = document.getElementById("my-canvas");
var ctx = myCanvas.getContext("2d");
// ctx.beginPath();
//
// // triangle
// ctx.moveTo(100,250);
// ctx.lineTo(200,150);
// ctx.stroke();
// ctx.moveTo(200,150);
// ctx.lineTo(300,250);
// ctx.stroke();
// // ctx.moveTo(150,150);
// // ctx.lineTo(100,350);
// // ctx.stroke();
//
// // square
// ctx.moveTo(100,400);
// ctx.lineTo(300,400);
// ctx.stroke();
// ctx.moveTo(300,400);
// ctx.lineTo(300,250);
// ctx.stroke();
// ctx.moveTo(300,250);
// ctx.lineTo(100,250);
// ctx.stroke();
// ctx.moveTo(100,250);
// ctx.lineTo(100,400);
// ctx.stroke();
//
//
// EVENT LISTENER TO MOUSE - MOUSEDOWN, MOUSEUP, MOUSEMOVE
// AND LOG COORDINATES. DRAWING!

var isPenDown = false;

function penDown(evt) {
  ctx.beginPath();
  console.log("This is penDown");
  console.log(evt.layerX, evt.layerY);
  isPenDown = true;
}

function penMove(evt) {
  console.log("evt.layerX, evt.layerY");
  if (isPenDown){
    ctx.lineTo(evt.layerX, evt.layerY);
    ctx.stroke();
  }
}

function penUp(evt) {
  console.log("This is penUp");
  isPenDown = false;
}

myCanvas.addEventListener("mousedown", penDown);

myCanvas.addEventListener("mouseup", penUp);

myCanvas.addEventListener("mousemove", penMove );



//TIMER
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var oneMinute = 5 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};

window.onload = function () {
    var oneMinute = 5 * 1,
        display = document.querySelector('.time');
    startTimer(oneMinute, display);
};

//STOP AND START TIMER


//ALERT DIALOGUE BOX AT 30 SECONDS






// ROLL DICE!
var diceFinalValue = document.querySelector(".dice");
var button_roll_dice = document.querySelector(".button_roll_dice");

function rollDice() {
console.log('rollingDice');
diceFinalValue.innerText = Math.floor(Math.random() * 6) + 1;
}

button_roll_dice.addEventListener("click", rollDice);





// GAMEPLAY. Four Arrays - one for each category:
// P(Person, Place, Animal), O(Object), A(Action), D(Difficult Words)
// The name of the array is also the hint. There is a hint box.
// Each array has words that will show up at random in an answer box,
// The answer is drawn from the hint category.
// There is also one array for the categories.

// CATEGORY OBJECTS WITHIN AN OBJECT
var categoriesArray = ["person", "thing", "action","difficult_word"];
var choice;

var answer = document.querySelector(".answer");
var answerLinkedToCategory;


var categories = {
  person: {
    hint: "person, place or animal",
    answer: ["canary", "australia", "manicurist", "jacques cousteau"]
  },
  thing: {
    hint: "object",
    answer: ["guitar", "dictionary", "birthday cake", "backpack"]
  },
  action: {
    hint: "action",
    answer: ["hunt", "double dutch", "shop", "workout"]
  },
  difficult_word: {
    hint: "difficult word",
    answer: ["flaneur", "voodoo", "meta", "pillow talk"]
  }
};


//HINT BOX / CATEGORIES - This is triggered by a button
var hint = document.querySelector(".hint");
var button_hint = document.querySelector(".button_hint");

function getHint() {
choice = categoriesArray[Math.floor(Math.random() * 3) + 0];
hint.innerHTML = categories[choice].hint;
answerLinkedToCategory = categories[choice].answer[Math.floor(Math.random() * 3) + 0];
answer.innerText = answerLinkedToCategory;
}

button_hint.addEventListener("click", getHint);
