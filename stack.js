const myStack = function () {
  this.count = 0;
  this.storage = {};

  // add element
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // remove element
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
  };

  // displaying the contents of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

const stack = new myStack();

stack.push(2);
stack.push(5);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
