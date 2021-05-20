window.addEventListener("load", function (): void {

    const toDoInput: HTMLInputElement = document.querySelector("#toDoInput");
    const list: HTMLUListElement = document.querySelector("#toDos");

    interface ToDo { checked: boolean; content: string; toDoId: string; checkmarkId: string; trashId: string; }
    let allToDos: ToDo[] = [];

    console.log(allToDos);

    toDoInput.addEventListener("keydown", function (event: KeyboardEvent): void {
        if (event.keyCode == 13) {

            let length: number = allToDos.length;
            allToDos.push({checked: false, content: toDoInput.value, toDoId: length.toString(), checkmarkId: "check" + length.toString(), trashId: "trash" + length.toString()});
            console.log(allToDos);

            displayList();

        }
    });
        
    function displayList(): void {
        list.innerHTML = "";
        for (let i: number = 0; i < allToDos.length; i++) {
            let todo: ToDo = allToDos[i];

            let newToDo: HTMLLIElement = document.createElement("li");
            let node: Node = document.createTextNode(todo.content);

            let idToDo: Attr = document.createAttribute("id");
            let idChecked: Attr = document.createAttribute("id");
            let idTrash: Attr = document.createAttribute("id");
            idToDo.value = i.toString();
            idChecked.value = "check" + i.toString();
            idTrash.value = "trash" + i.toString();

            let checkbox: HTMLElement = document.createElement("i");
            let checked: Attr = document.createAttribute("class");

            let trashIcon: HTMLElement = document.createElement("i");
            let trash: Attr = document.createAttribute("class");
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
            
            checkbox.addEventListener("click", function (): void {checkToDo(idChecked.value); });
        }
        toDoInput.value = "";
    }

    function checkToDo(id: string): void {
        for (let i: number = 0; i < allToDos.length; i++) {
            let todo: ToDo = allToDos[i];
            if (todo.checkmarkId == id) {
                let check: HTMLElement = document.querySelector("#" + id);
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