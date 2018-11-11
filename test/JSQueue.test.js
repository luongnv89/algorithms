const { JSQueue } = require("../data_structs/JSQueue");

describe("Test construction of queue", () => {
  test("queue size is negative", () => {
    expect(new JSQueue(-1)).toMatchObject({});
  });

  test("queue size is not an integer number", () => {
    expect(new JSQueue(1.3)).toMatchObject({});
  });

  test("queue size is not a number", () => {
    expect(new JSQueue("1")).toMatchObject({});
  });

  test("A new queue", () => {
    const myQueue = new JSQueue(5);
    expect(myQueue).toHaveProperty("_maxSize");
    expect(myQueue).toHaveProperty("_data");
    expect(myQueue).toHaveProperty("_head");
    expect(myQueue).toHaveProperty("_tail");
  });
});

describe("Check if the queue is empty", () => {
  test("should be empty", () => {
    const myQueue = new JSQueue(5);
    expect(myQueue.isEmpty()).toBeTruthy();
  });

  test("should not be empty", () => {
    const myQueue = new JSQueue(5);
    expect(myQueue.enqueue(15)).toBeTruthy();
    expect(myQueue.isEmpty()).toBeFalsy();
  });
});

describe("Check the size of the queue", () => {
  test("should return 0", () => {
    const myQueue = new JSQueue(5);
    expect(myQueue.size()).toEqual(0);
  });

  test("should return the size of the queue", () => {
    const myQueue = new JSQueue(5);
    const maxSize = 5;
    // Add to queue until the queue is full
    for (let index = 0; index < maxSize; index++) {
      expect(myQueue.enqueue(index)).toBeTruthy();
      expect(myQueue.size()).toEqual(index + 1);
    }
    expect(myQueue.size()).toEqual(maxSize);
    expect(myQueue.isFull()).toBeTruthy();
    // Remove some element from the queue
    for (let index = 0; index < 3; index++) {
      expect(myQueue.dequeue()).not.toBeNull();
      expect(myQueue.size()).toEqual(maxSize - (index + 1));
    }
    // Add some element back to the queue util the queue is full again
    for (let index = 0; index < 3; index++) {
      expect(myQueue.enqueue(index)).toBeTruthy();
    }
    expect(myQueue.size()).toEqual(maxSize);
  });
});

describe("Check if the queue is full", () => {
  test("should not be full", () => {
    const myQueue = new JSQueue(5);
    expect(myQueue.isFull()).toBeFalsy();
  });

  test("should be full", () => {
    const myQueue = new JSQueue(5);
    for (let index = 0; index < 5; index++) {
      expect(myQueue.enqueue(index)).toBeTruthy();
    }
    expect(myQueue.isFull()).toBeTruthy();
  });
});

describe("Check enqueue()", () => {
  test("enqueue should return true", () => {
    const maxSize = 5;
    const myQueue = new JSQueue(maxSize);
    for (let index = 0; index < maxSize; index++) {
      expect(myQueue.enqueue(index)).toBeTruthy();
    }
  });

  test("enqueue should return false because the queue is full", () => {
    const maxSize = 5;
    const myQueue = new JSQueue(maxSize);
    for (let index = 0; index < maxSize; index++) {
      expect(myQueue.enqueue(index)).toBeTruthy();
    }
    expect(myQueue.enqueue(15)).toBeFalsy();
  });

  test("enqueue should return true - in case the head index smaller than the tail index", () => {
    const maxSize = 5;
    const myQueue = new JSQueue(maxSize);
    for (let index = 0; index < maxSize; index++) {
      expect(myQueue.enqueue(index)).toBeTruthy();
    }
    expect(myQueue.dequeue()).toEqual(0);
    expect(myQueue.dequeue()).toEqual(1);
    expect(myQueue.enqueue(4)).toBeTruthy();
    expect(myQueue.enqueue(5)).toBeTruthy();
    expect(myQueue.enqueue(6)).toBeFalsy();
  });
});

describe("Check dequeue()", () => {
  test("dequeue should return null", () => {
    const maxSize = 5;
    const myQueue = new JSQueue(maxSize);
    expect(myQueue.dequeue()).toBeNull();
  });

  test("dequeue should return value", () => {
    const maxSize = 5;
    const myQueue = new JSQueue(maxSize);
    const myValue = { name: "Louis" };
    expect(myQueue.enqueue(myValue)).toBeTruthy();
    expect(myQueue.dequeue()).toMatchObject(myValue);
    expect(myQueue.dequeue()).toBeNull();
  });

  test("dequeue with the head is smaller than the tail", () => {
    const maxSize = 5;
    const myQueue = new JSQueue(maxSize);
    // null, null, nul, null, null
    for (let i = 0; i < maxSize; i++) {
      expect(myQueue.enqueue(i)).toBeTruthy();
    }
    // 0, 1, 2, 3, 4
    for (let i = 0; i < 2; i++) {
      expect(myQueue.dequeue()).toEqual(i);
    }
    // null, null, 2, 3, 4
    for (let i = 0; i < 2; i++) {
      expect(myQueue.enqueue(maxSize + i)).toBeTruthy();
    }
    // 5, 6, 2, 3, 4
    for (let i = 0; i < 2; i++) {
      expect(myQueue.dequeue()).toEqual(i + 2);
    }
    // 5, 6, null, null, 4
  });
});

describe("Check head()", () => {
  test("head should return null", () => {
    const maxSize = 5;
    const myQueue = new JSQueue(maxSize);
    expect(myQueue.head()).toBeNull();
  });

  test("head should return a value", () => {
    const maxSize = 5;
    const myQueue = new JSQueue(maxSize);
    const myValue = { name: "Louis" };
    expect(myQueue.enqueue(myValue)).toBeTruthy();
    expect(myQueue.head()).toMatchObject(myValue);
    expect(myQueue.head()).toMatchObject(myValue);
  });
});
