window.addEventListener("load", function (): void {

    const toDoInput: HTMLElement = document.querySelector("#toDoInput");

    toDoInput.addEventListener("keydown", function (event: KeyboardEvent): void {
        if (event.keyCode == 13) {
            
            let newToDo: HTMLElement = document.createElement("p");
            let content: Node = document.createTextNode(toDoInput.value);
            newToDo.appendChild(content);

            let element: HTMLElement = document.getElementById("toDos");
            element.appendChild(newToDo);
        }
    });
        


    

















});