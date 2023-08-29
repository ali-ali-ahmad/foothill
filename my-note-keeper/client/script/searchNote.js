async function searchNotes(query) {
    try {
        const tableTitle = document.getElementById("table_title");

        if (query) {
            const response = await fetch(`${API_BASE_URL}/search/${query}`);
            const notes = await response.json();
            noteMaker(notes);
            tableTitle.textContent = `Search Results for "${query}"`;
        } else {
            fetchNotes();
            tableTitle.textContent = "All Notes";
        }

    } catch (error) {
        console.error("An error occurred:", error);
    }
}