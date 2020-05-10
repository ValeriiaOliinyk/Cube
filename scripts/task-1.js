'use strict';

console.log('Task 1');

const list = document.getElementById('categories');
const items = Array.from(list.children);

function getListInfo(value, arr) {
  console.log(`В списке ${value.children.length} категории.`);
  arr.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(
      `Количество элементов: ${item.lastElementChild.children.length}`,
    );
  });
}

getListInfo(list, items);
