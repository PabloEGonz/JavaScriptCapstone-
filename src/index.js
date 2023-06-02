import './style.css';
import './popUp.css';
import logo from './img/logo.png';
import callAPI from './modules/callAPI.js';

const LOGO_HEADER = document.querySelector('.logo');
LOGO_HEADER.src = logo;

document.addEventListener('load', callAPI());
