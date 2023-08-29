async function searchNotes(query) {
    try {
        const tableTitle = document.getElementById("table_title");
        const pageController = document.getElementById("page_controller");

        if (query) {
            const response = await fetch(`${API_BASE_URL}/search/${query}`);
            const notes = await response.json();
            noteMaker(notes);
            tableTitle.textContent = `Search Results for "${query}". Total Notes: ${notes.length}`;

            pageController.style.display = "none";
        } else {
            fetchNotes();
            tableTitle.textContent = "All Notes";
            pageController.style.display = "flex";
        }

    } catch (error) {
        console.error("An error occurred:", error);
    }
}