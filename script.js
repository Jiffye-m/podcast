// Wait for the document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get the button and the navigation menu from the HTML
    const menuButton = document.getElementById('menu-button');
    const mainNav = document.getElementById('main-nav');

    // Check if both elements were found
    if (menuButton && mainNav) {
        
        // Add a 'click' event listener to the button
        menuButton.addEventListener('click', () => {
            
            // Toggle the 'is-open' class on both the button and the nav
            menuButton.classList.toggle('is-open');
            mainNav.classList.toggle('is-open');
        });
    }

});