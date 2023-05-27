import closePopUp from '../img/x.png';
import { arrayObj } from './getSeries.js';
import { newCommentForm, getComments } from './comments.js';
import commentCounter from './commentsCounter.js';

const pageBody = document.getElementById('body');

const popUpRender = async (index, id) => {
  const elem = arrayObj[index];
  const counter = commentCounter(index);
  document.body.classList.add('disable-scroll');
  const card = document.createElement('div');
  card.style.backgroundImage = `url(${elem.image.medium})`;
  card.className = 'popUp-card flex';
  card.innerHTML = `
    <section class="popUp-section grid">
    <img src="${closePopUp}" alt="X button" class="xBttn">
        <div class="box1">
          <img src="${elem.image.medium}" alt="Serie image nro.1" class="serieImg">
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
          <h3 class="commentTitle">Comments (${counter})</h3>
          <div class="viewComments"></div>
        </div>
        <div class="box4">
          <h4 class="commentSubtitle">Add a comment</h4>
          <form class="newCommentForm flex">
            <span id="errorMsg"></span>
            <input type="text" name="name" id="Name" placeholder="Your name" required>
            <input type="text" name="addcomment" id="Comment" placeholder="Your insights" required>
            <button type="submit" class="addCommentBttn">Comment</button>
          </form>
        </div>
    </section>
    `;
  pageBody.appendChild(card);

  const close = document.querySelector('.xBttn');
  close.addEventListener('click', () => {
    document.body.classList.remove('disable-scroll');
    pageBody.removeChild(card);
  });


  const submitBttn = document.querySelector('.addCommentBttn');

  newCommentForm(id, submitBttn);
  await getComments(id);
};

export default popUpRender;
