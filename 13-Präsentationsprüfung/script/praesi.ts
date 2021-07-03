let pin: string = "1234";
let tries: number;
interface MyObject { date: string; value: number; }
let list: MyObject[] = [ {date: "2021 07 03", value: -7000}, {date: "2021 06 16", value: 25}, {date: "2021 06 24", value: 140}, {date: "2021 07 01", value: -120}, {date: "2021 06 19", value: 5000} ];
let current: number = 2421.67;
let container: HTMLBodyElement;
let pinInput: HTMLInputElement;

window.addEventListener("load", function(): void {
    container = document.querySelector("#container");
    drawButtons();
});

function drawButtons(): void {
    tries = 3;
    container.innerHTML = "";
    let mainButton: HTMLButtonElement = document.createElement("button");
    let dummyButton1: HTMLButtonElement = document.createElement("button");
    let dummyButton2: HTMLButtonElement = document.createElement("button");
    let mainNode: Node = document.createTextNode("Kontostand und Umsätze anzeigen");
    let dummyNode1: Node = document.createTextNode("...");
    let dummyNode2: Node = document.createTextNode("...");

    mainButton.appendChild(mainNode);
    dummyButton1.appendChild(dummyNode1);
    dummyButton2.appendChild(dummyNode2);

    container.appendChild(mainButton);
    container.appendChild(dummyButton1);
    container.appendChild(dummyButton2);
    
    mainButton.addEventListener("click", function (): void { drawPinScreen(); });
}

function drawPinScreen(): void {
    container.innerHTML = "<label for='pin'>Bitte geben Sie Ihre vierstellige PIN ein:</label>" + "<input type='password' name='pin' id='pin' maxlength='4' required>";
    pinInput = document.querySelector("#pin");
    pinInput.addEventListener("keydown", function (event: KeyboardEvent): void {
        if (event.keyCode == 13) {
            checkPin();
        }
    });
}

function checkPin(): void {
    if (pinInput.value == pin) {
        drawKontostand();
    }
    else if (tries == 1) {
        alert("Sie haben Ihre PIN dreimal falsch eingegeben. Sie kehren nun zum Startbildschirm zurück.");
        drawButtons();
    }
    else {
        tries -= 1;
        alert("Die eingegebene PIN war nicht korrekt. Verbleibende Versuche: " + tries);
        drawPinScreen();
    }
}

function drawKontostand(): void {
    list.sort((a, b) => (a.date > b.date) ? 1 : -1);
    container.innerHTML = "";
    let listContainer: HTMLUListElement = document.createElement("ul");

    for (let i: number = 0; i < list.length; i++) {
        let umsatz: MyObject = list[i];

        let newUmsatz: HTMLLIElement = document.createElement("li");
        let date: HTMLParagraphElement = document.createElement("p");
        let dateNode: Node = document.createTextNode(umsatz.date);
        let value: HTMLParagraphElement = document.createElement("p");
        let valueNode: Node = document.createTextNode((umsatz.value).toString() + "€");

        date.appendChild(dateNode);
        value.appendChild(valueNode);
        newUmsatz.appendChild(date);
        newUmsatz.appendChild(value);
        listContainer.appendChild(newUmsatz);
    }

    let kontostand: HTMLHeadingElement = document.createElement("h2");
    let value: Node = document.createTextNode("Kontostand vom 2021 07 03: " + current + "€");

    kontostand.appendChild(value);
    container.appendChild(listContainer);
    container.appendChild(kontostand);
}