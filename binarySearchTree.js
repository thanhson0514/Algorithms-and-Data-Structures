// create node
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// data structure binary
// BST: Binary Search Tree
class BST {
  constructor() {
    this.root = null;
  }

  // add node
  add(data) {
    var node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      // recursive
      const searchTree = function (node) {
        if (data < node.data) {
          // if data less than element at node left
          if (!node.left) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            searchTree(node.left);
          }
        } else if (data > node.data) {
          // if data less than element at node right
          if (!node.right) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            searchTree(node.right);
          }
        }
      };
      searchTree(node);
    }
  }

  // find element min in binary search tree
  findMin() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  // find elemnt max in binary search tree
  findMax() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      }
      if (!current.data) {
        return null;
      }
    }

    return current;
  }

  // check element is live in the node
  isPresent(data) {
    let current = this.root;

    while (current) {
      if (current.data === data) {
        return true;
      }
      if (current.data > data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  // remove element in the node
  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
  print() {
    return this.root;
  }
}

const bst = new BST();

bst.add(6);
bst.add(2);
bst.add(4);
bst.add(8);
bst.add(7);
bst.add(3);
bst.add(13);
bst.add(5);
bst.add(9);
bst.add(16);
bst.add(15);
bst.add(14);
bst.add(11);
// console.log(bst.print());
// console.log(bst.find(11));
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(8));
console.log(bst.isPresent(11));
bst.remove(13);
console.log(bst.print().right.right);
