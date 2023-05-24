let arrayItems = [];

const getLikes = async () => {
  const obj = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mJrjPcZ18WpbP2anfuWj/likes/');
  const response = await obj.json();
  arrayItems = response;
};
const getArrayItems = () => arrayItems;
export { getLikes, getArrayItems };