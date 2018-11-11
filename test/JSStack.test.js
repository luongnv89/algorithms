const JSStack = require("../data_structs/JSStack").JSStack;

describe("Test creating a stack", () => {
  test("stack size is negative", () => {
    expect(new JSStack(-1)).toMatchObject({});
  });

  test("stack size is not an integer number", () => {
    expect(new JSStack(1.2)).toMatchObject({});
  });

  test("stack size is not a number", () => {
    expect(new JSStack("a")).toMatchObject({});
  });

  test("A new JSstack should not be null", () => {
    const myStack = new JSStack(5);
    expect(myStack).toHaveProperty("_size");
    expect(myStack).toHaveProperty("_maxSize");
    expect(myStack).toHaveProperty("_data");
  });
});

describe("Test checking if the stack is empty", () => {
  test("stack is empty", () => {
    const myStack = new JSStack(5);
    expect(myStack.isEmpty()).toBeTruthy();
  });

  test("stack is not empty", () => {
    const myStack = new JSStack(5);
    myStack.push(5);
    expect(myStack.isEmpty()).toBeFalsy();
  });
});

describe("Test checking if the stack is full", () => {
  test("stack is not full", () => {
    const myStack = new JSStack(5);
    expect(myStack.isFull()).toBeFalsy();
  });

  test("stack is full", () => {
    const myStack = new JSStack(5);
    for (let i = 0; i < 5; i++) {
      myStack.push(i);
    }
    expect(myStack.isFull()).toBeTruthy();
  });
});

describe("Test pushing an element", () => {
  test("stack is not full", () => {
    const myStack = new JSStack(5);
    expect(myStack.isEmpty()).toBeTruthy();
    expect(myStack.push(10)).toBeTruthy();
    expect(myStack.isEmpty()).toBeFalsy();
  });

  test("stack is full", () => {
    const myStack = new JSStack(5);
    expect(myStack.isFull()).toBeFalsy();
    for (let i = 0; i < 5; i++) {
      expect(myStack.push(i)).toBeTruthy();
    }
    expect(myStack.isFull()).toBeTruthy();
    expect(myStack.push(10)).toBeFalsy();
  });
});

describe("Test popping", () => {
  test("stack is empty", () => {
    const myStack = new JSStack(5);
    expect(myStack.isEmpty()).toBeTruthy();
    expect(myStack.pop()).toBeNull();
  });

  test("stack is not empty", () => {
    const myStack = new JSStack(5);
    expect(myStack.isEmpty()).toBeTruthy();
    expect(myStack.push(15)).toBeTruthy();
    expect(myStack.pop()).toEqual(15);
    expect(myStack.pop()).toBeNull();
  });
});

describe("Test topping", () => {
  test("stack is empty", () => {
    const myStack = new JSStack(5);
    expect(myStack.isEmpty()).toBeTruthy();
    expect(myStack.top()).toBeNull();
  });

  test("stack is not empty", () => {
    const myStack = new JSStack(5);
    expect(myStack.isEmpty()).toBeTruthy();
    expect(myStack.push(15)).toBeTruthy();
    expect(myStack.top()).toEqual(15);
  });
});

describe("Test size", () => {
  test("should return 0", () => {
    const myStack = new JSStack(5);
    expect(myStack.size()).toEqual(0);
  });

  test("should return the size of stack", () => {
    const myStack = new JSStack(5);
    for (let i = 0; i < 5; i++) {
      expect(myStack.push(i)).toBeTruthy();
      expect(myStack.size()).toEqual(i + 1);
    }
  });
});
