window.addEventListener("load", function () {
    var toDoInput = document.querySelector("#toDoInput");
    var list = document.querySelector("#toDos");
    var allToDos = [];
    console.log(allToDos);
    toDoInput.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            allToDos.push({ checked: false, content: toDoInput.value });
            console.log(allToDos);
            displayList();
        }
    });
    function displayList() {
        list.innerHTML = "";
        for (var i = 0; i < allToDos.length; i++) {
            var todo = allToDos[i];
            var newToDo = document.createElement("li");
            var node = document.createTextNode(todo.content);
            newToDo.appendChild(node);
            var element = document.getElementById("toDos");
            element.appendChild(newToDo);
        }
        toDoInput.value = "";
    }
});
//# sourceMappingURL=script.js.map