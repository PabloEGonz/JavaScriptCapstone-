import heart from '../img/likes.png';
import { arrayObj } from './getSeries.js';
import popUpRender from './popUp.js';
import { getArrayItems, getLikes } from './involAPI.js';
import { likes } from './updateLikes.js';
import itemCounter from './itemsCounter.js';

const container = document.querySelector('.landing-page');
const home = document.querySelector('#home-link');

const seeComments = () => {
  const buttons = Array.from(document.getElementsByClassName('popUp-bttn'));
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      popUpRender(index);
    });
  });
};

const render = async () => {
  await getLikes();
  const items = getArrayItems();
  home.innerHTML = `Home (${itemCounter(items)})`
  container.innerHTML = '';
  arrayObj.forEach((ele, i) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<img class="card-img" src='${ele.image.medium}'>
        <div class='flex card-heading'><h4 class="card-title">${ele.name}</h4>
        <img class="card-icon" src='${heart}'></div>
        <p class="likes">${items[i].likes} Likes</p>
        <button class="popUp-bttn" id="${ele.id}" type="button">Comments</button>
        <button class="reserve" type="button">Reservations</button>`;
    container.appendChild(card);
  });
  seeComments();
  likes();
};

export default render;