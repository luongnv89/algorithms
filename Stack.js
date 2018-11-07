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

class Stack {
  constructor(stackSize) {
    if (stackSize < 0) return null;
    if (stackSize !== parseInt(stackSize, 10)) return null;
    this.size = stackSize;
    this.data = Array(stackSize);
    this.currentSize = 0;
  }

  isEmpty () {
    return this.currentSize === 0;
  }

  isFull () {
    return this.currentSize === this.size;
  }

  push (elem) {
    if (this.isFull()) {
      return false;
    }
    this.data[this.currentSize] = elem;
    this.currentSize++;
    return true;
  }

  pop () {
    if (this.isEmpty()) {
      return null;
    }
    const ret = this.data[this.currentSize - 1];
    this.currentSize--;
    return ret;
  }

  top () {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[this.currentSize - 1];
  }
}

module.exports = {
  Stack,
};
