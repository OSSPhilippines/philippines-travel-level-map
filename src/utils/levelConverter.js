import { PROVINCES_LENGTH } from './constants';

const levelStringToArray = (levelStr) => {
  const levelRegex = /^[0-5]+$/;
  if (levelStr.length !== PROVINCES_LENGTH || !levelStr.match(levelRegex)) {
    return new Array(PROVINCES_LENGTH).fill(0);
  }

  const arr = levelStr.split('');
  return arr.map((provinceLevel) => parseInt(provinceLevel));
};

const levelArrayToString = (levelArr) => {
  if (levelArr.length !== PROVINCES_LENGTH) {
    return new Array(PROVINCES_LENGTH).fill('0').join('');
  }

  return levelArr.join('');
};

export { levelStringToArray, levelArrayToString };
