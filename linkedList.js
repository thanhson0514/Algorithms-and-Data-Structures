function LinkedList() {
  var length = 0;
  var head = null;

  function Node(element) {
    this.element = element;
    this.next = null;
  }

  // add element to the list
  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  // return head item in the list
  this.head = function () {
    return head;
  };

  // see the length to the list
  this.size = function () {
    return length;
  };

  // remove element in the list
  this.remove = function (element) {
    var currentNode = head;
    var previousNode;
    if (element === currentNode.element) {
      head = currentNode.next;
    } else {
      // check element is equal to element in the list
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next; 
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  // check the list is empty
  this.isEmpty = function () {
    return length === 0;
  };

  // check index of element in the list
  this.indexOf = function (element) {
    var currentNode = head;
    var index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1;
  };

  // find item in the list with argument is index
  this.elementAt = function (index) {
    var currentNode = head;
    var count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode;
  };

  // add element into the list with index
  this.addAt = function (element, index) {
    var node = new Node(element);

    var currentNode = head;
    var currentIndex = 0;
    var previousNode;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }

    length++;
  };

  // remove element with index :v
  this.removeAt = function (index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if (index < 0 || index >= length) {
      return null;
    }

    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };
}

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(5);
linkedList.add(2);
console.log(linkedList.size());
console.log(linkedList.head());
linkedList.remove(5);
console.log(linkedList.size());
console.log(linkedList.indexOf(5));
console.log(linkedList.indexOf(4));
console.log(linkedList.elementAt(1));
linkedList.addAt(6, 1);
console.log(linkedList.elementAt(1));
linkedList.removeAt(1);
console.log(linkedList.elementAt(1));
console.log(linkedList.head());

