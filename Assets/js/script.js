console.log("There are four lights!")


var gameCard = document.getElementById("game-card");
var questionTitle = document.getElementById("question-title");
var questionDiv = document.getElementById("question-div");
var questionP = document.getElementById("question-paragraph");
var timeRemaining = document.getElementById("time-remaining")

//create a start button
var startButton = document.createElement("button");
startButton.setAttribute("type", "button");
startButton.setAttribute("class", "btn btn-warning");
startButton.textContent = "START";
questionDiv.appendChild(startButton);

//create a timer 
var secondsLeft = 20;

function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeRemaining.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            // sendMessage();
        }

    }, 1000);
}
//event listener: click on start
startButton.addEventListener("click", function () {
    startTimer()

})


//when start is clicked
// THEN a timer starts : setinterval
    //display time left somewhere on the screen
// and I am presented with a question (for loop?): 
    // list of questions, multiple choice answers, one of which is correct answer (in an array?)
    // event listener?: select a multiple choice option
    //compare selected answer to actual answer
    //if selected === actual{mark as correct}
    //if selected != actual {mark as wrong AND 
    //subtract time from timer}
//repeat for loop

// WHEN all questions are answered 
//or the timer reaches 0
// THEN the game is over: stop game and display score
    //prompt for initials
    //save initials into local browser
    //display high scores screen with initials and score
