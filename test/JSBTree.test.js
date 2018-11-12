const { JSBNode, JSBTree } = require('../data_structs/JSBTree');

const comparator = (elm1, elm2) => {
  if (elm1.id === elm2.id) return 1;
  if (elm1.id > elm2.id) return 0;
  return 2;
};

describe('Test class JSBNode', () => {
  test('should return a new JSBNode', () => {
    const value = {name: 'JSBNode', age: 10};
    const node = new JSBNode(value);
    expect(node.value()).toMatchObject(value);
  });

  test('test method left and setLeft', () => {
    const value = {name: 'JSBNode', age: 10};
    const leftValue = {name: 'JSBNode Left', age: 100};
    const node = new JSBNode(value);
    const left = new JSBNode(leftValue);
    expect(node.left()).toBeNull();
    node.setLeft(left);
    expect(node.left()).toMatchObject(left);
  });

  test('test method right and setRight', () => {
    const value = {name: 'JSBNode', age: 10};
    const rightValue = {name: 'JSBNode right', age: 100};
    const node = new JSBNode(value);
    const right = new JSBNode(rightValue);
    expect(node.right()).toBeNull();
    node.setRight(right);
    expect(node.right()).toMatchObject(right);
  });

});

describe('Init a JSBTree', () => {
  test('init a JSBTree without comparator', () => {
    const bTree = new JSBTree();
    expect(bTree).toHaveProperty('_root');
    expect(bTree).toHaveProperty('_comparator');
  });

  test('init a JSBTree with comparator', () => {
    const bTree = new JSBTree(comparator);
    expect(bTree).toHaveProperty('_root');
    expect(bTree).toHaveProperty('_comparator');
  });

});

describe('Check isEmpty() method', () => {
  test('should return true with a new JSBTree', () => {
    const bTree = new JSBTree();
    expect(bTree.isEmpty()).toBeTruthy();
  });

  test('should return false with an unempty JSBTree', () => {
    const bTree = new JSBTree();
    expect(bTree.isEmpty()).toBeTruthy();
    bTree.add({id: 15});
    expect(bTree.isEmpty()).toBeFalsy();
  });

});

