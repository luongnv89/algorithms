const { JSHashTable } = require('../data_structs/JSHashTable');

describe('Test init a new HashTable', () => {
  test('should return a HashTable with some properties', () => {
    const hTable = new JSHashTable();
    expect(hTable.size()).toEqual(0);
    expect(hTable).toHaveProperty('_size');
    expect(hTable).toHaveProperty('_data');
  });
});

describe('Test put()', () => {
  test('add a new element into HashTable', () => {
    const hTable = new JSHashTable();
    const nbTest = 10;
    for (let index = 0; index < nbTest; index++) {
      const element = { name: 'Name ' + index, age: index };
      const key = 'HashKey-' + index;
      hTable.put(element, key);
      expect(hTable.size()).toEqual(index + 1);
    }
  });

  test('add a new element into HashTable without key', () => {
    const hTable = new JSHashTable();
    const nbTest = 10;
    for (let index = 0; index < nbTest; index++) {
      const element = { name: 'Name ' + index, age: index };
      hTable.put(element);
      expect(hTable.size()).toEqual(index + 1);
    }
  });

  test('add a new element into HashTable with collision', () => {
    const hTable = new JSHashTable();
    const nbTest = 10;
    for (let index = 0; index < nbTest; index++) {
      const element = { name: 'Name ' + index, age: index };
      const key = `HashKey-${index % 2 === 0 ? index : (index + 1)}`;
      hTable.put(element, key);
      expect(hTable.size()).toEqual(index + 1);
    }
  });
});

describe('Test get elements', () => {
  test('get an element from HashTable', () => {
    const hTable = new JSHashTable();
    const nbTest = 10;
    for (let index = 0; index < nbTest; index++) {
      const element = { name: 'Name ' + index, age: index };
      const key = 'HashKey-' + index;
      hTable.put(element, key);
      expect(hTable.size()).toEqual(index + 1);
      expect(hTable.get(key)).toEqual([element]);
    }
  });

  test('get a list of element from HashTable with collision', () => {
    const hTable = new JSHashTable();
    const element1 = { name: 'Name 1', age: 11 };
    const element2 = { name: 'Name 2', age: 22 };
    const key = 'HashKey-12';
    hTable.put(element1, key);
    hTable.put(element2, key);
    expect(hTable.size()).toEqual(2);
    expect(hTable.get(key)).toEqual([element1, element2]);
  });
});

describe('Test remove elements', () => {
  test('remove an element from HashTable', () => {
    const hTable = new JSHashTable();
    const nbTest = 10;
    for (let index = 0; index < nbTest; index++) {
      const element = { name: 'Name ' + index, age: index };
      const key = 'HashKey-' + index;
      hTable.put(element, key);
      expect(hTable.size()).toEqual(index + 1);
      expect(hTable.get(key)).toEqual([element]);
    }

    for (let index = 0; index < nbTest; index++) {
      const element = { name: 'Name ' + index, age: index };
      const key = 'HashKey-' + index;
      expect(hTable.remove(key)).toEqual([element]);
      expect(hTable.size()).toEqual(nbTest - (index + 1));
    }
  });

  test('remove elements from HashTable with collision', () => {
    const hTable = new JSHashTable();
    const element1 = { name: 'Name 1', age: 11 };
    const element2 = { name: 'Name 2', age: 22 };
    const key = 'HashKey-12';
    hTable.put(element1, key);
    hTable.put(element2, key);
    expect(hTable.size()).toEqual(2);
    expect(hTable.remove(key)).toEqual([element1, element2]);
    expect(hTable.size()).toEqual(0);
  });
});

