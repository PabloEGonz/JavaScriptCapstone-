const APIURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uVDPVhxCZlYlibEV1MxD/comments/';
// API INVOLMENT
let arrayComment = [];

const getComments = async () => {
  const obj = await fetch(APIURL);
  const response = await obj.json();
  arrayComment = response;
};
const getArrayComments = () => arrayComment;

//  POST and fecth for comments

const popupIds = ['GOT', 'HOTD', 'EUPH', 'T100', 'ST', 'BM'];
const POSTComment = async (id) => {
  const commentObj = {
      item_id: `${commentId[id]}`,
      username: `${user}`,
      comment: `${comment}`,
  };
  await fetch(APIURL, 
    {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentObj),
  });
};

newCommentForm = () => {
  const formBox = document.querySelector('.newCommentForm');
  const nameInput = document.getElementById('Name');
  const commentInput = document.getElementById('Comment');
  const submitBttn = document.querySelector('.addCommentBttn');
      submitBttn.addEventListener('click', async (e) => {
          e.preventDefault();
  
          await POSTComment(window.popupElementd, nameInput.value, commentInput.value);
          const newComments = await fetchComments(window.popupElementd);
          formBox.innerHTML = newComments;
          nameInput.value = '';
          commentInput.value = '';
    });
  };





// const POSTComment = async (commentId, user, comment) => {
//     const commentObj = {
//       item_id: `${commentId}`,
//       username: `${user}`,
//       comment: `${comment}`,
//     };
//     await fetch(APIURL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(commentObj),
//     });
//   };


// const fetchComments = async (commentId) => {
//     const response = await fetch(
//       `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uVDPVhxCZlYlibEV1MxD/comments?item_id=${commentId}`,
//     );
//     const jsonData = await response.json();
//     let comments = '';
//     if (response.status === 400) {
//       comments = 'no comments yet.';
//     } else {
//       jsonData.forEach((comment) => {
//         comments += `<p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>`;
//       });
//     }
//     console.log(comments);
//     return comments;
//   };


//   export { POSTComment, fetchComments };


  

