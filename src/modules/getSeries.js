const arrayObj = [];

const getSeries = async (file) => {
  const obj = await fetch(file);
  const response = await obj.json();
  arrayObj.push(response);
};
export { arrayObj, getSeries };