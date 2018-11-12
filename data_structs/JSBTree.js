class JSBNode {
  constructor(value) {
    this._value = value;
    this._left = null;
    this._right = null;
  }

  value () {
    return this._value;
  }

  left() {
    return this._left;
  }

  right() {
    return this._right;
  }

  setLeft(node) {
    this._left = node;
  }

  setRight(node) {
    this._right = node;
  }
}

const __comparator = (v1, v2) => {
  if (typeof v1 === 'object') {
    const strV1 = JSON.stringify(v1);
    const strV2 = JSON.stringify(v2);
    if (strV1 === strV2) return 1;
    if (strV1 > strV2) return 0;
    else return 2;
  }
  if (v1 === v2) return 1;
  if (v1 > v2) return 0;
  else return 2;
};

class JSBTree {
  constructor(comparator) {
    this._root = null;
    this._comparator = comparator ? comparator : __comparator;
  }

  isEmpty() {
    return this._root === null;
  }

  add(value, _root) {
    let root = _root ? _root : this._root;
    if (root === null) {
      root = new JSBNode(value);
      if (this._root === null) this._root = root;
      return true;
    }

    if (this._comparator(root.value(), value) === 1) {
      return false;
    }

    const newNode = new JSBNode(value);

    if (this._comparator(root.value(), value) === 0) {
      if (root.left() === null) {
        root.setLeft(newNode);
        return true;
      }
      return this.add(value, root.left());
    }

    if (root.right() === null) {
      root.setRight(newNode);
      return true;
    }
    return this.add(value, root.right());
  }

  addNode(node, _root) {

    if (node === null) return false;
    if (typeof node !== typeof (new JSBNode(0))) return false;
    const value = node.value();
    let root = _root ? _root : this._root;
    if (root === null) {
      root = node;
      if (this._root === null) this._root = root;
      return true;
    }

    if (this._comparator(root.value(), value) === 1) {
      return false;
    }

    if (this._comparator(root.value(), value) === 0) {
      if (root.left() === null) {
        root.setLeft(node);
        return true;
      }
      return this.addNode(node, root.left());
    }

    if (root.right() === null) {
      root.setRight(node);
      return true;
    }
    return this.addNode(node, root.right());
  }

  findELementByValue(value, _root) {
    let root = _root ? _root : this._root;
    if (root === null) return null;
    if (this._comparator(root.value(), value) === 1) {
      return root;
    }

    if (this._comparator(root.value(), value) === 0) {
      if (root.left() === null) return null;
      return this.findELementByValue(value, root.left());
    }
    if (root.right() === null) return null;
    return this.findELementByValue(value, root.right());
  }

  remove(value, _root) {
    let root = _root ? _root : this._root;
    if (root === null) return false;
    if (this._comparator(root.value(), value) === 1) {
      const toBeDeleted = root;
      if (toBeDeleted.left() === null) {
        root = toBeDeleted.right();
        return true;
      }
      if (toBeDeleted.right() === null) {
        root = toBeDeleted.left();
        return true;
      }

      root = toBeDeleted.right();
      this.addNode(toBeDeleted.left(), root);
      return true;
    }

    if (this._comparator(root.value(), value) === 0) {
      if (root.left() === null) return false;
      return this.remove(value, root.left());
    }
    if (root.right() === null) return false;
    return this.remove(value, root.right());
  }

  removeNode(node, _root) {
    let root = _root ? _root : this._root;
    if (root === null) return false;
    if (!node) return false;
    if (typeof node !== typeof root) return false;
    const value = node.value();
    if (this._comparator(root.value(), value) === 1) {
      const toBeDeleted = root;
      if (toBeDeleted.left() === null) {
        root = toBeDeleted.right();
        return true;
      }
      if (toBeDeleted.right() === null) {
        root = toBeDeleted.left();
        return true;
      }

      root = toBeDeleted.right();
      this.addNode(toBeDeleted.left(), root);
      return true;
    }

    if (this._comparator(root.value(), value) === 0) {
      if (root.left() === null) return false;
      return this.removeNode(node, root.left());
    }
    if (root.right() === null) return false;
    return this.removeNode(node, root.right());
  }
}

module.exports = {
  JSBNode,
  JSBTree
};