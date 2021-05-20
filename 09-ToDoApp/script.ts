window.addEventListener("load", function (): void {

    const toDoInput: HTMLInputElement = document.querySelector("#toDoInput");
    const list: HTMLUListElement = document.querySelector("#toDos");
    interface ToDo {checked: boolean; content: string; number: number; }
    let allToDos: ToDo[] = [];

    console.log(allToDos);

    toDoInput.addEventListener("keydown", function (event: KeyboardEvent): void {
        if (event.keyCode == 13) {
          
            allToDos.push({checked: false, content: toDoInput.value, number: allToDos.length});
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
            idToDo.value = i.toString();
            idChecked.value = "check" + i.toString();

            let checkbox: HTMLElement = document.createElement("i");
            let checked: Attr = document.createAttribute("class");

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
            
            checkbox.addEventListener("click", function (): void {checkToDo(); });
        }
        toDoInput.value = "";
    }

    // function checkToDo(): void {
        
    // }
            




















});