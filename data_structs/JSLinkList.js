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
      // delete currentElement;
      this._size--;
      return true;
    }

    if (currentElement.next() === null) return false;

    while (currentElement.next() !== null) {
      const nextElement = currentElement.next();
      if (this._comparator(nextElement.value(), value)) {
        currentElement.setNext(nextElement.next());
        // delete nextElement;
        this._size--;
        return true;
      }
      currentElement = currentElement.next();
    }
    return false;
  }

  insertAt(index, value) {
    if (index > this._size) return false;
    const newElem = new JSLinkListNode(value);
    if (index === 0) {
      // Insert to the head of the list
      if (this._head === null) {
        this._head = newElem;
        return true;
      } else {
        newElem.setNext(this._head);
        this._head = newElem;
        return true;
      }
    }

    let currentIndex = 0;
    let currentElement = this._head;
    while (currentIndex < index) {
      currentElement = currentElement.next();
      currentIndex++;
    }

    newElem.setNext(currentElement.next());
    currentElement.setNext(newElem);
    return true;
  }

  removeAt(index) {
    if (index >= this._size) return false;
    if (index === 0) {
      // remove head
      const deleteElem = this._head;
      this._head = this._head.next();
      // delete deleteElem;
      return true;
    }
    let currentIndex = 0;
    let currentElement = this._head;
    while (currentIndex < index - 1) {
      currentElement = currentElement.next();
      currentIndex++;
    }
    const deletedElem = currentElement.next();
    currentElement.setNext(deletedElem.next());
    // delete deletedElem;
  }

  getElementAt(index) {
    if (index >= this._size) return null;
    if (index === 0) return this._head;

    let currentIndex = 0;
    let currentElement = this._head;
    while (currentIndex < index) {
      currentElement = currentElement.next();
      currentIndex++;
    }
    return currentElement;
  }

  indexOf(value) {
    if (this.isEmpty()) return -1;
    let currentElement = this._head;
    let currentIndex = 0;
    while (currentElement !== null ) {
      if (this._comparator(currentElement.value(), value)) {
        return currentIndex;
      }
      currentElement = currentElement.next();
      currentIndex++;
    }
    return -1;
  }

  findElementByValue(value) {
    if (this.isEmpty()) return null;
    let currentElement = this._head;
    if (currentElement !== null ) {
      if (this._comparator(currentElement.value(), value)) {
        return currentElement;
      }
      currentElement = currentElement.next();
    }
    return null;
  }
}

module.exports = {
  JSLinkList,
  JSLinkListNode
};