describe('Check findElementByValue() method', () => {
  test('should return null with an empty JSBTree', () => {
    const bTree = new JSBTree();
    expect(bTree.findELementByValue(15)).toBeNull();
  });

  test('should return null because the is not any node which has value the same as input value', () => {
    const bTree = new JSBTree(comparator);
    bTree.add({id: 15});
    bTree.add({id: 1});
    bTree.add({id: 115});
    bTree.add({id: 150});
    bTree.add({id: 125});
    expect(bTree.findELementByValue({id: 10})).toBeNull();
  });

  test('should return the root of the tree', () => {
    const bTree = new JSBTree(comparator);
    bTree.add({id: 15});
    bTree.add({id: 1});
    bTree.add({id: 115});
    bTree.add({id: 150});
    bTree.add({id: 125});
    expect(bTree.findELementByValue({id: 15})).not.toBeNull();
    expect(bTree.findELementByValue({id: 15}).value()).toMatchObject({id: 15});
  });

  test('should return a node of the tree', () => {
    const bTree = new JSBTree(comparator);
    bTree.add({id: 15});
    bTree.add({id: 1});
    bTree.add({id: 115});
    bTree.add({id: 150});
    bTree.add({id: 125});
    expect(bTree.findELementByValue({id: 125})).not.toBeNull();
    expect(bTree.findELementByValue({id: 125}).value()).toMatchObject({id: 125});
  });

  describe('add a new element by value', () => {
    test('should return true for the first element of the tree', () => {
      const bTree = new JSBTree(comparator);
      expect(bTree.add({id: 15})).toBeTruthy();
      const node = bTree.findELementByValue({id: 15});
      expect(node).not.toBeNull();
      expect(node.value()).toMatchObject({id: 15});
    });

    test('should return true for the value that does not exist in the tree', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      expect(bTree.add({id: 20})).toBeTruthy();
      const node = bTree.findELementByValue({id: 20});
      expect(node).not.toBeNull();
      expect(node.value()).toMatchObject({id: 20});
    });

    test('should return false for the value that is the value of root', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const node = bTree.findELementByValue({id: 15});
      expect(node).not.toBeNull();
      expect(node.value()).toMatchObject({id: 15});
      expect(bTree.add({id: 15})).toBeFalsy();
    });

    test('should return false for the value that is the value of a leave', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const node = bTree.findELementByValue({id: 150});
      expect(node).not.toBeNull();
      expect(node.value()).toMatchObject({id: 150});
      expect(bTree.add({id: 150})).toBeFalsy();
    });

  });

  describe('add a new node into a tree', () => {
    test('should return true for the first element of the tree', () => {
      const bTree = new JSBTree(comparator);
      const node = new JSBNode({id: 15});
      expect(bTree.addNode(node)).toBeTruthy();
      const node2 = bTree.findELementByValue(node.value());
      expect(node2).not.toBeNull();
      expect(node2.value()).toMatchObject(node.value());
    });

    test('should return true for the value that does not exist in the tree', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const newNode = new JSBNode({id: 20});
      expect(bTree.addNode(newNode)).toBeTruthy();
      const node = bTree.findELementByValue(newNode.value());
      expect(node).not.toBeNull();
      expect(node.value()).toMatchObject(newNode.value());
    });

    test('should return false for the value that is the value of root', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const node = bTree.findELementByValue({id: 15});
      expect(node).not.toBeNull();
      expect(node.value()).toMatchObject({id: 15});
      const newNode = new JSBNode({id: 15});
      expect(bTree.addNode(newNode)).toBeFalsy();
    });

    test('should return false for the value that is the value of a leave', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const node = bTree.findELementByValue({id: 150});
      expect(node).not.toBeNull();
      expect(node.value()).toMatchObject({id: 150});
      const newNode = new JSBNode({id: 150});
      expect(bTree.addNode(newNode)).toBeFalsy();
    });
  });

  describe('remove a node from a tree by value', () => {
    test('should return false for an empty tree', () => {
      const bTree = new JSBTree(comparator);
      const value = {id: 15};
      expect(bTree.remove(value)).toBeFalsy();
    });

    test('should return false since the tree does not contain any node which have value equals to input value', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const value ={id: 20};
      expect(bTree.remove(value)).toBeFalsy();
    });

    test('should return true for the value that is the value of root', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const value = {id: 15};
      expect(bTree.remove(value)).toBeTruthy();
    });

    test('should return true for the value that is the value of a leave', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const value = {id: 150};
      expect(bTree.remove(value)).toBeTruthy();
    });
  });

  describe('remove a node from a tree by value', () => {
    test('should return false for an empty tree', () => {
      const bTree = new JSBTree(comparator);
      const value = {id: 15};
      expect(bTree.remove(value)).toBeFalsy();
    });

    test('should return false since the tree does not contain any node which have value equals to input value', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const value ={id: 20};
      expect(bTree.remove(value)).toBeFalsy();
    });

    test('should return true for the value that is the value of root', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const value = {id: 15};
      expect(bTree.remove(value)).toBeTruthy();
    });

    test('should return true for the value that is the value of a leave', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const value = {id: 150};
      expect(bTree.remove(value)).toBeTruthy();
    });
  });

  describe('remove a node from a tree', () => {
    test('should return false for an empty tree', () => {
      const bTree = new JSBTree(comparator);
      const node = new JSBNode({id: 15});
      expect(bTree.removeNode(node)).toBeFalsy();
    });

    test('should return false since the tree does not contain any node which have value equals to input value', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const node = new JSBNode({id: 20});
      expect(bTree.removeNode(node)).toBeFalsy();
    });

    test('should return true for the value that is the value of root', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const node = new JSBNode({id: 15});
      expect(bTree.removeNode(node)).toBeTruthy();
    });

    test('should return true for the value that is the value of a leave', () => {
      const bTree = new JSBTree(comparator);
      bTree.add({id: 15});
      bTree.add({id: 1});
      bTree.add({id: 115});
      bTree.add({id: 150});
      bTree.add({id: 125});
      const node = new JSBNode({id: 150});
      expect(bTree.removeNode(node)).toBeTruthy();
    });
  });

});

