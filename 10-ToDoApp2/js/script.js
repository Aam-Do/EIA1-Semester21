var todos = [{ text: "Lorem", checked: true }, { text: "Ipsum", checked: false }, { text: "Dolor", checked: false }];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterTotalDOMElement;
var counterOpenDOMElement;
var counterDoneDOMElement;
var mic;
var artyom = new Artyom();
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterTotalDOMElement = document.querySelector("#counterTotal");
    counterOpenDOMElement = document.querySelector("#counterOpen");
    counterDoneDOMElement = document.querySelector("#counterDone");
    mic = document.querySelector("#mic");
    addButtonDOMElement.addEventListener("click", addTodo);
    document.querySelector("#Artyom").addEventListener("click", function () {
        mic.setAttribute("class", "fas fa-microphone");
        startOneCommandArtyom();
    });
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        /**
         * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen,
         * die Objekt-Instansierung ist aber übersichtlicher)
         */
        var todo = document.createElement("div");
        todo.classList.add("todo");
        /**
         * Jedes Todo besteht aus etwas Markup, also aus HTML-Elementen
         * wie der Check-Anzeige, dem ToDo-Text und dem Mülleimer
         *
         * Einfachheitshalber werden hier alle HTML-Elemente für ein ToDo
         * nicht DOM-Objekt-weise (wie oben, mit createElement), sondern als eine lange
         * HTML-Zeichenkette erstellt. An manchen Stellen der Zeichenkette wird
         * ein Wert einer Variablen benötigt (bspw. für die CSS Klasse oder für den ToDo-Text),
         * hier muss die Zeichenkette unterbrochen werden.
         */
        todo.innerHTML = "<span class='check " + todos[index].checked + "'><i class='fas fa-check'></i></span>"
            + todos[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function () {
            // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
            // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
            // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
            deleteTodo(index);
        });
        // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
        todosDOMElement.appendChild(todo);
    };
    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    for (var index = 0; index < todos.length; index++) {
        _loop_1(index);
    }
    updateCounters();
}
function updateCounters() {
    counterTotalDOMElement.innerHTML = todos.length + " in total";
    var openCount = 0;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].checked == false) {
            openCount++;
        }
    }
    counterOpenDOMElement.innerHTML = openCount + " open";
    counterDoneDOMElement.innerHTML = todos.length - openCount + " done";
}
/**
 * Ein neues ToDo wird folgendermaßen erstellt:
 */
function addTodo() {
    /**
     * Zunächst wird geprüft, ob das Input-Feld nicht leer ist
     * (ansonsten würde ein leerer ToDo-Text erstellt werden,
     * wenn man, ohne zu Tippen, den Add-Button gedrückt hätte)
     */
    if (inputDOMElement.value != "") {
        /**
         * Der Eingabe-Wert aus dem Input-Feld (.value) wird
         * als neues Element in das ToDo-Array gepusht.
         * Gleichzeitig wird in ein zweites Array, das den Checked- / Uncheck-
         * Status der ToDos abbildet, für dieses ToDo (weil selbe Stelle im Array)
         * der Status "unchecked", hier false, gepusht.
         */
        todos.unshift({ text: inputDOMElement.value, checked: false });
        // Jetzt wird der Text aus dem Eingabefeld gelöscht
        inputDOMElement.value = "";
        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
}
/**
 * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
 */
function toggleCheckState(index) {
    /**
     * Das Array, , das den Checked- / Uncheck-Status der ToDos abbildet,
     * muss an jener Stelle, an der das entsprechende ToDo steht (nämlich
     * an der übergebenen Index-Stelle) geändert werden.
     * Von checked zu unchecked bzw. von unchecked zu checked
     * Hier wird ein Boolean für den Zustand checked/unchecked genutzt,
     * der Boolean muss also von true zu false bzw. false zu true gestellt werden.
     * Ein toggle (also Welchseln zwischen zwei Zuständen) lässt sich folgendermaßen
     * kurz schreiben: wert = !wert
     * Bedeutet: der Wert soll das Gegenteil von seinem Wert annehmen.
     * Alternativ könnte man hier natürlich auch andere Schreibweisen (wie sie im
     * Kurs behandelt wurden) nutzen.
     */
    todos[index].checked = !todos[index].checked;
    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    drawListToDOM();
}
/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index) {
    /**
     * Durch "index" ist die entsprechende Stelle im Array
     * bekannt, an der das ToDo steht.
     * Jetzt muss diese Stelle beider Arrays gelöscht werden,
     * das ToDo-Text-Array und das Checked/Unchecked-Array
     */
    todos.splice(index, 1);
    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    drawListToDOM();
}
// Artyom
artyom.addCommands({
    indexes: ["erstelle Aufgabe *"],
    smart: true,
    action: function (i, wildcard) {
        console.log("Neue Aufgabe wird erstellt: " + wildcard);
        todos.unshift({ text: wildcard, checked: false });
        mic.setAttribute("class", "fas fa-microphone-slash");
        drawListToDOM();
    }
});
function startOneCommandArtyom() {
    artyom.fatality();
    setTimeout(function () {
        artyom.initialize({
            lang: "de-DE",
            continuous: false,
            listen: true,
            interimResults: true,
            debug: true
        }).then(function () {
            console.log("Ready!");
        });
    }, 250);
}
//# sourceMappingURL=script.js.map