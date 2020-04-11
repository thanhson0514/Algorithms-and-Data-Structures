var Queue = function () {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };

  // add element into the last queue
  this.enqueue = function (value) {
    this.collection.push(value);
  };

  // remove elment in the first to queue
  this.dequeue = function () {
    return this.collection.shift();
  };

  // see the first element in the queue
  this.front = function () {
    return this.collection[0];
  };

  // check length to the queue
  this.size = function () {
    return this.collection.length;
  };

  // check the queue is empty
  this.isEmpty = function () {
    return this.collection.length === 0;
  };
};

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(2);
queue.printCollection();
queue.size();
console.log(queue.front());
queue.dequeue();
queue.printCollection();
