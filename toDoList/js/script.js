let existingIds = new Set();


function fetchTodoData() {
    const storedData = localStorage.getItem('todoData');

    if (storedData) {
        const parsedData = JSON.parse(storedData);
        toDoData = new Set(parsedData);
        displayTodoList(toDoData);
    } else {
        fetch('https://dummyjson.com/todos')
            .then(response => response.json())
            .then(data => {
                toDoData = new Set(data.todos);
                displayTodoList(toDoData);
                localStorage.setItem('todoData', JSON.stringify(Array.from(toDoData)));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    
}

function displayTodoList(todos) {

    todos.forEach(todo => {
        createNewList(todo);
        existingIds.add(todo.id);
    });

    updateCounters();

}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        addNewTodo();
    }
}


window.onload = fetchTodoData;
