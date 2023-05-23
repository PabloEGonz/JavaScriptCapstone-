import './style.css';
import logo from './img/LogoMN.png';
import getSeries from './modules/getSeries.js';

const series = ['tt0944947', 'tt11198330', 'tt8772296', 'tt2661044', 'tt4574334', 'tt2085059'];

const LOGO_HEADER = document.querySelector('.logo');
LOGO_HEADER.src = logo;

const container = document.querySelector('.landing-page');

const display = () => {
  container.innerHTML = '';
  series.forEach(async (ele) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = await getSeries(`https://api.tvmaze.com/lookup/shows?imdb=${ele}`);
    container.appendChild(card);
  });
};
document.addEventListener('DOMContentLoaded', () => display());
