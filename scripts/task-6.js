'use strict';

const input = document.getElementById('validation-input');
const validLength = input.dataset.length;

function changeColor(event) {
  const currentLength = event.target.value.length;
  if (currentLength <= validLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }

  if (currentLength > validLength) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }

  if (currentLength === 0) {
    input.classList.remove('valid');
  }
}

input.addEventListener('blur', changeColor);
