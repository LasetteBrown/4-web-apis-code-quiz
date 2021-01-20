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

var secondsLeft = 20;

//create a timer 
function startTimer() {
    questionDiv.removeChild(startButton)
    secondsLeft = 20
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;

        //display time left somewhere on the screen
        timeRemaining.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            // sendMessage();
        }

    }, 1000);
    return secondsLeft;
}

//when start is clicked
function runGame(event) {
    // THEN a timer starts
    var time = startTimer()

    var qOne = {
        question: "What is your name?",
        choiceA: "Lancelot",
        choiceB: "King Aurthur",
        choiceC: "Sir Robin",
        choiceD: "Galihad",
<<<<<<< HEAD
        correctAnswer: "King Aurthur",
=======
        // correctAnswer: choiceB
>>>>>>> 7fd7445fd3b12cc0e0ee90b8c332ceaca3a9991f
    }

    var qTwo = {
        question: "What is your quest?",
        choiceA: "To find the Holy Grail",
        choiceB: "To fart in your general direction",
        choiceC: "To mock you a second time",
        choiceD: "To run away",
<<<<<<< HEAD
        correctAnswer: "To find the Holy Grail",
=======
        // correctAnswer: choiceA
>>>>>>> 7fd7445fd3b12cc0e0ee90b8c332ceaca3a9991f
    }

    var qThree = {
        question: "What is your favorite color?",
        choiceA: "Red",
        choiceB: "Purple",
        choiceC: "Green",
        choiceD: "Blue",
<<<<<<< HEAD
        correctAnswer: "Blue",
=======
        // correctAnswer: choiceD
>>>>>>> 7fd7445fd3b12cc0e0ee90b8c332ceaca3a9991f

    }
    var quizQuestions = [qOne, qTwo, qThree]

    var olEl = document.createElement("ol")
    var liA = document.createElement("li")
    var liB = document.createElement("li")
    var liC = document.createElement("li")
    var liD = document.createElement("li")

    olEl.setAttribute("type", "A")
    liA.setAttribute("style", "background-color:goldenrod;")
    liB.setAttribute("style", "background-color:goldenrod;")
    liC.setAttribute("style", "background-color:goldenrod;")
    liD.setAttribute("style", "background-color:goldenrod;")


    questionDiv.appendChild(olEl)
    olEl.appendChild(liA)
    olEl.appendChild(liB)
    olEl.appendChild(liC)
    olEl.appendChild(liD)

    var i = 0;

    while (i < quizQuestions.length && time > 0) {
        questionTitle.textContent = "Question " + (i + 1);
        questionP.textContent = quizQuestions[i].question;
        liA.textContent = quizQuestions[i].choiceA
        liB.textContent = quizQuestions[i].choiceB
        liC.textContent = quizQuestions[i].choiceC
        liD.textContent = quizQuestions[i].choiceD
<<<<<<< HEAD
        // questionDiv.addEventListener("click", function () {
        //     if (event.matches("li")) {
        //         console.log(event)
        //     }
        // })
=======

>>>>>>> 7fd7445fd3b12cc0e0ee90b8c332ceaca3a9991f
        i++
    }
}



//event listener: click on start
startButton.addEventListener("click", runGame)


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
