function mySet() {
  var collection = [];

  // this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  // method add element into the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // method remove element from the set
  this.remove = function (element) {
    if (this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // check length the set
  this.size = function () {
    return collection.length;
  };

  // the union of two sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet.values();
  };

  /* 
    Intersection: Given two sets, this function returns another 
    set that has all items that are part of both sets. 
  */
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function (element) {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet.values();
  };
}

const sets1 = new mySet();
const sets2 = new mySet();

// add set 1
sets1.add(2);
sets1.add(3);
sets1.add(4);
sets1.add(5);
// add set 2
sets1.add(4);
sets1.add(5);
sets1.add(6);

console.log(sets1.union(sets2));
console.log(sets1.intersection(sets2));

/*
 Set hiện nay được ES6 Javascript hỗ trợ nên việc viết cấu trúc dữ liệu chỉ để
 cách thức hoạt động của phương thức này. Các phương thức như union, intersection,
 difference và subset là biểu diễn tập hợp của 2 bộ phần tử. Các phương thức này mở 
 rộng cho Set (ở đây mình chỉ viết 2 phương thức union vs intersection thôi).
 
 * Union: tập hợp tất cả các phần tử từ 2 tập hợp cha khác nhau để đưa ra tập
    hợp mới có các phần tử không trùng lặp lại.
 * Intersection: Tập hợp trả về các phần tử là 1 phần trong 2 tập hợp cha.
 * Difference (ngược lại cấu trúc của Intersection): trả về tập hợp các phần tử
 * Subset: trả về biểu thức logic (true or false) nếu như phần tử của bộ này có
    trong bộ khác. (Như giao của 2 tập hợp)

    ** ES6 **
    new Set()
*/
