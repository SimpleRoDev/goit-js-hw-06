// Function to generate a random hex color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Select the input, create button, destroy button, and boxes container
const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

// Add event listener to the create button
createButton.addEventListener('click', () => {
    const amount = Number(input.value); // Get the number of boxes

    // Validate the input
    if (amount <= 0 || amount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }

    createBoxes(amount); // Call the function to create boxes
});

// Function to create boxes
function createBoxes(amount) {
    // Clear existing boxes
    destroyBoxes();

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div'); // Create a new div
        const size = 30 + i * 10; // Calculate size for the current box
        box.style.width = `${size}px`; // Set width
        box.style.height = `${size}px`; // Set height
        box.style.backgroundColor = getRandomHexColor(); // Set random background color
        boxesContainer.appendChild(box); // Append the box to the container
    }
}

// Function to clear the boxes
function destroyBoxes() {
    boxesContainer.innerHTML = ''; // Clear the contents of the boxes container
}

// Add event listener to the destroy button
destroyButton.addEventListener('click', destroyBoxes);
