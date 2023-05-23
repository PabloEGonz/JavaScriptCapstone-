import './style.css';
import './popUp.css';
import logo from './img/LogoMN.png';
import popUp_render from './popUp.js';
import callAPI from './modules/callAPI.js';

const series = ['tt0944947', 'tt11198330', 'tt8772296', 'tt2661044', 'tt4574334', 'tt2085059'];

const LOGO_HEADER = document.querySelector('.logo');
LOGO_HEADER.src = logo;

const commentBttn = document.querySelector('.testbttn');

commentBttn.addEventListener('click', popUp_render);
document.addEventListener('DOMContentLoaded', () => callAPI(series));
