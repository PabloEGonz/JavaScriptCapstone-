import { getSeries } from './getSeries.js';
import render from './render.js';

const series = ['tt0944947', 'tt11198330', 'tt8772296', 'tt2661044', 'tt4574334', 'tt2085059'];

const callAPI = () => {
  series.forEach(async (ele) => {
    await getSeries(`https://api.tvmaze.com/lookup/shows?imdb=${ele}`);
    render();
  });
};

export default callAPI;