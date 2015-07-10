var myCanvas = document.getElementById("my-canvas");
var ctx = myCanvas.getContext("2d");

// EVENT LISTENER TO MOUSE - MOUSEDOWN, MOUSEUP, MOUSEMOVE
// AND LOG COORDINATES. DRAWING!

var isPenDown = false;
var x = "black";


//EVENT LISTENERS FOR COLORS
document.querySelector(".black").addEventListener("click", color);
document.querySelector(".red").addEventListener("click", color);
document.querySelector(".green").addEventListener("click", color);
document.querySelector(".blue").addEventListener("click", color);
document.querySelector(".yellow").addEventListener("click", color);
document.querySelector(".pink").addEventListener("click", color);
document.querySelector(".orange").addEventListener("click", color);
document.querySelector(".purple").addEventListener("click", color);
document.querySelector(".white").addEventListener("click", color);

//THIS GIVES YOU THE OPTION OF COLORS
function color(obj) {
    switch (obj) {
        case "green":
            x = "green";
            break;
        case "blue":
            x = "blue";
            break;
        case "red":
            x = "red";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "orange":
            x = "orange";
            break;
        case "pink":
            x = "pink";
                break;
        case "purple":
            x = "purple";
                break;
        case "black":
            x = "black";
            break;
        case "eraser":
            x = "white";
            break;
    }
    else;
}


function penDown(evt) {
  ctx.beginPath();
  console.log("This is penDown");
  console.log(evt.layerX, evt.layerY);
  isPenDown = true;
  ctx.strokeStyle = x;
}

function penMove(evt) {
  // console.log("evt.layerX, evt.layerY");
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
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};

window.onload = function () {
    var oneMinute = 60 * 1,
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





// GAMEPLAY. Four OBJECTS/ARRAYS - one for each category:
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
// START SPEECH RECOGNITION
var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
recognition.onresult = function(event) {
        var whenYouWin = "Congratulations! You win! The correct answer is " + answerLinkedToCategory;
        var whenYouLose = "Nice try! The correct answer is " + answerLinkedToCategory;
    if (event.results.length > 0) {
        var result = event.results[event.results.length-1];
        var words = event.results[0][0].transcript.split(" ");
        var lastWord = words[words.length - 1];
        // if(result.isFinal) {
        //     console.log(result[0].transcript);
        if (lastWord === answerLinkedToCategory){
        window.location.href = "winner_video.html";
        document.getElementById("winner_rocks").innerText = whenYouWin;
        console.log(whenYouWin);

        // alert(whenYouWin);
      }
        else {
        }
    }
};
recognition.start();









function getHint() {
  choice = categoriesArray[Math.floor(Math.random() * 4) + 0];
  hint.innerHTML = categories[choice].hint;
  answerLinkedToCategory = categories[choice].answer[Math.floor(Math.random() * 4) + 0];
  answer.innerText = answerLinkedToCategory;
  }

button_hint.addEventListener("click", getHint);


//GUESSING BOX. When user hits enter, it compares with answer.
var guessBox = document.querySelector(".guess_box");

window.addEventListener("keydown", function(e)
{
   if (e.keyCode == 13) // enter key;
   {
     compareGuessWithAnswer();
   } else {
}
});


// //THIS DECLARES A WINNER
// function compareGuessWithAnswer() {
//          if(guessBox.value === answerLinkedToCategory) {
//            console.log("winner");
//            alert("you win!");
//          } else {
//            console.log("keep guessing");
//          }
//        }




//THIS IS THE FULLSCREEN VIDEO

var vid = document.getElementById("bgvid");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function() {
vid.pause();
vidFade();
});


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})
