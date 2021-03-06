const { JSLinkList, JSLinkListNode } = require('../data_structs/JSLinkList');

const comparator = (elem1, elem2) => {
  return elem1.id === elem2.id;
};

describe('Test for JSLinkListNode', () => {
  test('A new JSLinkListNode', () => {
    const value = 15;
    const myJSLLElement = new JSLinkListNode(value);
    expect(myJSLLElement).not.toBeNull();
    expect(myJSLLElement).toHaveProperty('_value');
    expect(myJSLLElement).toHaveProperty('_next');
    expect(myJSLLElement.next()).toBeNull();
    expect(myJSLLElement.value()).toEqual(value);
  });

  test('Test setNext', () => {
    const value1 = 15;
    const value2 = 14;
    const myJSLLElement1 = new JSLinkListNode(value1);
    const myJSLLElement2 = new JSLinkListNode(value2);
    expect(myJSLLElement1.next()).toBeNull();
    expect(myJSLLElement2.next()).toBeNull();
    myJSLLElement1.setNext(myJSLLElement2);
    expect(myJSLLElement1.next()).toMatchObject(myJSLLElement2);
  });
});


describe('Initialize a LinkList', () => {
  test('create a LinkList with default parameter', () => {
    const myList = new JSLinkList();
    expect(myList.isEmpty()).toBeTruthy();
    expect(myList).toHaveProperty('_comparator');
    expect(myList).toHaveProperty('_head');
    expect(myList).toHaveProperty('_size');
  });

  test('create a LinkList with user defined comparator', () => {
    const myList = new JSLinkList(comparator);
    expect(myList.isEmpty()).toBeTruthy();
    // expect(myList).toHaveProperty(['_comparator','_head','_size']);
  });

});

describe('Test LinkList is empty', () => {
  test('Should return true', () => {
    const myList = new JSLinkList();
    expect(myList.isEmpty()).toBeTruthy();
  });

  test('Should return false', () => {
    const myList = new JSLinkList();
    expect(myList.isEmpty()).toBeTruthy();
    myList.insert(14);
    expect(myList.isEmpty()).toBeFalsy();
  });
});

describe('Test method insert()', () => {
  test('Test insert()', () => {
    const myList = new JSLinkList();
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
    const myList = new JSLinkList();
    expect(myList.remove(15)).toBeFalsy();
  });

  test('should return false since the element does not exists in the list', () => {
    const myList = new JSLinkList();
    myList.insert(13);
    myList.insert(14);
    expect(myList.remove(15)).toBeFalsy();
  });

  test('should return true - remove the head', () => {
    const myList = new JSLinkList();
    myList.insert(13);
    myList.insert(14);
    myList.insert(16);
    myList.insert(17);
    expect(myList.size()).toEqual(4);
    expect(myList.remove(17)).toBeTruthy();
    expect(myList.size()).toEqual(3);
  });

  test('should return true - remove the element which is not the head of the list', () => {
    const myList = new JSLinkList();
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
    const myList = new JSLinkList(comparator);
    myList.insert({ name: 'X', id: 1 });
    myList.insert({ name: 'Y', id: 2 });
    myList.insert({ name: 'Z', id: 3 });
    expect(myList.size()).toEqual(3);
    expect(myList.remove({ name: 'Z', id: 3 })).toBeTruthy();
    expect(myList.size()).toEqual(2);
  });

  test('should return true - remove the element which is not the head of the list', () => {
    const myList = new JSLinkList(comparator);
    myList.insert({ name: 'X', id: 1 });
    myList.insert({ name: 'Y', id: 2 });
    myList.insert({ name: 'Z', id: 3 });
    expect(myList.size()).toEqual(3);
    expect(myList.remove({ name: 'Y', id: 2 })).toBeTruthy();
    expect(myList.size()).toEqual(2);
  });

});


