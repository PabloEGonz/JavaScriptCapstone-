import './style.css';
import logo from './img/LogoMN.png';
import callAPI from './modules/callAPI.js';

const series = ['tt0944947', 'tt11198330', 'tt8772296', 'tt2661044', 'tt4574334', 'tt2085059'];

const LOGO_HEADER = document.querySelector('.logo');
LOGO_HEADER.src = logo;

document.addEventListener('DOMContentLoaded', () => callAPI(series));
