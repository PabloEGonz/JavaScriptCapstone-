const commentCounter = (array) => {
  if (Array.isArray(array)) {
    return array.length;
  } else return 0;
};

export default commentCounter;