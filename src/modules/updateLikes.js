// import render from './render.js';
import { getLikes, getArrayItems } from './involAPI.js';

const itemIds = ['GOT', 'HOTD', 'EUPH', 'T100', 'ST', 'BM'];
const updateLikes = async (id) => {
  const obj = {
    item_id: `${itemIds[id]}`,
  };
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mJrjPcZ18WpbP2anfuWj/likes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
};
const likes = () => {
  const buttons = Array.from(document.getElementsByClassName('card-icon'));
  buttons.forEach((button, i) => {
    button.addEventListener('click', async () => {
      await updateLikes(i);
      await getLikes();
      const items = getArrayItems();
      const likesP = Array.from(document.getElementsByClassName('likes'));
      likesP[i].innerHTML = `${items[i].likes} Likes`;
    });
  });
};

export { updateLikes, likes };
