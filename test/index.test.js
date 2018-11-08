/* jshint esversion: 6 */
const { fiboNumber, syraNumber } = require('../index');

describe('Test fiboNumber(nb)', () => {
  test('input nb is negative', () => {
    expect(fiboNumber(-1)).toEqual(0);
  });

  test('input nb is not an integer number', () => {
    expect(fiboNumber(1.3)).toEqual(0);
  });

  test('input nb is not number', () => {
    expect(fiboNumber('a')).toEqual(0);
  });

  test('correct return value', () => {
    const nbs = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const fiboNbs = [1, 1, 2, 3, 5, 8, 13, 21, 34];
    for (let index = 0; index < nbs.length; index++) {
      expect(fiboNumber(nbs[index])).toEqual(fiboNbs[index]);
    }
  });
});

describe('Test syraNumber(k , nb)', () => {

  test('input k is negative', () => {
    expect(syraNumber(-5, 1)).toEqual(0);
  });

  test('input k is not an integer number', () => {
    expect(syraNumber(1.3, 1)).toEqual(0);
  });

  test('input k is not a number', () => {
    expect(syraNumber('a', 1)).toEqual(0);
  });

  test('input nb is negative', () => {
    expect(syraNumber(5, -1)).toEqual(0);
  });

  test('input nb is not an integer number', () => {
    expect(syraNumber(5, 1.3)).toEqual(0);
  });

  test('input nb is not a number', () => {
    expect(syraNumber(5, 'a')).toEqual(0);
  });

  test('correct return value', () => {
    const k = 14;
    const syraNbs = [14, 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, 4, 2];
    for (let index = 0; index < syraNbs.length; index++) {
      expect(syraNumber(k, index)).toEqual(syraNbs[index]);
    }
  });
});
