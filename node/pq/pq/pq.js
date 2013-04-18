// Generated by CoffeeScript 1.6.2
(function() {
  var PriorityQueue;

  PriorityQueue = (function() {
    function PriorityQueue() {
      this.ascending = true;
      this.items = [null];
    }

    PriorityQueue.prototype.size = function() {
      return this.items.length - 1;
    };

    PriorityQueue.prototype.put = function(item) {
      var index;

      index = this.items.length;
      this.items[index] = item;
      return this.swim(index);
    };

    PriorityQueue.prototype.pop = function() {
      var item;

      item = this.items[1];
      this["switch"](1, this.items.length - 1);
      this.items.pop();
      this.sink(1);
      return item;
    };

    PriorityQueue.prototype.swim = function(itemIndex) {
      var item, k, parent, parentIndex, _results;

      k = itemIndex;
      _results = [];
      while (k > 1) {
        parentIndex = Math.floor(k / 2);
        parent = this.items[parentIndex];
        item = this.items[k];
        if (this.compare(item, parent)) {
          this["switch"](k, parentIndex);
        }
        _results.push(k = Math.floor(k / 2));
      }
      return _results;
    };

    PriorityQueue.prototype.sink = function(itemIndex) {
      var childIndex, k, _results;

      k = itemIndex;
      _results = [];
      while (k < this.items.length) {
        childIndex = k * 2;
        if (this.compare(this.items[childIndex + 1], this.items[childIndex])) {
          childIndex++;
        }
        if (this.compare(this.items[childIndex], this.items[k])) {
          this["switch"](k, childIndex);
        }
        _results.push(k = childIndex);
      }
      return _results;
    };

    PriorityQueue.prototype.greater = function(item, other) {
      return item > other;
    };

    PriorityQueue.prototype.lesser = function(item, other) {
      return item < other;
    };

    PriorityQueue.prototype.compare = function(item, other) {
      if (this.ascending) {
        return this.lesser(item, other);
      }
      if (!this.ascending) {
        return this.greater(item, other);
      }
    };

    PriorityQueue.prototype["switch"] = function(itemIndex, otherIndex) {
      var aux;

      aux = this.items[itemIndex];
      this.items[itemIndex] = this.items[otherIndex];
      return this.items[otherIndex] = aux;
    };

    return PriorityQueue;

  })();

  exports.PriorityQueue = PriorityQueue;

}).call(this);
