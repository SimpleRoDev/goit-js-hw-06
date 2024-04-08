const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function() {
  const desiredLength = parseInt(validationInput.getAttribute("data-length"));

  if (validationInput.value.length === desiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});