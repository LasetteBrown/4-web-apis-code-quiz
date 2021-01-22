//variables that grab areas of the DOM
var highScoresBox = document.querySelector("#high-scores-box");
var highScoresDisplay = document.getElementById("high-scores-display");
//create a place for the scores to go
var scoresOlEl = document.createElement("ol")
highScoresDisplay.appendChild(scoresOlEl)

//a global array to hold all the scores
var highScores = [];

//this function displays the scores on the page
function renderHighScores(sortedScores) {
    //for every score in the array...
    for (var i = 0; i < sortedScores.length; i++) {
        var score = sortedScores[i];
        //...create a list item
        var li = document.createElement("li");
        li.setAttribute("style", "font-weight:bold; color:rgb(20, 0, 2); padding:3px;")
        li.textContent = score.initials + "      " + score.score;
        li.setAttribute("data-index", i);
        //and add it to the list
        scoresOlEl.appendChild(li)
            ;
    }

}

// This function is being called below and will run when the page loads.
function init() {
    // Get stored scores from localStorage
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    // If scores were retrieved from localStorage, update the scores array to it
    if (storedScores !== null) {
        highScores = highScores.concat(storedScores);
        //sort the scores in order of score.value
        var sortedScores = highScores.sort(function (a, b) {
            return b.score - a.score;
        });
    }

    // This is a helper function that will render scores to the DOM
    renderHighScores(sortedScores);
}

//this function gets called as soon as the page loads.
init()
