//making sure my JavaScript is linked properly
console.log("There are four lights!")

// variables that link to areas of my html
var questionTitle = document.getElementById("question-title");
var questionP = document.getElementById("question-paragraph");
var answersDiv = document.getElementById("answers-div");
var feedbackP = document.getElementById("feedback-paragraph");
var timeRemaining = document.getElementById("time-remaining")

//global variables
var secondsLeft = 90;
var score = 0;

var allScores = [];
allScores = JSON.parse(localStorage.getItem("scores"));
console.log(allScores)

//create a start button
var startButton = document.createElement("button");
startButton.setAttribute("type", "button");
startButton.setAttribute("class", "btn btn-warning");
startButton.textContent = "START";
answersDiv.appendChild(startButton);

// a function for the end of the game: collects initials, stores score, and redirects
function storeScores() {
    //asking them for their initials
    var initials = window.prompt("What are your initials?");

    //make sure they have entered initials
    if (initials === null) {
        var confirmCancel = window.confirm("Are you sure? Your initials will be recorded with your score on the High Scores page. Click 'OK' to enter your initials");
        if (confirmCancel === true) {
            return storeScores()
        } else {
            initials = "anonymous"
        }


    };

    //if they have entered initials
    var userScore = {
        initials: initials,
        score: score,
    };

    //push their score into the allscores array
    allScores.push(userScore);

    //store the array in local storage
    window.localStorage.setItem("scores", JSON.stringify(allScores));

    //and redirect to the high scores page
    window.location.href = "highscores.html"

};

//timer function 
function startTimer() {
    answersDiv.removeChild(startButton);
    secondsLeft = 90;
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;

        //display time left somewhere on the screen
        timeRemaining.textContent = secondsLeft;

        if (secondsLeft < 1) {
            // Stops execution of action at end of game
            timeRemaining.textContent = "0";
            clearInterval(timerInterval);
            alert("GAME OVER: Great job! you scored " + score + "!")

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
        question: "What does HTML stand for?",
        choices: ["Hyper Text Making Languages",
            "Holding Text and Markup Languages",
            "Hyper Text Markup Language",
            "How To Make Lasagna"],
        correctAnswer: "Hyper Text Markup Language",
    };
    var qTwo = {
        question: "Which element tag is used to create a link on a webpage?",
        choices: ["<button>",
            "<link>",
            "<src>",
            "<a>"],
        correctAnswer: "&lt;a&gt;",
    };
    var qThree = {
        question: "What does the <head> tag do?",
        choices: ["creates a header for the page",
            "creates a nav bar on the page",
            "holds meta-data for the page",
            "holds content for the page"],
        correctAnswer: "holds meta-data for the page",

    };
    var qFour = {
        question: "Which creates the largest heading?",
        choices: ["<h4>",
            "<h1>",
            "<header>",
            "<head>"],
        correctAnswer: "&lt;h1&gt;",

    };
    var qFive = {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheet",
            "Creative Style Sheet",
            "Colorful Style Syntax",
            "Cascading Style Solutions"],
        correctAnswer: "Cascading Style Sheet",

    };
    var qSix = {
        question: "Which character allows a CSS stylesheet to select an id?",
        choices: [".",
            "#",
            "$",
            "*"],
        correctAnswer: "#",

    };
    var qSeven = {
        question: "In CSS, Which is the correct syntax?",
        choices: ["body: color=green;",
            "{“body”, “color:green”}",
            "body = color:green;",
            "body {color:green;}"],
        correctAnswer: "body {color:green;}",

    };
    var qEight = {
        question: "How is a CSS stylesheet linked in html?",
        choices: ["<a href=style.css>",
            "<link rel=”stylesheet” href=style.css>",
            "<style src=”style.css”>",
            "<stylesheet>style.css</stylesheet>"],
        correctAnswer: "&lt;link rel=”stylesheet” href=style.css&gt;",
    };
    var qNine = {
        question: "In JavaScript, what is the correct syntax for creating a function?",
        choices: ["function myFunction()",
            "function = myfunction()",
            "function: myFunction()",
            "function “myFunction”()"],
        correctAnswer: "function myFunction()",

    };
    var qTen = {
        question: "In JavaScript, what does “var” do?",
        choices: ["gives the variance property of an object",
            "declares a variable",
            "calls a function",
            "verifies a function"],
        correctAnswer: "declares a variable",

    };
    var qEleven = {
        question: "Which is the correct way to start a for loop?",
        choices: ["for (i=0; i<10; i++)",
            "for(i= 1 to 5)",
            "for (array.length)",
            "for (array[i])"],
        correctAnswer: "for (i=0; i&lt;10; i++)",

    };
    var qTwelve = {
        question: "In JavaScript, which character is used to create an array?",
        choices: ["{ }",
            "< >",
            "[ ]",
            "( )"],
        correctAnswer: "[ ]",

    };

    //place all questions into an array
    var quizQuestions = [qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight, qNine, qTen, qEleven, qTwelve];
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
            olEl.setAttribute("style", "background-color:goldenrod; padding:10px; padding-left:20px;")
            olEl.setAttribute("type", "A");
            answersDiv.appendChild(olEl);

            //a list item is created for each choice
            for (var i = 0; i < quizQuestions[currentQuestion].choices.length; i++) {

                var liEl = document.createElement("li");
                liEl.setAttribute("style", "color:black; background-color:cornsilk; padding:5px; margin:5px;");
                liEl.setAttribute("class", "hover-overlay");
                liEl.textContent = quizQuestions[currentQuestion].choices[i];
                olEl.appendChild(liEl);

            }

            //event listener for user selection
            olEl.addEventListener("click", function (event) {

                console.log(event.target.innerHTML)
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

        };

    };
    //call the function with the first question
    askQuestion(currentQuestion);
};



//event listener: click on start runs the game
startButton.addEventListener("click", runGame);


