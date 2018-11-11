"use strict";

class JSLinkListNode {
  constructor(data) {
    this._value = data;
    this._next = null;
  }

  next() {
    return this._next;
  }

  value() {
    return this._value;
  }

  setNext(nextElem) {
    this._next = nextElem;
  }
}

const __comparator = (elem1, elem2) => {
  if (typeof elem1 === 'object') {
    return JSON.stringify(elem1) === JSON.stringify(elem2);
  }
  return elem1 === elem2;
};

class JSLinkList {

  constructor(comparator = null) {
    this._head = null;
    this._size = 0;
    this._comparator = comparator ? comparator : __comparator;
  }

  isEmpty() {
    return this._size === 0;
  }

  size() {
    return this._size;
  }

  insert(elem) {
    const newElem = new JSLinkListNode(elem);
    newElem.setNext(this._head);
    this._head = newElem;
    this._size++;
  }

  remove(value) {
    if (this._head === null) return false;
    let currentElement = this._head;
    if (this._comparator(currentElement.value(), value)) {
      this._head = currentElement.next();
      this._size--;
      return true;
    }

    if (currentElement.next() === null) return false;

    while (currentElement.next() !== null) {
      const nextElement = currentElement.next();
      if (this._comparator(nextElement.value(), value)) {
        currentElement.setNext(nextElement.next());
        this._size--;
        return true;
      }
      currentElement = currentElement.next();
    }
    return false;
  }
}

module.exports = {
  JSLinkList,
  JSLinkListNode
};
