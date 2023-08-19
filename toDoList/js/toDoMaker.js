function createNewList(todo) {

    const newToDo = document.querySelector(`#toDo_${todo.completed ? 'completed' : 'pending'}`);

    const ticket = document.createElement("li");
    ticket.className = todo.completed ? 'completed' : 'pending';
    ticket.id = todo.id;

    ticket.innerHTML = `
    <div class="ticket_container">
        <h5 class="todo-description" contenteditable="true">
            ${todo.todo} 
            <i class="fa-solid fa-pen fa-xs" style="color: #017e16; cursor: pointer;" onclick="editTodo(${todo.id})"></i>
        </h5>
        <div>
            <div class="action_buttons">
                <i class="fa-solid fa-trash" style="color: #ff0000; cursor: pointer;" onclick="deleteTodo(${todo.id})"></i>
                ${todo.completed ? 
                    `<i class="fa-solid fa-rotate-left" style="color: #754a00; cursor: pointer;" onclick="changeStatus(${todo.id})"></i>` :
                    `<i class="fa-solid fa-check fa-lg" style="color: #001a80; cursor: pointer;" onclick="changeStatus(${todo.id})"></i>` 
                }
            </div>
            <p>UserId: ${todo.userId}</p>
        <div>
    </div>
`;

    newToDo.appendChild(ticket);
}
