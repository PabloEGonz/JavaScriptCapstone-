const POSTComment = async (commentId, user, comment) => {
    const postBody = {
      item_id: `${commentId}`,
      username: `${user}`,
      comment: `${comment}`,
    };
    const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uVDPVhxCZlYlibEV1MxD/comments';
    await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody),
    });
  };


const fetchComments = async (commentId) => {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uVDPVhxCZlYlibEV1MxD/comments?item_id=${commentId}`,
    );
    const jsonData = await response.json();
    let comments = '';
    if (response.status === 400) {
      comments = 'no comments yet.';
    } else {
      jsonData.forEach((comment) => {
        comments += `<p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>`;
      });
    }
    console.log(comments);
    return comments;
  };


  export { POSTComment, fetchComments };


  

