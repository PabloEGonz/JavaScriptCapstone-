import closePopUp from '../img/x.png';
import { arrayObj } from './getSeries.js';

const pageBody = document.getElementById('body');

const popUpRender = (index) => {
  const elem = arrayObj[index];

  const card = document.createElement('div');
  card.className = 'popUp-card flex';
  card.innerHTML = `
    <section class="popUp-section grid">
        <div class="box1">
          <img src="${elem.image.medium}" alt="Serie image nro.1" class="serieImg">
          <img src="${closePopUp}" alt="X button" class="xBttn">
        </div>
        <div class="box2 flex">
          <h2 class="serieTitle">${elem.name}</h2>
          <ul class="serieData grid">
            <li>Rating: ${elem.rating.average}/10</li>
            <li>Status: ${elem.status}</li>
            <li>Language: ${elem.language}</li>
            <li>Genres: ${elem.genres}</li>
          </ul>
          <p class="SerieResume">${elem.summary}</p>
        </div>
        <div class="box3">
          <h3 class="commentTitle">Comments</h3>
          <div class="viewComments"></div>
        </div>
        <div class="box4">
          <h4 class="commentSubtitle">Add a comment</h4>
          <form action="" class="newComment flex">
            <input type="text" name="name" placeholder="Your name" required>
            <input type="text" name="addcomment" placeholder="Your insights" required>
            <button type="submit" class="addCommentBttn">Comment</button>
          </form>
        </div>
    </section>
    `;
  pageBody.appendChild(card);
  const close = document.querySelector('.xBttn');
  close.addEventListener('click', () => {
    pageBody.removeChild(card);
  });
};

export default popUpRender;
