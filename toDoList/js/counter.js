function updateCounters() {
    let pendingCount = document.getElementById('toDo_pending').children.length;
    let completedCount = document.getElementById('toDo_completed').children.length;

    document.querySelector('.pending_counter').textContent = `Pending Tasks: ${pendingCount}`;
    document.querySelector('.completed_counter').textContent = `Completed Tasks: ${completedCount}`;
    document.querySelector('.all_counter').textContent = `All Tasks: ${pendingCount + completedCount}`;
}

