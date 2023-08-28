function editNote(id) {
    const rowToEdit = document.getElementById(id);
    const titleToEdit = rowToEdit.querySelector('td:first-child');
    const contentToEdit = rowToEdit.querySelector('td:nth-child(2)');
    const icon = rowToEdit.querySelector('#edit_icon');

    if (titleToEdit.contentEditable !== 'true') {
        titleToEdit.contentEditable = true;
        contentToEdit.contentEditable = true;
        titleToEdit.focus();
        
        icon.className = "fa-solid fa-check fa-lg";
        icon.style.color = "#001a80";
    } else {
        titleToEdit.contentEditable = false;
        contentToEdit.contentEditable = false;
        
        icon.className = "fa-solid fa-pen";
        icon.style.color = "#017e16";

        const title = titleToEdit.textContent;
        const content = contentToEdit.textContent;

        updateNote(id, title, content);
    }
}

async function updateNote(id, title, content) {
    try {
        const response = await fetch(`http://localhost:8000/api/notes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content }),
        });

        if (!response.ok) {
            alert("Failed to update note.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

