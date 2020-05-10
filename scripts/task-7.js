'use strict';

const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

input.addEventListener('input', event => {
  const size = event.target.value;
  text.style.fontSize = `${size}px`;
});
