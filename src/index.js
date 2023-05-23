import './style.css';
import './popUp.css';
import logo from './img/LogoMN.png';
import popUp_render from './popUp.js';

const LOGO_HEADER = document.querySelector('.logo');
LOGO_HEADER.src = logo;

const commentBttn = document.querySelector('.testbttn');

commentBttn.addEventListener('click', popUp_render);
