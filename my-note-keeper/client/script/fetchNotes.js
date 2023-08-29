let currentPage = 1;
let totalPages = 0;
const PAGE_LIMIT = 10;

async function fetchNotes(query) {
    const tableTitle = document.getElementById("table_title");
    try {
        let notes;
        let response;

        if (query) {
            response = await fetch(`http://localhost:8000/api/notes/search/${query}`);
            notes = await response.json();
            tableTitle.textContent = `Search Results for "${query}"`;
        } else {
            response = await fetch(`http://localhost:8000/api/notes/page?page=${currentPage}`);
            notes = await response.json();
            tableTitle.textContent = `All Notes`;
        }

        noteMaker(notes);
        allNotesCount();
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

async function allNotesCount() {
    try {
        const currentPageDisplay = document.getElementById("notesCountDisplay");

        const response = await fetch("http://localhost:8000/api/notes");
        const notes = await response.json();
        currentPageDisplay.textContent = notes.length;

        totalPages = Math.ceil(notes.length / PAGE_LIMIT);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

async function fetchNextPage() {
    try {
        currentPage++;
        const response = await fetch(`http://localhost:8000/api/notes/page?page=${currentPage}`);
        const nextPageNotes = await response.json();

        if (!nextPageNotes.length) {
            console.log("No more notes available.");
            currentPage--;
            return;
        }

        noteMaker(nextPageNotes);
        updateCurrentPageDisplay();
        updateButtonVisibility();
    } catch (error) {
        console.error("An error occurred:", error);
    }
}


async function fetchPreviousPage() {
    try {
        if (currentPage === 1) {
            return;
        }
        currentPage--;

        const response = await fetch(`http://localhost:8000/api/notes/page?page=${currentPage}`);
        const previousPageNotes = await response.json();
        noteMaker(previousPageNotes);
        updateCurrentPageDisplay();
        updateButtonVisibility();
    } catch (error) {
        console.error("An error occurred:", error);
    }

}


function updateCurrentPageDisplay() {
    const currentPageDisplay = document.getElementById("currentPageDisplay");
    currentPageDisplay.textContent = currentPage;
}


function updateButtonVisibility() {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");


    if (currentPage === 1) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }


    if (currentPage === totalPages) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
}




fetchNotes();

