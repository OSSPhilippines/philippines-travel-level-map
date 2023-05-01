import { PROVINCES_LENGTH } from './constants';

const levelStringToArray = (levelStr) => {
	const levelString = levelStr ?? '';
	const levelRegex = /^[0-5]+$/;
	if (
		levelString.length !== PROVINCES_LENGTH ||
    !levelString.match(levelRegex)
	) {
		return new Array(PROVINCES_LENGTH).fill(0);
	}

	const arr = levelString.split('');
	return arr.map((provinceLevel) => parseInt(provinceLevel));
};

const levelArrayToString = (levelArr) => {
	if (levelArr.length !== PROVINCES_LENGTH) {
		return new Array(PROVINCES_LENGTH).fill('0').join('');
	}

	return levelArr.join('');
};

export { levelStringToArray, levelArrayToString };
