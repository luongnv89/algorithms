/**
 *
 *  - Set of elements of the same type
    - The number of elements varies and is finite (≥ 0)
    - FIFO (First In First Out) management

  Operations
    - queue new ( ) ;
    - boolean is empty ( queue ) ;
    - queue enqueue ( queue, type ) ;
    - queue dequeue ( queue ) ;
    - type head ( queue ) ;
 */

class JSQueue {
  constructor(qSize) {
    if (qSize < 0) return null;
    if (qSize !== parseInt(qSize, 10)) return null;
    this._maxSize = qSize;
    this._data = Array(qSize).fill(null);
    this._head = 0;
    this._tail = 0;
  }

  isEmpty() {
    return this._head === this._tail && this._data[this._head] === null;
  }

  /**
   * Check if the queue is full
   * head, b, c, d, e, tail ->
   * tail, head, a, b, c, d ->
   * a, b, tail, head, c, d ->
   * a, b, c, d, tail, head ->
   * head, b, c, d, e, tail ->
   */
  isFull() {
    if (this._head === 0) return (this._tail === (this._maxSize - 1) && this._data[this._head + 1] !== null);
    if (this._head === this._tail + 1) {
      if (this._head < (this._maxSize - 1)) return this._data[this._head + 1] !== null;
      else return this._data[this._tail - 1] !== null;
    }
    return false;
  }

  enqueue(elem) {
    console.log('enqueue to : ', this._data, elem);
    if (this.isFull()) return false;
    if (this._data[this._tail] === null) {
      this._data[this._tail] = elem;
      return true;
    }

    if (this._tail === this._maxSize - 1) {
      this._tail = 0;
    } else {
      this._tail++;
    }
    this._data[this._tail] = elem;
    return true;
  }

  dequeue() {
    console.log('dequeue of: ', this._data);
    if (this.isEmpty()) return null;
    const ret = this._data[this._head];
    this._data[this._head] = null;
    if (this._head === this._maxSize - 1) {
      this._head = 0;
    } else {
      this._head++;
    }
    if (this._data[this._head] === null) {
      // reset the queue
      this._head = 0;
      this._tail = 0;
    }
    console.log('dequeue value: ', ret);
    return ret;
  }

  head() {
    return this._data[this._head];
  }
}

module.exports = {
  JSQueue,
};
