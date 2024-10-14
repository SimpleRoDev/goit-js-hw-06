// Function to generate a random hex color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

// Select the button and the span for displaying the color
const changeColorButton = document.querySelector('.change-color');
const colorDisplaySpan = document.querySelector('.color');

// Add click event listener to the button
changeColorButton.addEventListener('click', () => {
    const randomColor = getRandomHexColor(); // Generate a random color
    document.body.style.backgroundColor = randomColor; // Change the background color
    colorDisplaySpan.textContent = randomColor; // Update the span with the color value
});
test('Should display the new color value in the span element after clicking', () => {
const initialSpanContent = colorDisplaySpan.textContent;
changeColorButton.click();
const newSpanContent = colorDisplaySpan.textContent;

expect(newSpanContent).not.toBe(initialSpanContent);
expect(newSpanContent).toMatch(/^#[0-9A-Fa-f]{6}$/);
expect(document.body.style.backgroundColor).toBe(newSpanContent);
});