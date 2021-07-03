var pin = "1234";
var tries;
var list = [{ date: "2021 07 03", value: -7000 }, { date: "2021 06 16", value: 25 }, { date: "2021 06 24", value: 140 }, { date: "2021 07 01", value: -120 }, { date: "2021 06 19", value: 5000 }];
var current = 2421.67;
var container;
var pinInput;
window.addEventListener("load", function () {
    container = document.querySelector("#container");
    drawButtons();
});
function drawButtons() {
    tries = 3;
    container.innerHTML = "";
    var mainButton = document.createElement("button");
    var dummyButton1 = document.createElement("button");
    var dummyButton2 = document.createElement("button");
    var mainNode = document.createTextNode("Kontostand und Umsätze anzeigen");
    var dummyNode1 = document.createTextNode("...");
    var dummyNode2 = document.createTextNode("...");
    mainButton.appendChild(mainNode);
    dummyButton1.appendChild(dummyNode1);
    dummyButton2.appendChild(dummyNode2);
    container.appendChild(mainButton);
    container.appendChild(dummyButton1);
    container.appendChild(dummyButton2);
    mainButton.addEventListener("click", function () { drawPinScreen(); });
}
function drawPinScreen() {
    container.innerHTML = "<label for='pin'>Bitte geben Sie Ihre vierstellige PIN ein:</label>" + "<input type='password' name='pin' id='pin' maxlength='4' required>";
    pinInput = document.querySelector("#pin");
    pinInput.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            checkPin();
        }
    });
}
function checkPin() {
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
function drawKontostand() {
    list.sort(function (a, b) { return (a.date > b.date) ? 1 : -1; });
    container.innerHTML = "";
    var listContainer = document.createElement("ul");
    for (var i = 0; i < list.length; i++) {
        var umsatz = list[i];
        var newUmsatz = document.createElement("li");
        var date = document.createElement("p");
        var dateNode = document.createTextNode(umsatz.date);
        var value_1 = document.createElement("p");
        var valueNode = document.createTextNode((umsatz.value).toString() + "€");
        date.appendChild(dateNode);
        value_1.appendChild(valueNode);
        newUmsatz.appendChild(date);
        newUmsatz.appendChild(value_1);
        listContainer.appendChild(newUmsatz);
    }
    var kontostand = document.createElement("h2");
    var value = document.createTextNode("Kontostand vom 2021 07 03: " + current + "€");
    kontostand.appendChild(value);
    container.appendChild(listContainer);
    container.appendChild(kontostand);
}
//# sourceMappingURL=praesi.js.map