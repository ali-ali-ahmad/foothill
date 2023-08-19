function deleteTodo(todoId) {

    for (const todo of toDoData) {
        if (todo.id === todoId) {
            toDoData.delete(todo);
            break;
        }
    }

    const rowToDelete = document.getElementById(todoId);
    rowToDelete.remove();
    updateCounters();

    localStorage.setItem('todoData', JSON.stringify(Array.from(toDoData)));

    fetch(`https://dummyjson.com/todos/${todoId}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .catch(error => {
        console.error('Error deleting todo:', error);
    });

}