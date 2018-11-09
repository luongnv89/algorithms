const { shuffle, swapElements } = require('../utils');

describe('test swap element in array', () => {
  test('test input array is null', () => {
    const array = null;
    expect(swapElements(array, 0, 1)).toEqual(array);
  });

  test('test input array is undefined', () => {
    const array = undefined;
    expect(swapElements(array, 0, 1)).toEqual(array);
  });

  test('test input array is empty', () => {
    const array = [];
    expect(swapElements(array, 0, 1)).toEqual(array);
  });

  test('test input array has only 1 element', () => {
    const array = ['first-element'];
    expect(swapElements(array, 0, 1)).toEqual(array);
  });

  test('element indexs are not in array', () => {
    const array = [1, 2, 3, 4];
    expect(swapElements(array, 0, 5)).toEqual(array);
    expect(swapElements(array, 6, 1)).toEqual(array);
  });

  test('should return a new array which has 2 elements has been swapped', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [1, 3, 2, 4];
    expect(swapElements(array1, 1, 2)).toEqual(array2);
    expect(swapElements(array1, 1, 2)).not.toEqual(array2);
  });

});


describe('Test shuffle an array', () => {
  test('test input array is null', () => {
    const array = null;
    expect(shuffle(array)).toEqual(array);
  });

  test('test input array is undefined', () => {
    const array = undefined;
    expect(shuffle(array)).toEqual(array);
  });

  test('test input array is empty', () => {
    const array = [];
    expect(shuffle(array)).toEqual(array);
  });

  test('test input array has only 1 element', () => {
    const array = ['first-element'];
    expect(shuffle(array)).toEqual(array);
  });

  test('test input array has only 2 elements', () => {
    const array = ['first-element', 'second-element'];
    const shuffleArray = ['second-element', 'first-element'];
    expect(shuffle(array)).toEqual(shuffleArray);
  });

  test('should return different array with the input array', () => {
    let originalArray = [1, 3, 4];
    let array = [1, 3, 4];
    expect(shuffle(array)).not.toEqual(originalArray);
    originalArray = [1, 3, 4, 5, 6, 7, 8, 9];
    array = [1, 3, 4, 5, 6, 7, 8, 9];
    expect(shuffle(array)).not.toEqual(originalArray);
  });
});


