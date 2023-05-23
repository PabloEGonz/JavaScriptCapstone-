import heart from '../img/likes.png';

const getSeries = async (file) => {
  const obj = await fetch(file);
  const response = await obj.json();
  return `<img class="card-img" src='${response.image.medium}'>
    <div class='flex card-heading'><h4 class="card-title">${response.name}</h4>
    <img class="card-icon" src='${heart}'></div>
    <button class="pop-up" type="button">Comments</button>
    <button class="reserve" type="button">Reservations</button>`;
};

export default getSeries;