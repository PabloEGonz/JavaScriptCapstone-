import './style.css';
import logo from './img/LogoMN.png';
import heart from './img/likes.png';

const series = ['tt0944947', 'tt11198330', 'tt8772296', 'tt2661044', 'tt4574334', 'tt2085059',]

const LOGO_HEADER = document.querySelector('.logo');
LOGO_HEADER.src = logo;

const container = document.querySelector('.landing-page');

series

const getSeries = async (file) => {
    const obj = await fetch(file);
    const response = await obj.json();

    return `<img class="card-img" src='${response.image.medium}'>
    <div class='flex card-heading'><h4 class="card-title">${response.name}</h4>
    <img class="card-icon" src='${heart}'></div>
    <button class="pop-up" type="button">Comments</button>
    <button class="reserve" type="button">Reservations</button>`

}

const display = () => {
    container.innerHTML = '';
    series.forEach(async (ele) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = await getSeries(`https://api.tvmaze.com/lookup/shows?imdb=${ele}`);
        container.appendChild(card);
    })
}
display();



