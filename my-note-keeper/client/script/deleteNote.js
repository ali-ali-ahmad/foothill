async function deleteNote(id) {
    const response = await fetch(`http://localhost:8000/api/notes/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    
    if (response.ok) {
        const rowToDelete = document.getElementById(id);
        rowToDelete.remove();
    } else {
        alert("Failed to delete note.");
    }
}


