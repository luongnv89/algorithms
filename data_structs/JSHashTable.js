"use strict";

const DEFAULT_TABLE_SIZE = 64;
class JSHashTable {
  constructor(tbSize = DEFAULT_TABLE_SIZE) {
    this._data = {};
    this._size = 0;
    this._tbSize = tbSize;
  }

  _hashCode(key) {
    let hash = 0;
    let i;
    let chr;
    if (key.length === 0) return hash;
    for (i = 0; i < key.length; i++) {
      chr = key.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash % this._tbSize;
  }

  put(elem, _key) {
    let key = _key;
    if (!key) key = JSON.stringify(elem);
    const hash = this._hashCode(key);
    if (!this._data[hash]) {
      this._data[hash] = [];
    }
    this._data[hash].push(elem);
    this._size++;
  }

  get(key) {
    const hash = this._hashCode(key);
    if (!this._data[hash]) {
      return null;
    }
    return this._data[hash];
  }

  remove(key) {
    const hash = this._hashCode(key);
    if (!this._data[hash]) {
      return null;
    }
    const removeElements = this._data[hash];
    this._data[hash] = null;
    this._size -= removeElements.length;
    return removeElements;
  }

  size() {
    return this._size;
  }
}

module.exports = {
  JSHashTable
};
