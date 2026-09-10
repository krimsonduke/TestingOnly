// Wait until the HTML document is fully parsed
document.addEventListener("DOMContentLoaded", () => {
    
    // Find our button and heading elements in the HTML
    const button = document.getElementById("action-btn");
    const heading = document.getElementById("main-heading");

    // Add an event listener to run code when the button is clicked
    button.addEventListener("click", () => {
        // Change the text of the heading
        heading.textContent = "You edited the page!";
        
        // Change the heading text color directly through JS
        heading.style.color = "#28a745"; 

        // Pop up a quick alert browser message
        alert("Success! Your JavaScript code is working.");
    });
});