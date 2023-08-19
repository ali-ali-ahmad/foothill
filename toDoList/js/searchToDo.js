function searchToDo(filterChar) {
    clearLists();

    const storedData = localStorage.getItem('todoData');

    if (storedData) {
        const parsedData = JSON.parse(storedData);
        toDoData = new Set(parsedData);
        parsedData.forEach(todo => {
            if (todo.todo.toLowerCase().startsWith(filterChar.toLowerCase())) {
                createNewList(todo);
            }
        });
        updateCounters();
    }

}


function clearLists() {
    const toDoPendingList = document.getElementById('toDo_pending');
    const toDoCompletedList = document.getElementById('toDo_completed');

    toDoPendingList.innerHTML = '';
    toDoCompletedList.innerHTML = '';
}

function handleSearchKeyPress(event) {
    if (event.key === "Enter") {
        searchToDo();
    }
}