'use strict';

const input = document.getElementById('validation-input');
const validLength = input.dataset.length;

function changeColor(event) {
  const currentLength = event.target.value.length;
  if (currentLength === Number(validLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }

  if (currentLength === 0) {
    input.classList.remove('invalid');
  }
}

input.addEventListener('blur', changeColor);
