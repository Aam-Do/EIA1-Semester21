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
let comGame: boolean = false;
let factor: number;

window.addEventListener("load", function(): void {
    infoField = document.querySelector("#info");
    playField = document.querySelector("#field");
    drawStartScreen();
});

function drawStartScreen(): void {
    infoField.innerHTML = "<h2> Welcome to Tic-Tac-Toe! </h2> <p> Select a game mode: </p>";
    playField.innerHTML = "";
    playField.style.visibility = "hidden";
    comGame = false;

    let pvcButton: HTMLButtonElement = document.createElement("button");
    let pvpButton: HTMLButtonElement = document.createElement("button");
    let pvcNode: Node = document.createTextNode("Player vs COM");
    let pvpNode: Node = document.createTextNode("Player vs Player");

    pvcButton.appendChild(pvcNode);
    pvpButton.appendChild(pvpNode);
    infoField.appendChild(pvcButton);
    infoField.appendChild(pvpButton);
    
    pvcButton.addEventListener("click", function (): void { comGame = true; drawDifficultyScreen(); });
    pvpButton.addEventListener("click", function (): void { drawDifficultyScreen(); });
}

function drawDifficultyScreen(): void {
    infoField.innerHTML = "<h2> Welcome to Tic-Tac-Toe! </h2> <p> Select a difficulty level: </p>";
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
    let cssWidthHeight: string = 228 + 76 * difficultyId + "px";
    playField.style.width = cssWidthHeight;
    playField.style.height = cssWidthHeight;
    factor = difficultyId;
    
    drawField();
}

function drawField(): void {
    playField.innerHTML = "";
    infoField.innerHTML = "";
    playField.style.visibility = "visible";
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
            let fragment: number;
            if (factor == 0) {
                fragment = 0.9;

            }
            else if (factor == 1) {
                fragment = 0.7;
            }
            else {
                fragment = 0.53;
            }
            if ( window.innerWidth < 480 ) {
                fragment = 1;
            }
            let ticTacToeWidhHeight: string = (1 / allTicTacToes.length) * 100 - fragment + "%"; 
            newTicTacToe.style.width = ticTacToeWidhHeight;
            newTicTacToe.style.height = ticTacToeWidhHeight;
            newTicTacToe.setAttributeNode(idTicTacToe);
            playField.appendChild(newTicTacToe);
        }
    }
    let player1ScoreElement: HTMLSpanElement = document.createElement("span");
    let player1ScoreNode: Node = document.createTextNode("Player 1 Score: " + player1Score);
    let player2ScoreElement: HTMLSpanElement = document.createElement("span");
    let player2ScoreNode: Node = document.createTextNode(" | Player 2 Score: " + player2Score);
    if (comGame == true) {
        player1ScoreNode = document.createTextNode("COM Score: " + player1Score);
        player2ScoreNode =  document.createTextNode(" | Your Score: " + player2Score);
    }
    let roundCounterElement: HTMLSpanElement = document.createElement("span");
    let roundCounterNode: Node = document.createTextNode(" | Round: " + (round + 1) + "/" + allTicTacToes.length);

    player1ScoreElement.appendChild(player1ScoreNode);
    player2ScoreElement.appendChild(player2ScoreNode);
    roundCounterElement.appendChild(roundCounterNode);

    infoField.appendChild(player1ScoreElement);
    infoField.appendChild(player2ScoreElement);
    infoField.appendChild(roundCounterElement);
    
    if (player1Turn == true && comGame == true) {
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
    if (roundEnd == "win" || roundEnd == "draw") {
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
    if (freeCount == 0) {
        return("draw");
    }
}

function endRestartRound(roundEnd: string): void {
    console.log("round ended");
    if (roundEnd == "win") {
        if (player1Turn == false) {
            player1Score++;
        }
        else {
            player2Score++;
        }
    }
    round += 1;
    let difficultyIndex: number = 0;
    if (allTicTacToes.length == 4) {
        difficultyIndex = 1;
    }
    else if (allTicTacToes.length == 5) {
        difficultyIndex = 2;
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
    playField.style.width = "0px";
    playField.style.height = "0px";
    playField.style.visibility = "hidden";

    let winner: string;
    if (player1Score > player2Score) {
        winner = "Player 1 ( <i class= 'fas fa-times' ></i> ) won!";
        if (comGame == true) {
            winner = "COM ( <i class= 'fas fa-times' ></i> ) won!";
        }
    }
    else if (player2Score > player1Score) {
        winner = "Player 2 ( <i class= 'far fa-circle' ></i> ) won!";
        if (comGame == true) {
            winner = "You ( <i class= 'far fa-circle' ></i> ) won!";
        }
    }
    else {
        winner = "It's a draw!";
    }

    let winnerAnnouncement: HTMLParagraphElement = document.createElement("p");
    let restartButton: HTMLButtonElement = document.createElement("button");
    let startScreenButton: HTMLButtonElement = document.createElement("button");
    let br: HTMLBRElement = document.createElement("br");
    let restartNode: Node = document.createTextNode("Restart");
    let startScreenNode: Node = document.createTextNode("Back to Start Screen");
    let buttonIdMobile: Attr = document.createAttribute("id");
    buttonIdMobile.value = "buttonMobile";

    winnerAnnouncement.innerHTML = winner;
    infoField.appendChild(winnerAnnouncement);
    restartButton.appendChild(restartNode);
    startScreenButton.appendChild(startScreenNode);
    startScreenButton.setAttributeNode(buttonIdMobile);
    infoField.appendChild(restartButton);
    infoField.appendChild(br);
    infoField.appendChild(startScreenButton);
    
    player1Turn = true;
    player1Score = 0;
    player2Score = 0;
    round = 0;
    restartButton.addEventListener("click", function (): void {setDifficulty(allDifficulties[difficultyIndex].value, difficultyIndex); });
    startScreenButton.addEventListener("click", function (): void {drawStartScreen(); });
}