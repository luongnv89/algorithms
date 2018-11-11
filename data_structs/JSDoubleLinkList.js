class JSDoubleLinkListNode {
  constructor(data) {
    this._value = data;
    this._next = null;
    this._prev = null;
  }

  next() {
    return this._next;
  }

  prev() {
    return this._prev;
  }

  value() {
    return this._value;
  }

  setNext(nextElem) {
    this._next = nextElem;
  }

  setPrev(prevElem) {
    this._prev = prevElem;
  }
}

const __comparator = (elem1, elem2) => {
    if (typeof elem1 === 'object') {
      return JSON.stringify(elem1) === JSON.stringify(elem2);
    }
    return elem1 === elem2;
  }

class JSDoubleLinkList {

  constructor(comparator = null) {
    this._head = null;
    this._tail = null;
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
    const newElem = new JSDoubleLinkListNode(elem);
    newElem.setNext(this._head);
    if (this._head !== null) {
      this._head.setPrev(newElem);
    }
    this._head = newElem;
    this._size++;
  }

  remove(value) {
    if (this._head === null) return false;
    let currentElement = this._head;
    if (this._comparator(currentElement.value(), value)) {
      this._head = currentElement.next();
      if (this._head !== null) this._head.setPrev(null);
      this._size--;
      return true;
    }

    if (currentElement.next() === null) return false;

    while (currentElement.next() !== null) {
      const nextElement = currentElement.next();
      if (this._comparator(nextElement.value(), value)) {
        currentElement.setNext(nextElement.next());
        if (nextElement.next() !== null)
          nextElement.next().setPrev(currentElement);
        this._size--;
        return true;
      }
      currentElement = currentElement.next();
    }
    return false;
  }

}



module.exports = {
  JSDoubleLinkList,
  JSDoubleLinkListNode
};
