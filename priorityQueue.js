function PriorityQueue() {
  this.collection = [];
  // see all elements in the queue
  this.printCollection = function () {
    console.log(this.collection);
  };

  /*
    Add elemnt into the queue, if element is higher priority, it will be
    replace to element is lower priority
  */
  this.enqueue = function (value) {
    if (this.isEmpty()) {
      this.collection.push(value);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (value[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, value);
          added = true;
          break;
        }
      }
      // check the element is priority
      if (!added) {
        this.collection.push(value);
      }
    }
  };

  // remove the last element in the queue
  this.dequeue = function () {
    return this.collection.shift();
  };

  // return length the queue
  this.size = function () {
    return this.collection.length;
  };

  // return the front in the queue
  this.front = function () {
    return this.collection[0];
  };

  // check the queue is empty
  this.isEmpty = function () {
    return this.collection.length === 0;
  };
}

var pq = new PriorityQueue();
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
pq.enqueue(["Briana Swift", 2]);
pq.printCollection();
pq.dequeue();
console.log("front:", pq.front());
pq.printCollection();
