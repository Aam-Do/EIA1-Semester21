interface TicTacToe { free: boolean; x: boolean; o: boolean; }
interface Difficulty { value: number; name: string; }
let alltictactoes: TicTacToe[][] = [[{free: true, x: false, o: false}, {free: false, x: true, o: false}], [{free: true, x: false, o: false}, {free: false, x: false, o: true}]];
let allDifficulties: Difficulty[] = [{value: 3, name: "Standard"}, {value: 4, name: "Advanced"}, {value: 5, name: "Expert"}];
let player1Turn: boolean = false;
let player1Score: number = 0;
let player2Score: number = 0;
let round: number = 0;
let infofield: HTMLElement;
let playfield: HTMLElement;

window.addEventListener("load", function(): void {
    infofield = document.querySelector("#start/end");
    playfield = document.querySelector("#field");
    drawStartScreen();
});

function drawStartScreen(): void {
    infofield.innerHTML = "";
    playfield.innerHTML = "";

    for (let i: number = 0; i < allDifficulties.length; i++) {
        let difficulty: Difficulty = allDifficulties[i];

        let newDifficultyButton: HTMLButtonElement = document.createElement("button");
        let node: Node = document.createTextNode(difficulty.name);
        let idDifficultyButton: Attr = document.createAttribute("id");

        idDifficultyButton.value = i.toString();
      
        newDifficultyButton.appendChild(node);
        newDifficultyButton.setAttributeNode(idDifficultyButton);

        infofield.appendChild(newDifficultyButton);
        
    }
}