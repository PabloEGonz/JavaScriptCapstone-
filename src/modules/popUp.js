import closePopUp from '../img/x.png';
import { arrayObj } from './getSeries.js';

const pageBody = document.getElementById('body'); 

const popUp_render = (index) => {
  const elem = arrayObj[index]
  
    const card = document.createElement('div');
    card.className = 'popUp-card flex';
    card.innerHTML = `
    <section class="popUp-section flex">
        <div class="box1">
          <img src="${elem.image.original}" alt="Serie image nro.1" class="serieImg">
          <img src="${closePopUp}" alt="X button" class="xBttn">
        </div>
        <div class="box2">
          <h2 class="serieTitle">${elem.name}</h2>
          <ul class="serieData">
            <li>${elem.rating.average}</li>
            <li>${elem.status}</li>
            <li>${elem.language}</li>
            <li>${elem.genres}</li>
          </ul>
          <p class="SerieResume">${elem.summary}</p>
        </div>
        <div class="box3">
          <h3 class="commentTitle">Comments</h3>
          <div class="viewComments"></div>
        </div>
        <div class="box4">
          <h4 class="commentSubtitle">Add a comment</h4>
          <form action="" class="newComment">
            <input type="text" name="name" placeholder="Your name" required>
            <input type="text" name="addcomment" placeholder="Your insights" required>
            <button type="submit" class="addCommentBttn">Comment</button>
          </form>
        </div>
    </section>
    `;
    pageBody.appendChild(card);
};

export default popUp_render;
