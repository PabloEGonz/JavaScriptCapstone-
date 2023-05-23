import { getSeries } from './getSeries.js';
import render from './render.js';

const callAPI = (array) => {
  array.forEach(async (ele, i) => {
    await getSeries(`https://api.tvmaze.com/lookup/shows?imdb=${ele}`);
    if (i === array.length - 1) {
      render();
    }
  });
};

export default callAPI;