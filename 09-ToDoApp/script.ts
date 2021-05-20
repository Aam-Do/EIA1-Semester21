window.addEventListener("load", function (): void {

    const toDoInput: HTMLInputElement = document.querySelector("#toDoInput");
    const list: HTMLUListElement = document.querySelector("#toDos");
    interface ToDo {checked: boolean; content: string; }
    let allToDos: ToDo[] = [];

    console.log(allToDos);

    toDoInput.addEventListener("keydown", function (event: KeyboardEvent): void {
        if (event.keyCode == 13) {
          
            allToDos.push({checked: false, content: toDoInput.value});
            console.log(allToDos);

            displayList();

        }
    });
        
    function displayList(): void {
        list.innerHTML = "";
        for (let i: number = 0; i < allToDos.length; i++) {
            let todo: ToDo = allToDos[i];

            let newToDo: HTMLElement = document.createElement("li");
            let node: Node = document.createTextNode(todo.content);
            newToDo.appendChild(node);

            let element: HTMLElement = document.getElementById("toDos");
            element.appendChild(newToDo);
        }
        toDoInput.value = "";
    }

      
            


















});