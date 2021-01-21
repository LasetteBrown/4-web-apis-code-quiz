//making sure my JavaScript is linked properly
console.log("There are four lights!")

// variables that link to areas of my html
var questionTitle = document.getElementById("question-title");
var questionP = document.getElementById("question-paragraph");
var answersDiv = document.getElementById("answers-div");
var feedbackP = document.getElementById("feedback-paragraph");
var timeRemaining = document.getElementById("time-remaining")

//global variables
var secondsLeft = 300;
var score = 0;
var allScores = [];

//create a start button
var startButton = document.createElement("button");
startButton.setAttribute("type", "button");
startButton.setAttribute("class", "btn btn-warning");
startButton.textContent = "START";
answersDiv.appendChild(startButton);

// a function for the end of the game: collects initials, stores score, and redirects
function storeScores() {
    //telling the user that the game is over and asking them for their initials
    var initials = window.prompt("What are your initials?")

    //make sure they have entered initials
    if (initials === null) {
        alert("Your initials will be used to record your score and rank. Please enter your initials.")
        return storeScores()

        //if they have entered initials
    } else {
        //create an object to store their score and initials
        var userScore = {
            initials: initials,
            score: score,
        };

        //push their score into the allscores array
        allScores.push(userScore);

        //store the array in local storage
        localStorage.setItem("scores", JSON.stringify(allScores));

        //and redirect to the high scores page
        window.location.href = "highscores.html"
    }
};

//timer function 
function startTimer() {
    answersDiv.removeChild(startButton);
    secondsLeft = 300;
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;

        //display time left somewhere on the screen
        timeRemaining.textContent = secondsLeft;

        if (secondsLeft < 1) {
            // Stops execution of action at end of game
            timeRemaining.textContent = "0";
            clearInterval(timerInterval);
            storeScores();
        };

    }, 1000);
    return secondsLeft;
};

//when start is clicked
function runGame() {
    // THEN a timer starts
    startTimer();

    //store each question into an object variable
    var qOne = {
        question: "What is your name?",
        choices: ["Lancelot",
            "King Aurthur",
            "Sir Robin",
            "Galihad"],
        correctAnswer: "King Aurthur",
    };
    var qTwo = {
        question: "What is your quest?",
        choices: ["To find the Holy Grail",
            "To fart in your general direction",
            "To mock you a second time",
            "To run away"],
        correctAnswer: "To find the Holy Grail",
    };
    var qThree = {
        question: "What is your favorite color?",
        choices: ["Red",
            "Purple",
            "Green",
            "Blue"],
        correctAnswer: "Blue",

    };

    //place all questions into an array
    var quizQuestions = [qOne, qTwo, qThree];
    //a variable for indexing the array
    var currentQuestion = 0;

    //displays question 
    function askQuestion(currentQuestion) {
        if (currentQuestion < quizQuestions.length) {

            //clears previously input information
            answersDiv.innerHTML = "";

            //question number is displayed
            questionTitle.textContent = "Question " + (currentQuestion + 1);

            //question is displayed
            questionP.textContent = quizQuestions[currentQuestion].question;


            //elements created to show choices
            var olEl = document.createElement("ol");
            olEl.setAttribute("type", "A");
            answersDiv.appendChild(olEl);

            //a list item is created for each choice
            for (var i = 0; i < quizQuestions[currentQuestion].choices.length; i++) {

                var liEl = document.createElement("li");
                liEl.setAttribute("style", "background-color:goldenrod; padding:5px; margin:5px;");
                liEl.setAttribute("class", "hover-overlay");
                liEl.textContent = quizQuestions[currentQuestion].choices[i];
                olEl.appendChild(liEl);

            }

            //event listener for user selection
            olEl.addEventListener("click", function (event) {

                //if the user selection matches the correct answer
                if (event.target.innerHTML === quizQuestions[currentQuestion].correctAnswer) {
                    //tells the user they got it right
                    feedbackP.textContent = "Correct";
                    //increases the score
                    score++;
                    //increases the question index
                    currentQuestion++;
                    //runs the function again with the next question
                    return askQuestion(currentQuestion);
                    //if the user selection does not match the correct answer
                } else {
                    //tells the user they were wrong
                    feedbackP.textContent = "Wrong";
                    //subtracts time from their timer
                    secondsLeft = secondsLeft - 10;
                    //increases the score index
                    currentQuestion++;
                    //runs the function again with the next question
                    return askQuestion(currentQuestion);
                };
            });
            //once there are no more questions left
        } else {
            //ends the game
            secondsLeft = 0
            alert("GAME OVER: Great job! you scored " + score + "!")

        };

    };
    //call the function with the first question
    askQuestion(currentQuestion);
};



//event listener: click on start
startButton.addEventListener("click", runGame);


