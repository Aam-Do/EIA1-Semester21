interface TicTacToe { free: boolean; x: boolean; }
interface Difficulty { value: number; name: string; }
let allTicTacToes: TicTacToe[][] = [];
let allDifficulties: Difficulty[] = [{value: 3, name: "Standard"}, {value: 4, name: "Advanced"}, {value: 5, name: "Expert"}];
let player1Turn: boolean = false;
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
        
        newDifficultyButton.addEventListener("click", function (): void {setDifficulty(allDifficulties[i].value); });
    }
}

function setDifficulty(difficulty: number): void {
    allTicTacToes.length = 0;
    for ( let x: number = 0; x < difficulty; x++) {
        allTicTacToes[x] = [];
        for (let y: number = 0; y < difficulty; y++) {
            allTicTacToes[x][y] = {free: true, x: false};
            console.log(allTicTacToes);
        }
    }
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
                newTicTacToe.addEventListener("click", function (): void {clickHandler(idTicTacToe.value); });
            }
            
            newTicTacToe.setAttributeNode(idTicTacToe);

            playField.appendChild(newTicTacToe);
        }
    }
}

function clickHandler(xy: string): void {
    for (let x: number = 0; x < allTicTacToes.length; x++) {
        for (let y: number = 0; y < allTicTacToes.length; y++) {
            let ticTacToe: TicTacToe = allTicTacToes[x][y];
            if (x.toString() +  y.toString() == xy) {
                if (player1Turn == false) {
                    ticTacToe.x = true;
                }
                ticTacToe.free = false;
            }
        }
    }
    player1Turn = !player1Turn;
    drawField();
    let roundWon: boolean = checkRoundEnd();
    if (roundWon == true) {
        endRestartRound();
    }
}
function checkRoundEnd(): boolean {
    for (let x: number = 0; x < allTicTacToes.length; x++) {
        let win: boolean = false;
        let correctSymbols: number = 0;
        for (let y: number = 0; y < allTicTacToes.length; y++) {
            let ticTacToe: TicTacToe = allTicTacToes[x][y];
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
            return(win);
        }
    }
    for (let y: number = 0; y < allTicTacToes.length; y++) {
        let win: boolean = false;
        let correctSymbols: number = 0;
        for (let x: number = 0; x < allTicTacToes.length; x++) {
            let ticTacToe: TicTacToe = allTicTacToes[x][y];
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
            return(win);
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
function endRestartRound(): void {
    console.log("someone won");
}