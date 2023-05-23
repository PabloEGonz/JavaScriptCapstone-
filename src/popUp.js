import testimg from './img/LogoMN.png';
import closePopUp from './img/x.png';


const pageBody = document.getElementById('body'); 

const hardCode = [
    {
        id: 1,
        movie: 'crepusculo',
        rating: '7.8',
        genres:["Drama","Adventure","Fantasy"],
        status:"Ended",
        resume: 'esta es la piel de un asesino',
        lenguaje: 'English',
        movieImg: testimg,
    },
];

const popUp_render = () => {
const card = document.createElement('div');
card.className = 'popUp-card flex';
card.innerHTML = `
<section class="popUp-section flex">
    <div class="box1">
      <img src="${hardCode[0].movieImg}" alt="Serie image nro.1" class="serieImg">
      <img src="${closePopUp}" alt="X button" class="xBttn">
    </div>
    <div class="box2">
      <h2 class="serieTitle">${hardCode[0].movie}</h2>
      <ul class="serieData">
        <li>${hardCode[0].rating}</li>
        <li>${hardCode[0].status}</li>
        <li>${hardCode[0].lenguaje}</li>
        <li>${hardCode[0].genres}</li>
      </ul>
      <p class="SerieResume">${hardCode[0].resume}</p>
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
