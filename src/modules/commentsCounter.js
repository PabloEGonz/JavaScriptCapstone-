const commentCounter = async (id) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YNGIAvmuzfqw2IIpg60K/comments?item_id=item${id}`,
  );
  if (response.status === 400) {
    return 0;
  }
  const jsonData = await response.json();
  return jsonData.length;
};

export default commentCounter;