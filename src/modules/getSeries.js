import { getLikes } from "./involAPI";
const arrayObj = [];

const getSeries = async (file) => {
  await getLikes();
  const obj = await fetch(file);
  const response = await obj.json();
  arrayObj.push(response);
};
export { arrayObj, getSeries };