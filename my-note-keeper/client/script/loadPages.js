let currentPage = 1;

async function fetchNextPage() {
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
}

async function fetchPreviousPage() {
    if (currentPage === 1){
        return
    }
    currentPage--;

    const response = await fetch(`http://localhost:8000/api/notes/page?page=${currentPage}`);

    const previousPageNotes = await response.json();
    noteMaker(previousPageNotes);
    updateCurrentPageDisplay();
}

function updateCurrentPageDisplay() {
    const currentPageDisplay = document.getElementById("currentPageDisplay");
    currentPageDisplay.textContent = currentPage;
}
