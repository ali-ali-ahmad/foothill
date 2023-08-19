function changeStatus(todoId) {
    const todoToMove = document.getElementById(todoId);
    const isCompleted = todoToMove.classList.contains('completed');
    const newStatus = isCompleted ? 'pending' : 'completed';
    const newToDoList = document.getElementById(`toDo_${newStatus}`);

    if (todoToMove && newToDoList) {
        const todoData = JSON.parse(localStorage.getItem('todoData'));
        
        const todoToUpdate = todoData.find(todo => todo.id === todoId);
        
        if (todoToUpdate) {
            todoToUpdate.completed = !isCompleted;
        }
        todoToMove.remove();
        createNewList(todoToUpdate);
        updateCounters();

        localStorage.setItem('todoData', JSON.stringify(todoData));

        fetch(`https://dummyjson.com/todos/${todoId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                completed: !isCompleted,
            })
        })
        .then(res => res.json())
        .catch(error => {
            console.error('Error updating todo:', error);
        });
    }
}

