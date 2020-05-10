'use strict';

const list = document.getElementById('gallery');

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGallery = ({ url, alt }) => {
  const item = document.createElement('li');
  const image = document.createElement('img');
  image.setAttribute('src', url);
  image.setAttribute('alt', alt);
  image.style.width = '400px';
  image.style.height = '250px';
  item.appendChild(image);
  return item;
};

const eachElement = images.map(item => createGallery(item));
list.append(...eachElement);
