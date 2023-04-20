import { levelStringToArray, levelArrayToString } from './levelConverter';
import { PROVINCES_LENGTH } from './constants';

const levelArr = [
  1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1,
  2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2,
  3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3,
  4, 5, 1, 2, 3,
];
const levelStr =
  '12345123451234512345123451234512345123451234512345123451234512345123451234512345123';

describe('levelStringToArray', () => {
  test('should properly convert string to array of province levels', () => {
    const resultLevelArr = levelStringToArray(levelStr);
    expect(resultLevelArr).toEqual(levelArr);
  });
  test(`should return an ${PROVINCES_LENGTH}-length array of zeroes, when string has characters other than 0-5`, () => {
    const resultLevelArr = levelStringToArray('sdfsdf345345');
    expect(resultLevelArr).toEqual(new Array(PROVINCES_LENGTH).fill(0));
  });
  test(`should return an ${PROVINCES_LENGTH}-length array of zeroes, when string has less than ${PROVINCES_LENGTH} numbers`, () => {
    const resultLevelArr = levelStringToArray('12345');
    expect(resultLevelArr).toEqual(new Array(PROVINCES_LENGTH).fill(0));
  });
});

describe('levelArrayToString', () => {
  test('should properly convert array of province levels to string', () => {
    const resultLevelStr = levelArrayToString(levelArr);
    expect(resultLevelStr).toEqual(levelStr);
  });
  test(`should return an ${PROVINCES_LENGTH}-length string of zeroes, when array has less than ${PROVINCES_LENGTH} numbers`, () => {
    const resultLevelStr = levelArrayToString([1, 2, 3, 4, 5]);
    expect(resultLevelStr).toEqual(
      new Array(PROVINCES_LENGTH).fill('0').join('')
    );
  });
});
