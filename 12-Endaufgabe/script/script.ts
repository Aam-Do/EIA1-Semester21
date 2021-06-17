interface TicTacToe { state: string; }
interface Difficulty { value: number; name: string; }
let allTicTacToes: TicTacToe[][] = [];
let allDifficulties: Difficulty[] = [{value: 3, name: "Standard"}, {value: 4, name: "Advanced"}, {value: 5, name: "Expert"}];
let player1Turn: boolean = true;
let player1Score: number = 0;
let player2Score: number = 0;
let round: number = 0;
let infoField: HTMLElement;
let playField: HTMLElement;

window.addEventListener("load", function(): void {
    infoField = document.querySelector("#info");
    playField = document.querySelector("#field");
    drawStartScreen();
});

function drawStartScreen(): void {
    infoField.innerHTML = "<p> Welcome to Tic-Tac-Toe! Select a difficulty level: </p>";
    playField.innerHTML = "";

    for (let i: number = 0; i < allDifficulties.length; i++) {
        let difficulty: Difficulty = allDifficulties[i];

        let newDifficultyButton: HTMLButtonElement = document.createElement("button");
        let node: Node = document.createTextNode(difficulty.name);
        let idDifficultyButton: Attr = document.createAttribute("id");

        idDifficultyButton.value = (allDifficulties[i].value).toString();
      
        newDifficultyButton.appendChild(node);
        newDifficultyButton.setAttributeNode(idDifficultyButton);

        infoField.appendChild(newDifficultyButton);
        
        newDifficultyButton.addEventListener("click", function (): void {setDifficulty(allDifficulties[i].value, i); });
    }
}

function setDifficulty(difficulty: number, difficultyId: number): void {
    console.log("setdifficulty");
    allTicTacToes.length = 0;
    for ( let x: number = 0; x < difficulty; x++) {
        allTicTacToes[x] = [];
        for (let y: number = 0; y < difficulty; y++) {
            allTicTacToes[x][y] = {state: "free"};
            console.log(allTicTacToes);
        }
    }
    let cssWidth: string = 231 + 77 * difficultyId + "px";
    playField.style.width = cssWidth;
    drawField();
}

function drawField(): void {
    playField.innerHTML = "";
    infoField.innerHTML = "";
    for ( let x: number = 0; x < allTicTacToes.length; x++) {
        for (let y: number = 0; y < allTicTacToes.length; y++) {
            let ticTacToe: TicTacToe = allTicTacToes[x][y];

            let newTicTacToe: HTMLDivElement = document.createElement("div");
            let idTicTacToe: Attr = document.createAttribute("id");
            let symbolIcon: HTMLElement = document.createElement("i");
            let symbolAtrr: Attr = document.createAttribute("class");

            idTicTacToe.value = x.toString() +  y.toString();

            if (ticTacToe.state == "free") {
                newTicTacToe.addEventListener("click", function (): void {clickHandler(idTicTacToe.value); });
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
        }
    }
    let player1ScoreElement: HTMLSpanElement = document.createElement("span");
    let player1ScoreNode: Node = document.createTextNode("Player 1 Score: " + player1Score);
    let player2ScoreElement: HTMLSpanElement = document.createElement("span");
    let player2ScoreNode: Node = document.createTextNode(" | Player 2 Score: " + player2Score);
    let roundCounterElement: HTMLSpanElement = document.createElement("span");
    let roundCounterNode: Node = document.createTextNode(" | Round: " + (round + 1) + "/" + allTicTacToes.length);

    player1ScoreElement.appendChild(player1ScoreNode);
    player2ScoreElement.appendChild(player2ScoreNode);
    roundCounterElement.appendChild(roundCounterNode);

    infoField.appendChild(player1ScoreElement);
    infoField.appendChild(player2ScoreElement);
    infoField.appendChild(roundCounterElement);
    
    if (player1Turn == true) {
        comTurn();
    }
}

function comTurn(): void {
    setTimeout(function (): void {
        while (player1Turn == true) {
            var random1: number = Math.floor(Math.random() * allTicTacToes.length);
            var random2: number = Math.floor(Math.random() * allTicTacToes.length);
            let randomTicTacToe: TicTacToe = allTicTacToes[random1][random2];
            if (randomTicTacToe.state == "free") {
                break;
            }
        }
        clickHandler(random1.toString() + random2.toString());
    },         200);
}

function clickHandler(xy: string): void {
    for (let x: number = 0; x < allTicTacToes.length; x++) {
        for (let y: number = 0; y < allTicTacToes.length; y++) {
            let ticTacToe: TicTacToe = allTicTacToes[x][y];
            if (x.toString() +  y.toString() == xy) {
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
    let roundEnd: string = checkRoundEnd();
    if (roundEnd == "win") {
        endRestartRound(roundEnd);
    }
    else if (roundEnd == "draw") {
        endRestartRound(roundEnd);
    }
    else {
        drawField();
    }
}

function checkRoundEnd(): string {
    let freeCount: number = 0;
    for (let x: number = 0; x < allTicTacToes.length; x++) {
        let win: boolean = false;
        let correctSymbols: number = 0;
        for (let y: number = 0; y < allTicTacToes.length; y++) {
            let ticTacToe: TicTacToe = allTicTacToes[x][y];
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
            return("win");
        }
        win = false;
        correctSymbols = 0;
        for (let y: number = 0; y < allTicTacToes.length; y++) {
            let ticTacToe: TicTacToe = allTicTacToes[y][x];
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
            return("win");
        }
    }
    if (freeCount == 0) {
        return("draw");
    }
    let win: boolean = false;
    let correctSymbols: number = 0;
    for (let x: number = 0; x < allTicTacToes.length; x++) {
        let ticTacToe: TicTacToe = allTicTacToes[x][x];
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
        return("win");
    }
    win = false;
    correctSymbols = 0;
    for (let x: number = 0; x < allTicTacToes.length; x++) {
        let ticTacToe: TicTacToe = allTicTacToes[x][allTicTacToes.length - 1 - x];
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
        return("win");
    }
}

function endRestartRound(roundEnd: string): void {
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
    let difficultyIndex: number = 0;
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

function gameOver(difficultyIndex: number): void {
    playField.innerHTML = "";
    infoField.innerHTML = "";

    let winner: string;
    if (player1Score > player2Score) {
        winner = " Player 1 won!";
    }
    else if (player2Score > player1Score) {
        winner = "Player 2 won!";
    }
    else {
        winner = "It's a draw!";
    }

    let winnerAnnouncement: HTMLSpanElement = document.createElement("span");
    let announcementNode: Node = document.createTextNode(winner);
    let restartButton: HTMLButtonElement = document.createElement("button");
    let startScreenButton: HTMLButtonElement = document.createElement("button");
    let restartNode: Node = document.createTextNode("Restart");
    let startScreenNode: Node = document.createTextNode("Back to Start Screen");

    winnerAnnouncement.appendChild(announcementNode);
    infoField.appendChild(winnerAnnouncement);
    restartButton.appendChild(restartNode);
    startScreenButton.appendChild(startScreenNode);
    infoField.appendChild(restartButton);
    infoField.appendChild(startScreenButton);
    
    player1Turn = true;
    player1Score = 0;
    player2Score = 0;
    round = 0;
    restartButton.addEventListener("click", function (): void {setDifficulty(allDifficulties[difficultyIndex].value, difficultyIndex); });
    startScreenButton.addEventListener("click", function (): void {drawStartScreen(); });
}