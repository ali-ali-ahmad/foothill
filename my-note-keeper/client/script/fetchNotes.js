let currentPage = 1;
let totalPages = 0;
const PAGE_LIMIT = 10;

async function fetchNotes() {
    try {
        const response = await fetch(`${API_BASE_URL}/page?page=${currentPage}`);
        const notes = await response.json();

        noteMaker(notes);
        allNotesCount();
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

async function allNotesCount() {
    try {
        const pageStart = document.getElementById("pageStart");
        const pageEnd = document.getElementById("pageEnd");
        const allNotesDisplay = document.getElementById("allNotesCount");

        const response = await fetch(API_BASE_URL);
        const notes = await response.json();

        totalPages = Math.ceil(notes.length / PAGE_LIMIT);
        allNotesDisplay.textContent = notes.length;
        pageStart.textContent = ((currentPage - 1) * PAGE_LIMIT) + 1;
        if (currentPage === totalPages) {
            pageEnd.textContent = notes.length;
        } else {
            pageEnd.textContent = PAGE_LIMIT * currentPage;
        }

    } catch (error) {
        console.error("An error occurred:", error);
    }
}

async function fetchNextPage() {
    try {
        currentPage++;
        const response = await fetch(`${API_BASE_URL}/page?page=${currentPage}`);
        const nextPageNotes = await response.json();

        if (!nextPageNotes.length) {
            console.log("No more notes available.");
            currentPage--;
            return;
        }

        noteMaker(nextPageNotes);
        allNotesCount();
        updateButtonVisibility();
    } catch (error) {
        console.error("An error occurred:", error);
    }
}


async function fetchPreviousPage() {
    try {
        currentPage--;

        const response = await fetch(`${API_BASE_URL}/page?page=${currentPage}`);
        const previousPageNotes = await response.json();
        noteMaker(previousPageNotes);
        allNotesCount();
        updateButtonVisibility();
    } catch (error) {
        console.error("An error occurred:", error);
    }

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

