const levelStringToArray = (levelStr) => {
  const levelRegex = /^[0-5]+$/;
  if (levelStr.length !== 83 || !levelStr.match(levelRegex)) {
    console.warn('Levels URL parameter is invalid');
    return new Array(83).fill(0);
  }

  const arr = levelStr.split('');
  return arr.map((provinceLevel) => parseInt(provinceLevel));
};

const levelArrayToString = (levelArr) => {
  if (levelArr.length !== 83) {
    console.warn('Levels array is invalid');
    return new Array(83).fill('0').join('');
  }

  return levelArr.join('');
};

export { levelStringToArray, levelArrayToString };
