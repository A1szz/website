let currentPage = 0; // Start at page 0
const pages = document.querySelectorAll(".page");
const totalPages = pages.length;

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Set initial page positions
function initializePages() {
    pages.forEach((page, index) => {
        page.style.zIndex = totalPages - index; // Maintain correct stacking order
        page.style.transform = `rotateY(0deg)`; // Start all pages closed
    });
}
initializePages();

// Next Button Logic
nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) { // Prevent overflow beyond the last page
        pages[currentPage].style.transform = `rotateY(-180deg)`; // Flip current page
        currentPage++;
    }

    // Disable Next button if on the last page
    if (currentPage === totalPages) {
        nextButton.disabled = true;
    }
    prevButton.disabled = false; // Enable Previous button
});

// Previous Button Logic
prevButton.addEventListener("click", () => {
    if (currentPage > 0) { // Prevent underflow before the first page
        currentPage--;
        pages[currentPage].style.transform = `rotateY(0deg)`; // Flip back current page
    }

    // Disable Previous button if on the first page
    if (currentPage === 0) {
        prevButton.disabled = true;
    }
    nextButton.disabled = false; // Enable Next button
});

// Initial Button States
prevButton.disabled = true; // Disable Previous on first load
