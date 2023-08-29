async function deleteNote(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const rowToDelete = document.getElementById(id);
            if (rowToDelete) {
                rowToDelete.remove();
                allNotesCount();
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

