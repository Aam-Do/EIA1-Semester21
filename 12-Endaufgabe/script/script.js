var allTicTacToes = [];
var allDifficulties = [{ value: 3, name: "Standard" }, { value: 4, name: "Advanced" }, { value: 5, name: "Expert" }];
var player1Turn = true;
var player1Score = 0;
var player2Score = 0;
var round = 0;
var infoField;
var playField;
window.addEventListener("load", function () {
    infoField = document.querySelector("#info");
    playField = document.querySelector("#field");
    drawStartScreen();
});
function drawStartScreen() {
    infoField.innerHTML = "<p> Welcome to Tic-Tac-Toe! Select a difficulty level: </p>";
    playField.innerHTML = "";
    var _loop_1 = function (i) {
        var difficulty = allDifficulties[i];
        var newDifficultyButton = document.createElement("button");
        var node = document.createTextNode(difficulty.name);
        var idDifficultyButton = document.createAttribute("id");
        idDifficultyButton.value = (allDifficulties[i].value).toString();
        newDifficultyButton.appendChild(node);
        newDifficultyButton.setAttributeNode(idDifficultyButton);
        infoField.appendChild(newDifficultyButton);
        newDifficultyButton.addEventListener("click", function () { setDifficulty(allDifficulties[i].value, i); });
    };
    for (var i = 0; i < allDifficulties.length; i++) {
        _loop_1(i);
    }
}
function setDifficulty(difficulty, difficultyId) {
    console.log("setdifficulty");
    allTicTacToes.length = 0;
    for (var x = 0; x < difficulty; x++) {
        allTicTacToes[x] = [];
        for (var y = 0; y < difficulty; y++) {
            allTicTacToes[x][y] = { state: "free" };
            console.log(allTicTacToes);
        }
    }
    var cssWidth = 231 + 77 * difficultyId + "px";
    playField.style.width = cssWidth;
    drawField();
}
function drawField() {
    playField.innerHTML = "";
    infoField.innerHTML = "";
    for (var x = 0; x < allTicTacToes.length; x++) {
        var _loop_2 = function (y) {
            var ticTacToe = allTicTacToes[x][y];
            var newTicTacToe = document.createElement("div");
            var idTicTacToe = document.createAttribute("id");
            var symbolIcon = document.createElement("i");
            var symbolAtrr = document.createAttribute("class");
            idTicTacToe.value = x.toString() + y.toString();
            if (ticTacToe.state == "free") {
                newTicTacToe.addEventListener("click", function () { clickHandler(idTicTacToe.value); });
            }
            else {
                if (ticTacToe.state == "X") {
                    symbolAtrr.value = "fas fa-times";
                    console.log("X set");
                }
                else {
                    symbolAtrr.value = "far fa-circle";
                    console.log("O set");
                }
                symbolIcon.setAttributeNode(symbolAtrr);
                newTicTacToe.appendChild(symbolIcon);
            }
            newTicTacToe.setAttributeNode(idTicTacToe);
            playField.appendChild(newTicTacToe);
        };
        for (var y = 0; y < allTicTacToes.length; y++) {
            _loop_2(y);
        }
    }
    var player1ScoreElement = document.createElement("span");
    var player1ScoreNode = document.createTextNode("Player 1 Score: " + player1Score);
    var player2ScoreElement = document.createElement("span");
    var player2ScoreNode = document.createTextNode(" | Player 2 Score: " + player2Score);
    var roundCounterElement = document.createElement("span");
    var roundCounterNode = document.createTextNode(" | Round: " + (round + 1) + "/" + allTicTacToes.length);
    player1ScoreElement.appendChild(player1ScoreNode);
    player2ScoreElement.appendChild(player2ScoreNode);
    roundCounterElement.appendChild(roundCounterNode);
    infoField.appendChild(player1ScoreElement);
    infoField.appendChild(player2ScoreElement);
    infoField.appendChild(roundCounterElement);
}
function clickHandler(xy) {
    for (var x = 0; x < allTicTacToes.length; x++) {
        for (var y = 0; y < allTicTacToes.length; y++) {
            var ticTacToe = allTicTacToes[x][y];
            if (x.toString() + y.toString() == xy) {
                if (player1Turn == true) {
                    ticTacToe.state = "X";
                }
                else {
                    ticTacToe.state = "0";
                }
            }
        }
    }
    player1Turn = !player1Turn;
    drawField();
    var roundEnd = checkRoundEnd();
    if (roundEnd == "win") {
        endRestartRound(roundEnd);
    }
    else if (roundEnd == "draw") {
        endRestartRound(roundEnd);
    }
}
function checkRoundEnd() {
    var freeCount = 0;
    for (var x = 0; x < allTicTacToes.length; x++) {
        var win = false;
        var correctSymbols = 0;
        for (var y = 0; y < allTicTacToes.length; y++) {
            var ticTacToe = allTicTacToes[x][y];
            if (ticTacToe.state != "free") {
                if (ticTacToe.state == "X") {
                    correctSymbols++;
                }
            }
            else {
                freeCount++;
                correctSymbols = NaN;
            }
        }
        if (correctSymbols == 0 || correctSymbols == allTicTacToes.length) {
            win = true;
        }
        if (win == true) {
            return ("win");
        }
        win = false;
        correctSymbols = 0;
        for (var y = 0; y < allTicTacToes.length; y++) {
            var ticTacToe = allTicTacToes[y][x];
            if (ticTacToe.state != "free") {
                if (ticTacToe.state == "X") {
                    correctSymbols++;
                }
            }
            else {
                correctSymbols = NaN;
            }
        }
        if (correctSymbols == 0 || correctSymbols == allTicTacToes.length) {
            win = true;
        }
        if (win == true) {
            return ("win");
        }
        //     win = false;
        //     correctSymbols = 0;
        //     for (let y: number = allTicTacToes.length - 1; y > 0; y--) {
        //         let ticTacToe: TicTacToe = allTicTacToes[x][y];
        //         if (ticTacToe.state != "free") {
        //             if (ticTacToe.state == "X") {
        //                 correctSymbols++;
        //                 console.log(ticTacToe);
        //             }
        //             else {
        //                 console.log(ticTacToe);
        //             }
        //         }
        //         else {
        //             correctSymbols = NaN;
        //         }
        //     }
        //     if (correctSymbols == 0 || correctSymbols == allTicTacToes.length) {
        //         win = true;
        //     }
        //     if (win == true) {
        //         return("win");
        //     }
    }
    if (freeCount == 0) {
        return ("draw");
    }
}
function endRestartRound(roundEnd) {
    console.log("round ended");
    if (roundEnd == "win") {
        if (player1Turn == false) {
            player1Score++;
            console.log("Player 1 won");
        }
        else {
            player2Score++;
            console.log("Player 2 won");
        }
    }
    round += 1;
    var difficultyIndex = 0;
    if (allTicTacToes.length == 4) {
        difficultyIndex = 1;
        console.log("dificulty was advanced");
    }
    else if (allTicTacToes.length == 5) {
        difficultyIndex = 2;
        console.log("difficulty was expert");
    }
    if (round < allTicTacToes.length) {
        setDifficulty(allDifficulties[difficultyIndex].value, difficultyIndex);
    }
    else {
        gameOver(difficultyIndex);
    }
}
function gameOver(difficultyIndex) {
    playField.innerHTML = "";
    infoField.innerHTML = "";
    var restartButton = document.createElement("button");
    var startScreenButton = document.createElement("button");
    var restartNode = document.createTextNode("Restart");
    var startScreenNode = document.createTextNode("Back to Start Screen");
    restartButton.appendChild(restartNode);
    startScreenButton.appendChild(startScreenNode);
    infoField.appendChild(restartButton);
    infoField.appendChild(startScreenButton);
    player1Turn = true;
    player1Score = 0;
    player2Score = 0;
    round = 0;
    restartButton.addEventListener("click", function () { setDifficulty(allDifficulties[difficultyIndex].value, difficultyIndex); });
    startScreenButton.addEventListener("click", function () { drawStartScreen(); });
}
//# sourceMappingURL=script.js.map