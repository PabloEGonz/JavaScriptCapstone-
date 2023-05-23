import heart from '../img/likes.png';
import { arrayObj } from './getSeries.js';

const container = document.querySelector('.landing-page');

const render = async () => {
  container.innerHTML = '';
  arrayObj.forEach((ele) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<img class="card-img" src='${ele.image.medium}'>
        <div class='flex card-heading'><h4 class="card-title">${ele.name}</h4>
        <img class="card-icon" src='${heart}'></div>
        <p class="likes">Likes</p>
        <button class="popUp-bttn" id="${ele.id}" type="button">Comments</button>
        <button class="reserve" type="button">Reservations</button>`;
    container.appendChild(card);
    
  });
};

export default render;