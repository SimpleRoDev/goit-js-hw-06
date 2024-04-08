
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formElements = loginForm.elements;

  const formData = {};

  for (let element of formElements) {
    if (element.type !== 'submit') {
      if (element.value.trim() === '') {
        alert('Toate câmpurile trebuie completate!');
        return;
      }
      formData[element.name] = element.value;
    }
  }

  console.log(formData);

  loginForm.reset();
});