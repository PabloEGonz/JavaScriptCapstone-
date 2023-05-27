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
  const counter = await commentCounter(i);
  const countUpdate = document.querySelector('.commentTitle');
  countUpdate.innerHTML = `Comments (${counter})`;
};

const POSTComment = async (id, user, comments) => {
  const commentObj = {
    item_id: `item${id}`,
    username: user,
    comment: comments,
  };
  await fetch(APIURL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentObj),
    });
  await getComments(id);
};

const newCommentForm = (itemIndex, nameInput, commentInput, submitBttn) => {
  const empytField = document.getElementById('errorMsg');
  submitBttn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (nameInput.value === '' || commentInput.value === '') {
      empytField.textContent = 'Please fill out all fields';
      setTimeout(() => {
        empytField.textContent = '';
      }, 3000);
    } else {
      await POSTComment(itemIndex, nameInput.value, commentInput.value);
      nameInput.value = '';
      commentInput.value = '';
    }
  });
};

export { newCommentForm, getComments };
