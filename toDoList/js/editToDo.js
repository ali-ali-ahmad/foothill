function editTodo(todoId) {
    const rowToChange = document.getElementById(todoId);
    const todoDescription = rowToChange.querySelector('.todo-description');

    todoDescription.contentEditable = true;
    todoDescription.focus();

    todoDescription.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            todoDescription.contentEditable = false;

            const updatedDescription = todoDescription.textContent;

            const updatedData = Array.from(toDoData).map(todo => {
                if (todo.id === todoId) {
                    todo.todo = updatedDescription;
                }
                return todo;
            });

            fetch(`https://dummyjson.com/todos/${todoId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                todo: updatedDescription,
                })
            })
            .then(res => res.json())
            .catch(error => {
                console.error('Error updating todo:', error);
            });
            
            toDoData = new Set(updatedData);

            localStorage.setItem('todoData', JSON.stringify(Array.from(toDoData)));
        }
    });
}