function submit() {
    let name = document.getElementById("nameInput").value;
    let message = document.getElementById("messageInput").value;
    let bgColor = document.getElementById("bgColor").value;

    if (name.trim() !== "") {
        document.getElementById("greeting").textContent = "Hello, " + name + "!";
    }

    if (message.trim() !== "") {
        document.getElementById("message").textContent = message;
    }

    document.body.style.backgroundColor = bgColor;
}

function addToDo() {
    let todoText = document.getElementById("todoInput").value.trim();

    if (todoText !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = todoText;
        
        document.getElementById("todoList").appendChild(listItem);
        document.getElementById("todoInput").value = "";
    }
}
