import closePopUp from '../img/x.png';
import { arrayObj } from './getSeries.js';
import { newCommentForm, getComments } from './comments.js';

const pageBody = document.getElementById('body');

const popUpRender = async (i, id) => {
  const elem = arrayObj[i];
  document.body.classList.add('disable-scroll');
  const card = document.createElement('div');
  card.style.backgroundImage = `url(${elem.image.medium})`;
  card.className = 'popUp-card flex';
  card.innerHTML = `
    <section class="popUp-section grid">
    <img src="${closePopUp}" alt="X button" class="xBttn">
        <div class="box1">
          <img src="${elem.image.medium}" alt="Picture of ${elem.name} class="serieImg">
        </div>
        <div class="box2 flex">
          <h2 class="serieTitle">${elem.name}</h2>
          <ul class="serieData grid">
            <li><strong>Rating:</strong> ${elem.rating.average}/10</li>
            <li><strong>Status:</strong> ${elem.status}</li>
            <li><strong>Language:</strong> ${elem.language}</li>
            <li><strong>Genres:</strong> ${elem.genres.join(', ')}</li>
          </ul>
          <p class="SerieResume">${elem.summary}</p>
        </div>
        <div class="box3">
          <h3 class="commentTitle">Comments (0)</h3>
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
  await getComments(i);
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
