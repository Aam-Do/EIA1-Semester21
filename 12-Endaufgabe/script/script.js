var allTicTacToes = [];
var allDifficulties = [{ value: 3, name: "Standard" }, { value: 4, name: "Advanced" }, { value: 5, name: "Expert" }];
var player1Turn = false;
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
        newDifficultyButton.addEventListener("click", function () { setDifficulty(allDifficulties[i].value); });
    };
    for (var i = 0; i < allDifficulties.length; i++) {
        _loop_1(i);
    }
}
function setDifficulty(difficulty) {
    allTicTacToes.length = 0;
    for (var x = 0; x < difficulty; x++) {
        allTicTacToes[x] = [];
        for (var y = 0; y < difficulty; y++) {
            allTicTacToes[x][y] = { free: true, x: false };
            console.log(allTicTacToes);
        }
    }
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
            if (ticTacToe.free == false) {
                if (ticTacToe.x == true) {
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
            else {
                newTicTacToe.addEventListener("click", function () { clickHandler(idTicTacToe.value); });
            }
            newTicTacToe.setAttributeNode(idTicTacToe);
            playField.appendChild(newTicTacToe);
        };
        for (var y = 0; y < allTicTacToes.length; y++) {
            _loop_2(y);
        }
    }
}
function clickHandler(xy) {
    for (var x = 0; x < allTicTacToes.length; x++) {
        for (var y = 0; y < allTicTacToes.length; y++) {
            var ticTacToe = allTicTacToes[x][y];
            if (x.toString() + y.toString() == xy) {
                if (player1Turn == false) {
                    ticTacToe.x = true;
                }
                ticTacToe.free = false;
            }
        }
    }
    player1Turn = !player1Turn;
    drawField();
    var roundWon = checkRoundEnd();
    if (roundWon == true) {
        endRestartRound();
    }
}
function checkRoundEnd() {
    for (var x = 0; x < allTicTacToes.length; x++) {
        var win = false;
        var correctSymbols = 0;
        for (var y = 0; y < allTicTacToes.length; y++) {
            var ticTacToe = allTicTacToes[x][y];
            if (ticTacToe.free == false) {
                if (ticTacToe.x == true) {
                    correctSymbols += 1;
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
            return (win);
        }
    }
    for (var y = 0; y < allTicTacToes.length; y++) {
        var win = false;
        var correctSymbols = 0;
        for (var x = 0; x < allTicTacToes.length; x++) {
            var ticTacToe = allTicTacToes[x][y];
            if (ticTacToe.free == false) {
                if (ticTacToe.x == true) {
                    correctSymbols += 1;
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
            return (win);
        }
    }
    // for (let x: number = 0; x < allTicTacToes.length; x++) {
    //     let win: boolean = false;
    //     let correctSymbols: number = 0;
    //     for (let y: number = allTicTacToes.length; y > 0; y--) {
    //         let ticTacToe: TicTacToe = allTicTacToes[x][y - 1];
    //         if (ticTacToe.free == false) {
    //             if (ticTacToe.x == true) {
    //                 correctSymbols += 1;
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
    //     console.log(correctSymbols);
    //     if (correctSymbols == 0 || correctSymbols == allTicTacToes.length) {
    //         win = true;
    //     }
    //     if (win == true) {
    //         return(win);
    //     }
    // }
}
function endRestartRound() {
    console.log("someone won");
}
//# sourceMappingURL=script.js.map