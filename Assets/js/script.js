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

var secondsLeft = 200;

var score = 0;
var allScores = []
// localStorage.getItem("scores", JSON.parse(allScores))


function storeScores() {

    var initials = window.prompt("What are your initials?")

    var userScore = {
        initials: initials,
        score: score,
    }

    allScores.push(userScore)

    localStorage.setItem("scores", JSON.stringify(allScores));

    if (initials = true) {
        window.location.href = "highscores.html"
    }
}

//create a timer 
function startTimer() {
    questionDiv.removeChild(startButton)
    secondsLeft = 200
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;

        //display time left somewhere on the screen
        timeRemaining.textContent = secondsLeft;

        if (secondsLeft < 1) {
            // Stops execution of action at set interval
            timeRemaining.textContent = "0";
            clearInterval(timerInterval);
            storeScores()
        }

    }, 1000);
    return secondsLeft;
};

//when start is clicked
function runGame() {
    // THEN a timer starts
    startTimer()

    var qOne = {
        question: "What is your name?",
        choiceA: "Lancelot",
        choiceB: "King Aurthur",
        choiceC: "Sir Robin",
        choiceD: "Galihad",
        correctAnswer: "King Aurthur",
    }

    var qTwo = {
        question: "What is your quest?",
        choiceA: "To find the Holy Grail",
        choiceB: "To fart in your general direction",
        choiceC: "To mock you a second time",
        choiceD: "To run away",
        correctAnswer: "To find the Holy Grail",
    }

    var qThree = {
        question: "What is your favorite color?",
        choiceA: "Red",
        choiceB: "Purple",
        choiceC: "Green",
        choiceD: "Blue",
        correctAnswer: "Blue",

    }
    var quizQuestions = [qOne, qTwo, qThree]

    var i = 0


    var olEl = document.createElement("ol")
    var liA = document.createElement("li")
    var liB = document.createElement("li")
    var liC = document.createElement("li")
    var liD = document.createElement("li")
    var feedback = document.createElement("p")

    olEl.setAttribute("type", "A")
    liA.setAttribute("style", "background-color:goldenrod;")
    liB.setAttribute("style", "background-color:goldenrod;")
    liC.setAttribute("style", "background-color:goldenrod;")
    liD.setAttribute("style", "background-color:goldenrod;")
    feedback.setAttribute("style", "color:darkgray")

    questionDiv.appendChild(olEl)
    olEl.appendChild(liA)
    olEl.appendChild(liB)
    olEl.appendChild(liC)
    olEl.appendChild(liD)
    questionDiv.appendChild(feedback)

    function askQuestion(i) {
        if (i < quizQuestions.length) {
            questionTitle.textContent = "Question " + (i + 1);
            questionP.textContent = quizQuestions[i].question;
            liA.textContent = quizQuestions[i].choiceA
            liB.textContent = quizQuestions[i].choiceB
            liC.textContent = quizQuestions[i].choiceC
            liD.textContent = quizQuestions[i].choiceD

            liA.addEventListener("click", function () {
                if (quizQuestions[i].choiceA === quizQuestions[i].correctAnswer) {
                    feedback.textContent = "Correct";
                    score++;
                    i++
                    return askQuestion(i);
                } else {
                    feedback.textContent = "Wrong";
                    secondsLeft = secondsLeft - 10;
                    i++
                    return askQuestion(i);
                }
            })
            liB.addEventListener("click", function () {
                if (quizQuestions[i].choiceB === quizQuestions[i].correctAnswer) {
                    feedback.textContent = "Correct"
                    score++
                    i++
                    return askQuestion(i);

                } else {
                    feedback.textContent = "Wrong"
                    secondsLeft = secondsLeft - 10
                    i++
                    return askQuestion(i);

                }
            })
            liC.addEventListener("click", function () {
                if (quizQuestions[i].choiceC === quizQuestions[i].correctAnswer) {
                    feedback.textContent = "Correct"
                    score++
                    i++
                    return askQuestion(i);

                } else {
                    feedback.textContent = "Wrong"
                    secondsLeft = secondsLeft - 10
                    i++
                    return askQuestion(i);

                }
            })
            liD.addEventListener("click", function () {
                if (quizQuestions[i].choiceD === quizQuestions[i].correctAnswer) {
                    feedback.textContent = "Correct"
                    score++
                    i++
                    return askQuestion(i);

                } else {
                    feedback.textContent = "Wrong"
                    secondsLeft = secondsLeft - 10
                    i++
                    return askQuestion(i);

                }
            })

        }
        else {
            console.log("game over")

        }
    }
    askQuestion(i)
};



//event listener: click on start
startButton.addEventListener("click", runGame);


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
