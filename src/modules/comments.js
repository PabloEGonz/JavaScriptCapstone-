import commentCounter from './commentsCounter.js';

const APIURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uVDPVhxCZlYlibEV1MxD/comments/';

const getComments = async (i) => {
  const comentContainer = document.querySelector('.viewComments');
  const obj = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uVDPVhxCZlYlibEV1MxD/comments?item_id=item${i}`);
  const response = await obj.json();
  comentContainer.innerHTML = '';
  response.forEach((element) => {
    const commentList = document.createElement('p');
    commentList.className = 'newCreateComment';
    commentList.innerHTML = ` ${element.creation_date} ${element.username}: ${element.comment}`;
    comentContainer.appendChild(commentList);
  });
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
  commentCounter();
};

const newCommentForm = (itemIndex, nameInput, commentInput, submitBttn) => {
  submitBttn.addEventListener('click', async (e) => {
    e.preventDefault();
    await POSTComment(itemIndex, nameInput.value, commentInput.value);
    nameInput.value = '';
    commentInput.value = '';
  });
};

export { newCommentForm, getComments };
