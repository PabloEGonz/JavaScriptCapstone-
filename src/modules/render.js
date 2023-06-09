import heart from '../img/star.png';
import { arrayObj } from './getSeries.js';
import popUpRender from './popUp.js';
import { getArrayItems } from './involAPI.js';
import { likes } from './updateLikes.js';
import itemCounter from './itemsCounter.js';

const container = document.querySelector('.landing-page');
const home = document.querySelector('#home-link');

const seeComments = () => {
  const buttons = Array.from(document.getElementsByClassName('popUp-bttn'));
  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      popUpRender(i, button.id);
    });
  });
};

const render = async () => {
  const items = getArrayItems();
  home.innerHTML = `Home (${itemCounter(items)})`;
  container.innerHTML = '';
  arrayObj.forEach((ele, i) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<img class="card-img" src='${ele.image.medium}' alt="Picture of ${ele.name}">
        <div class='flex card-heading'><h4 class="card-title">${ele.name}</h4>
        <img class="card-icon" src='${heart}' alt="Star icon"></div>
        <p class="likes">${items[i].likes} Likes</p>
        <button class="popUp-bttn" id="${ele.id}" type="button">Comments</button>`;
    container.appendChild(card);
  });
  seeComments();
  likes();
};

export default render;