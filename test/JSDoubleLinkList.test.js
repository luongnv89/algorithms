const { JSDoubleLinkList, JSDoubleLinkListNode } = require('../data_structs/JSDoubleLinkList');

const comparator = (elem1, elem2) => {
  return elem1.id === elem2.id;
};

describe('Test for JSDoubleLinkListNode', () => {
  test('A new JSDoubleLinkListNode', () => {
    const value = 15;
    const myJSLLElement = new JSDoubleLinkListNode(value);
    expect(myJSLLElement).not.toBeNull();
    expect(myJSLLElement).toHaveProperty('_value');
    expect(myJSLLElement).toHaveProperty('_next');
    expect(myJSLLElement).toHaveProperty('_prev');
    expect(myJSLLElement.next()).toBeNull();
    expect(myJSLLElement.prev()).toBeNull();
    expect(myJSLLElement.value()).toEqual(value);
  });

  test('Test setNext', () => {
    const value1 = 15;
    const value2 = 14;
    const myJSLLElement1 = new JSDoubleLinkListNode(value1);
    const myJSLLElement2 = new JSDoubleLinkListNode(value2);
    expect(myJSLLElement1.next()).toBeNull();
    expect(myJSLLElement2.next()).toBeNull();
    myJSLLElement1.setNext(myJSLLElement2);
    myJSLLElement2.setPrev(myJSLLElement1);
    expect(myJSLLElement1.next().value()).toEqual(myJSLLElement2.value());
    console.log(myJSLLElement1);
    console.log(myJSLLElement2);
    expect(myJSLLElement2.prev().value()).toEqual(myJSLLElement1.value());
  });
});


describe('Initialize a LinkList', () => {
  test('create a LinkList with default parameter', () => {
    const myList = new JSDoubleLinkList();
    expect(myList.isEmpty()).toBeTruthy();
    expect(myList).toHaveProperty('_comparator');
    expect(myList).toHaveProperty('_head');
    expect(myList).toHaveProperty('_size');
  });

  test('create a LinkList with user defined comparator', () => {
    const myList = new JSDoubleLinkList(comparator);
    expect(myList.isEmpty()).toBeTruthy();
    // expect(myList).toHaveProperty(['_comparator','_head','_size']);
  });

});

describe('Test LinkList is empty', () => {
  test('Should return true', () => {
    const myList = new JSDoubleLinkList();
    expect(myList.isEmpty()).toBeTruthy();
  });

  test('Should return false', () => {
    const myList = new JSDoubleLinkList();
    expect(myList.isEmpty()).toBeTruthy();
    myList.insert(14);
    expect(myList.isEmpty()).toBeFalsy();
  });
});

describe('Test method insert()', () => {
  test('Test insert()', () => {
    const myList = new JSDoubleLinkList();
    expect(myList.isEmpty()).toBeTruthy();
    const nbElements = 10;
    for (let i = 0; i < nbElements; i++) {
      myList.insert(`elem-${i}`);
      expect(myList.size()).toEqual(i + 1);
    }
  });
});

describe('Test method remove', () => {
  test('should return false since the list is empty', () => {
    const myList = new JSDoubleLinkList();
    expect(myList.remove(15)).toBeFalsy();
  });

  test('should return false since the element does not exists in the list', () => {
    const myList = new JSDoubleLinkList();
    myList.insert(13);
    myList.insert(14);
    expect(myList.remove(15)).toBeFalsy();
  });

  test('should return true - remove the head', () => {
    const myList = new JSDoubleLinkList();
    myList.insert(13);
    myList.insert(14);
    myList.insert(16);
    myList.insert(17);
    expect(myList.size()).toEqual(4);
    expect(myList.remove(17)).toBeTruthy();
    expect(myList.size()).toEqual(3);
  });

  test('should return true - remove the element which is not the head of the list', () => {
    const myList = new JSDoubleLinkList();
    myList.insert(13);
    myList.insert(14);
    myList.insert(16);
    myList.insert(17);
    expect(myList.size()).toEqual(4);
    expect(myList.remove(14)).toBeTruthy();
    expect(myList.size()).toEqual(3);
    expect(myList.remove(16)).toBeTruthy();
    expect(myList.remove(17)).toBeTruthy();
    expect(myList.remove(13)).toBeTruthy();
    expect(myList.isEmpty()).toBeTruthy();
  });

  test('should return true - remove the head - user defined comparator', () => {
    const myList = new JSDoubleLinkList(comparator);
    myList.insert({ name: 'X', id: 1 });
    myList.insert({ name: 'Y', id: 2 });
    myList.insert({ name: 'Z', id: 3 });
    expect(myList.size()).toEqual(3);
    expect(myList.remove({ name: 'Z', id: 3 })).toBeTruthy();
    expect(myList.size()).toEqual(2);
  });

  test('should return true - remove the element which is not the head of the list', () => {
    const myList = new JSDoubleLinkList(comparator);
    myList.insert({ name: 'X', id: 1 });
    myList.insert({ name: 'Y', id: 2 });
    myList.insert({ name: 'Z', id: 3 });
    expect(myList.size()).toEqual(3);
    expect(myList.remove({ name: 'Y', id: 2 })).toBeTruthy();
    expect(myList.size()).toEqual(2);
  });

});


