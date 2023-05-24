import { POSTComment, fetchComments } from './comments.js';

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

export default newCommentForm;