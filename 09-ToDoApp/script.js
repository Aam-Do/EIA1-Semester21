window.addEventListener("load", function () {
    var toDoInput = document.querySelector("#toDoInput");
    var list = document.querySelector("#toDos");
    var allToDos = [];
    console.log(allToDos);
    toDoInput.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            var length_1 = allToDos.length;
            allToDos.push({ checked: false, content: toDoInput.value, toDoId: length_1.toString(), checkmarkId: "check" + length_1.toString(), trashId: "trash" + length_1.toString() });
            console.log(allToDos);
            displayList();
        }
    });
    function displayList() {
        list.innerHTML = "";
        var _loop_1 = function (i) {
            var todo = allToDos[i];
            var newToDo = document.createElement("li");
            var node = document.createTextNode(todo.content);
            var idToDo = document.createAttribute("id");
            var idChecked = document.createAttribute("id");
            var idTrash = document.createAttribute("id");
            idToDo.value = i.toString();
            idChecked.value = "check" + i.toString();
            idTrash.value = "trash" + i.toString();
            var checkbox = document.createElement("i");
            var checked = document.createAttribute("class");
            var trashIcon = document.createElement("i");
            var trash = document.createAttribute("class");
            trash.value = "far fa-trash-alt";
            trashIcon.setAttributeNode(trash);
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
            newToDo.appendChild(trashIcon);
            list.appendChild(newToDo);
            checkbox.addEventListener("click", function () { checkToDo(idChecked.value); });
        };
        for (var i = 0; i < allToDos.length; i++) {
            _loop_1(i);
        }
        toDoInput.value = "";
    }
    function checkToDo(id) {
        for (var i = 0; i < allToDos.length; i++) {
            var todo = allToDos[i];
            if (todo.checkmarkId == id) {
                var check = document.querySelector("#" + id);
                if (todo.checked == false) {
                    check.setAttribute("class", "fas fa-check-circle");
                    todo.checked = true;
                    console.log("heck");
                }
                else {
                    check.setAttribute("class", "far fa-circle");
                    todo.checked = false;
                    console.log("yeah");
                }
            }
        }
    }
});
//# sourceMappingURL=script.js.map