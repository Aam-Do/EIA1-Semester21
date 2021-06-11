var allTicTacToes = [[{ free: true, x: false, o: false }, { free: false, x: true, o: false }], [{ free: true, x: false, o: false }, { free: false, x: false, o: true }]];
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
            allTicTacToes[x][y] = { free: true, x: false, o: false };
            console.log(allTicTacToes);
        }
    }
    drawField();
}
function drawField() {
    console.log("drawField");
    playField.innerHTML = "";
    infoField.innerHTML = "";
    for (var x = 0; x < allTicTacToes.length; x++) {
        for (var y = 0; y < allTicTacToes.length; y++) {
            var ticTacToe = allTicTacToes[x][y];
            var newTicTacToe = document.createElement("div");
            var idTicTacToe = document.createAttribute("id");
            idTicTacToe.value = x.toString() + y.toString();
            if (ticTacToe.free == false) {
                if (ticTacToe.x == true) {
                    // make icon when it's there lol
                }
            }
            newTicTacToe.setAttributeNode(idTicTacToe);
            playField.appendChild(newTicTacToe);
            // newTicTacToe.addEventListener("click", function (): void {clickHandler(idTicTacToe.value); });
        }
    }
}
//# sourceMappingURL=script.js.map