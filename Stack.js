//! stack
class Stack {
  constructor() {
    this.item = [];
  }

  push(value) {
    this.item.push(value); //parameter
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item[this.item.length - 1]; //? Last element view
  }

  isEmpty() {
    return this.item.length === 0;
  }

  print() {
    console.log(this.item.slice().reverse().join());
  }
}

const stack = new Stack();