/**
 * Utility function that used on a Array
 */

const swapElements = (array, elem1, elem2) => {
  if (!array || array.length < 2) return array;
  if (!array[elem1] || !array[elem2]) return array;
  const temp = array[elem1];
  array[elem1] = array[elem2];
  array[elem2] = temp;
  return array;
}

const shuffle = (array, _nbTimes) => {
  let newArray = array;
  if (!newArray || newArray.length < 2) return newArray;
  if (newArray.length === 2) return swapElements(newArray, 0, 1);
  let nbTimes = _nbTimes | newArray.length;
  for (let i = 0; i < nbTimes; i ++) {
    const elem1 = Math.round(Math.random() * newArray.length);
    let elem2 = 0;
    do{
      elem2 = Math.round(Math.random() * newArray.length);
    }while(elem1 === elem2);
    newArray = swapElements(newArray, elem1, elem2);
  }
  return newArray;
};

module.exports = {
  shuffle,
  swapElements,
};
