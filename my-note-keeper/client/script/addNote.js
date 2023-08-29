async function addNewNote() {
    try {
        const title = document.getElementById("title").value.trim();
        const content = document.getElementById("content").value.trim();

        if (title.length) {
            const response = await fetch(API_BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content }),
            });

            if (response.ok) {
                fetchNotes();

                title = "";
                content = "";
            } else {
                alert("Failed to add note.");
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}


