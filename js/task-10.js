function getRandomHexColor() {
  return #${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')};
}

const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);

function createBoxes() {
  const amount = input.value;

  if (amount <= 0 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  destroyBoxes();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = ${30 + i * 10}px;
    box.style.height = ${30 + i * 10}px;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

destroyButton.addEventListener('click', destroyBoxes);