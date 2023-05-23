import getSeries from './getSeries.js';

const container = document.querySelector('.landing-page');

const display = (array) => {
  container.innerHTML = '';
  array.forEach(async (ele) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = await getSeries(`https://api.tvmaze.com/lookup/shows?imdb=${ele}`);
    container.appendChild(card);
  });
};
export default display;