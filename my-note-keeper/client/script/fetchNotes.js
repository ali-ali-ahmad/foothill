async function fetchNotes(query) {
    try {
        let notes;
        let response;

        if (query) {
            response = await fetch(`http://localhost:8000/api/notes/search/${query}`);
            notes = await response.json();
        } else {
            response = await fetch("http://localhost:8000/api/notes/page");
            notes = await response.json();
        }

        noteMaker(notes);
        allNotesCountDisplay();
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

async function allNotesCountDisplay() {
    try {
        const currentPageDisplay = document.getElementById("allNotesCountDisplay");

        const response = await fetch("http://localhost:8000/api/notes");
        const notes = await response.json();
        currentPageDisplay.textContent = notes.length;
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

fetchNotes();

