console.log("There are four lights!")


var gameCard = document.getElementById("game-card");
var questionTitle = document.getElementById("question-title");
var questionDiv = document.getElementById("question-div");
var questionP = document.getElementById("question-paragraph");

//create a start button
var startButton = document.createElement("button");
startButton.setAttribute("type", "button");
startButton.setAttribute("class", "btn btn-warning");
startButton.textContent = "START";
questionDiv.appendChild(startButton);


//event listener: click on start
startButton.addEventListener("click", function () {

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
