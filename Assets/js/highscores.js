var highScoresBox = document.querySelector("#high-scores-box");
var highScoresDisplay = document.querySelector("#high-scores-display");

var highScores = [];

function renderHighScores() {

    highScoresDisplay.innerHTML = "";


    for (var i = 0; i < highScores.length; i++) {
        var score = highScores[i];

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);

        highScoresDisplay.appendChild(li);
    }
    //sort the scores in order of score.value
}

// This function is being called below and will run when the page loads.
function init() {
    // Get stored scores from localStorage
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    // If scores were retrieved from localStorage, update the scores array to it
    if (storedScores !== null) {
        highScores = storedScores;
    }

    // This is a helper function that will render scores to the DOM
    renderHighScores();
}

init()
