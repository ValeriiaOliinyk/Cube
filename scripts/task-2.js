'use strict';

const list = document.getElementById('ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createItems = element => {
  const item = document.createElement('li');
  item.textContent = element;
  return item;
};

const eachElement = ingredients.map(item => createItems(item));
list.append(...eachElement);
