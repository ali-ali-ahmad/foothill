function addNewTodo() {
    const newTodoInput = document.getElementById("new-todo");
    const newTodo = newTodoInput.value.trim();

    if (newTodo !== "") {
    
        let randomId = generateRandomId();
        while (existingIds.has(randomId)) {
            randomId = generateRandomId();
        }
    
        const newTodoObj = {
            id: randomId,
            todo: newTodo,
            completed: false,
            userId: 99
        };
    
        toDoData.add(newTodoObj);
        createNewList(newTodoObj);
        updateCounters();

        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodoObj),
        })
        .then(res => res.json())
        .catch(error => {
            console.error('Error adding new todo:', error);
        });
    }

    localStorage.setItem('todoData', JSON.stringify(Array.from(toDoData)));

    newTodoInput.value = "";
}

function generateRandomId() {
    return Math.floor(Math.random() * 100);
}