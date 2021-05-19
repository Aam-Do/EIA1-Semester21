window.addEventListener("load", function () {
    var toDoInput = document.querySelector("#toDoInput");
    toDoInput.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            var newToDo = document.createElement("p");
            var content = document.createTextNode(toDoInput.value);
            newToDo.appendChild(content);
            var element = document.getElementById("toDos");
            element.appendChild(newToDo);
        }
    });
});
//# sourceMappingURL=script.js.map