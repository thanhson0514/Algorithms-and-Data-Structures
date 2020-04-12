function hash(string, max) {
  var hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

function hashTable() {
  const STORAGE_LIMIT = 12;
  var storage = [];

  this.print = function () {
    return storage;
  };

  // add item into the table
  this.add = function (key, value) {
    var index = hash(key, STORAGE_LIMIT);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      var inserted = false;

      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (!inserted) {
        storage[index].push([key, value]);
      }
    }
  };

  // remove item with key of the hash table
  this.remove = function (key) {
    var index = hash(key, STORAGE_LIMIT);

    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  // see the value with specify key
  this.lookup = function (key) {
    var index = hash(key, STORAGE_LIMIT);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
}

const user = new hashTable();

// console.log(user.print());
console.log(hash("Son", 14));
user.add("Son", 14);
user.add("Hung", 24);
user.add("Hai", 10);
user.add("Hieu", 5);
user.add("Son", 15);
user.remove("Son");
console.log(user.print());
console.log(user.lookup("Hieu"));
