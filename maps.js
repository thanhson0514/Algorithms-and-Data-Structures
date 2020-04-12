function myMaps() {
  this.collection = [];
  this.count = 0;

  // return the length the map
  this.size = function () {
    return this.count;
  };

  // set key and value for map
  this.set = function (key, value) {
    this.collection[key] = value;
    this.count++;
  };

  this.has = function (key) {
    return key in this.collection;
  };

  this.get = function (key) {
    return key in this.collection ? this.collection[key] : null;
  };

  this.delete = function (key) {
    if (key in this.collection) {
      delete this.collection[key];
      this.count--;
    }
  };

  this.clear = function() {
      this.collection = [];
      this.count = 0;
  }
}
