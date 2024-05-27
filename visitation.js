document.addEventListener('DOMContentLoaded', () => {
    // Get the current visit count from local storage
    let visitCount = localStorage.getItem('visitCount');

    // If visitCount doesn't exist, initialize it to 0
    if (!visitCount) {
        visitCount = 0;
    }

    // Increment the visit count
    visitCount++;

    // Save the updated visit count back to local storage
    localStorage.setItem('visitCount', visitCount);

    // Display the visit count on the page
    document.getElementById('visit-count').textContent = visitCount;

    // Reset button functionality
    document.getElementById('reset-button').addEventListener('click', () => {
        localStorage.setItem('visitCount', 0);
        document.getElementById('visit-count').textContent = 0;
    });
});
