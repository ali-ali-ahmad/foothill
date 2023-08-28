async function deleteNote(id) {
    try {
        const response = await fetch(`http://localhost:8000/api/notes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const rowToDelete = document.getElementById(id);
            if (rowToDelete) {
                rowToDelete.remove();
            } else {
                console.warn(`Note with ID ${id} not found in the DOM.`);
            }
        } else {
            alert("Failed to delete note.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

