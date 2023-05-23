import { getSeries } from './getSeries.js';
import render from './render.js';

const callAPI = (array) => {
  array.forEach(async (ele) => {
    await getSeries(`https://api.tvmaze.com/lookup/shows?imdb=${ele}`);
    render();
  });
};

export default callAPI;