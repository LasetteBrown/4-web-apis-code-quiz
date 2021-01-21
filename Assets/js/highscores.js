var highScoresBox = document.querySelector("#high-scores-box");
var highScoresDisplay = document.getElementById("high-scores-display");

var scoresOlEl = document.createElement("ol")

highScoresDisplay.appendChild(scoresOlEl)

var highScores = [];

console.log(highScores)

function renderHighScores() {

    // highScoresDisplay.innerHTML = "";


    for (var i = 0; i < highScores.length; i++) {
        var score = highScores[i];

        var li = document.createElement("li");
        li.setAttribute("style", "                 ")
        li.textContent = score.initials + " " + score.score;
        li.setAttribute("data-index", i);

        scoresOlEl.appendChild(li)
            ;
    }
    //sort the scores in order of score.value
}

// This function is being called below and will run when the page loads.
function init() {
    // Get stored scores from localStorage
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    console.log(storedScores)
    // If scores were retrieved from localStorage, update the scores array to it
    if (storedScores !== null) {
        highScores = highScores.concat(storedScores);
        console.log(highScores)
    }

    // This is a helper function that will render scores to the DOM
    renderHighScores();
}

init()
