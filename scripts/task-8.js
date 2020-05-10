/* eslint-disable no-use-before-define */

'use strict';

const render = document.querySelector("[data-action='render']");
const destroy = document.querySelector("[data-action='destroy']");
const mainBox = document.getElementById('boxes');

render.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = document.querySelector('#controls input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const startSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const size = startSize + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = `rgba( ${random()} , ${random()} , ${random()} )`;
    mainBox.appendChild(box);
  }
  return mainBox;
}

function destroyBoxes() {
  mainBox.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}
