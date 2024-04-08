
let counterValue = 0;


const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueSpan = document.getElementById("value");


decrementBtn.addEventListener("click", function() {

  counterValue--;

  valueSpan.textContent = counterValue;
});


incrementBtn.addEventListener("click", function() {

  counterValue++;

  valueSpan.textContent = counterValue;
});