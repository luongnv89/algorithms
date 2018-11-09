"use strict"
/**
 *  - Set of elements of the same type
    - The number of elements varies and is finite (≥ 0)
    - LIFO (Last In First Out) management
 *
 * Operations:
  - stack new ( ) ;
  - boolean is empty ( stack ) ;
  - stack push ( stack, type ) ;
  - stack pop ( stack ) ;
  - type top ( stack ) ;
 *
 */

class JSStack {
  constructor(stackSize) {
    if (stackSize < 0) return null;
    if (stackSize !== parseInt(stackSize, 10)) return null;
    this._maxSize = stackSize;
    this._data = Array(stackSize).fill(null);
    this._size = 0;
  }

  isEmpty() {
    return this._size === 0 && this._data[this._size] === null;
  }

  isFull() {
    return this._size === this._maxSize - 1;
  }

  push(elem) {
    if (this.isFull()) {
      return false;
    }
    if (this._data[this._size] !== null) {
      this._size++;
    };
    this._data[this._size] = elem;
    return true;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const ret = this._data[this._size];
    this._data[this._size] = null;
    if (this._size > 0) {
      this._size--;
    }
    return ret;
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this._data[this._size];
  }

  size() {
    if (this._data[this._size] === null) return 0;
    return (this._size + 1);
  }
}

module.exports = {
  JSStack,
};
