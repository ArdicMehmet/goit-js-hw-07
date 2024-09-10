/* 2.Ödev */

const ulItem = document.querySelector('.gallery');

const images = [
    {
      url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
      alt: "Group of Horses Running",
    },
  ];
  
  images.forEach(image => {
    const listElement = document.createElement('li');
    const imageElement = document.createElement('img');
    imageElement.src = image.url.match(/[^<>]+/g).join(',');
    imageElement.alt = image.alt;
    listElement.appendChild(imageElement);
    ulItem.appendChild(listElement);
  })