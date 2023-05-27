import commentCounter from './commentsCounter.js';

const APIURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YNGIAvmuzfqw2IIpg60K/comments/';

const getComments = async (i) => {
  const comentContainer = document.querySelector('.viewComments');
  const obj = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YNGIAvmuzfqw2IIpg60K/comments?item_id=${i}`);
  const response = await obj.json();
  comentContainer.innerHTML = '';
  if (Array.isArray(response)) {
    response.forEach((element) => {
      const commentList = document.createElement('p');
      commentList.className = 'newCreateComment';
      commentList.innerHTML = ` ${element.creation_date} ${element.username}: ${element.comment}`;
      comentContainer.appendChild(commentList);
    });
  } else {
    comentContainer.textContent = 'No comments yet, be the first one to comment!';
  }
  const counter = commentCounter(response);
  const countUpdate = document.querySelector('.commentTitle');
  countUpdate.innerHTML = `Comments (${counter})`;
};

const POSTComment = async (obj) => {
  await fetch(APIURL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
};

const newCommentForm = (id, submitBttn) => {
  const nameInput = document.getElementById('Name');
  const commentInput = document.getElementById('Comment');
  const empytField = document.getElementById('errorMsg');
  submitBttn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (nameInput.value === '' || commentInput.value === '') {
      empytField.textContent = 'Please fill out all fields';
      setTimeout(() => {
        empytField.textContent = '';
      }, 3000);
    } else {
      const commentObj = {
        item_id: `${id}`,
        username: nameInput.value,
        comment: commentInput.value,
      };
      await POSTComment(commentObj);
      nameInput.value = '';
      commentInput.value = '';
      await getComments(id);
    }
  });
};

export { newCommentForm, getComments };
