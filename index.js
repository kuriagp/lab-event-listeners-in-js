// Function to change background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "rgb(173, 216, 230)";
}

// Function to reset background color
function resetBackgroundColor() {
    document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

// Function to display the key pressed
function displayKeyPress(event) {
    const keyDisplay = document.getElementById("keyPressDisplay");

    keyDisplay.textContent = `Key pressed: ${event.key}`;
}

// Function to display user input in real-time
function displayUserInput() {
    const userInput = document.getElementById("textInput").value;

    const inputDisplay = document.getElementById("textInputDisplay");

    inputDisplay.textContent = `You typed: ${userInput}`;
}

// Attach Event Listeners
function setupEventListeners() {

    // Change background color on button click
    document
        .getElementById('changeColorButton')
        .addEventListener('click', changeBackgroundColor);

    // Reset background color on button double-click
    document
        .getElementById('resetColorButton')
        .addEventListener('dblclick', resetBackgroundColor);

    // Reset background color on body double-click
    document.body.addEventListener('dblclick', resetBackgroundColor);

    // Display key pressed
    document.addEventListener('keydown', displayKeyPress);

    // Display user input in real-time
    document
        .getElementById('textInput')
        .addEventListener('input', displayUserInput);
}

// Initialize event listeners 
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
};