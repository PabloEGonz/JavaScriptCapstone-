import './style.css';
import './popUp.css';
import logo from './img/LogoMN.png';
// import popUpRender from './modules/popUp.js';
import callAPI from './modules/callAPI.js';

const LOGO_HEADER = document.querySelector('.logo');
LOGO_HEADER.src = logo;

document.addEventListener('DOMContentLoaded', callAPI());

// export default seeComments;