import './style.css';
import './popUp.css';
import logo from './img/LogoMN.png';
import popUpRender from './modules/popUp.js';
import callAPI from './modules/callAPI.js';

const LOGO_HEADER = document.querySelector('.logo');
LOGO_HEADER.src = logo;

document.addEventListener('DOMContentLoaded', callAPI());

const seeComments = () => {
  const buttons = Array.from(document.getElementsByClassName('popUp-bttn'));

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      popUpRender(index);
    });
  });
};

export default seeComments;