
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Select the ingredients list
const ingredientsList = document.getElementById('ingredients');

// Create an array of <li> elements
const ingredientElements = ingredients.map(ingredient => {
  const listItem = document.createElement('li'); // Create <li> element
  listItem.textContent = ingredient; // Set its text content
  listItem.classList.add('item'); // Add the 'item' class
  return listItem; // Return the <li> element
});

// Append all <li> elements to the <ul> in a single operation
ingredientsList.append(...ingredientElements);