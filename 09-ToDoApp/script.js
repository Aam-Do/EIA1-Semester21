window.addEventListener("load", function () {
    var toDoInput = document.querySelector("#toDoInput");
    var list = document.querySelector("#toDos");
    var allToDos = [];
    console.log(allToDos);
    toDoInput.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            allToDos.push({ checked: false, content: toDoInput.value, number: allToDos.length });
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
            var idToDo = document.createAttribute("id");
            var idChecked = document.createAttribute("id");
            idToDo.value = i.toString();
            idChecked.value = "check" + i.toString();
            var checkbox = document.createElement("i");
            var checked = document.createAttribute("class");
            if (allToDos[i].checked == false) {
                checked.value = "far fa-circle";
                checkbox.setAttributeNode(checked);
            }
            else {
                checked.value = "fas fa-check-circle";
                checkbox.setAttributeNode(checked);
            }
            checkbox.setAttributeNode(idChecked);
            newToDo.appendChild(checkbox);
            newToDo.appendChild(node);
            newToDo.setAttributeNode(idToDo);
            list.appendChild(newToDo);
            // checkbox.addEventListener("click", function (): void {checkToDo(); });
        }
        toDoInput.value = "";
    }
    // function checkToDo(): void {
    // }
});
//# sourceMappingURL=script.js.map