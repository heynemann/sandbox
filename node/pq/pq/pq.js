// Generated by CoffeeScript 1.6.2
(function() {
  var PriorityQueue;

  PriorityQueue = (function() {
    function PriorityQueue() {
      this.items = [null];
      this.n = 1;
    }

    PriorityQueue.prototype.size = function() {
      return this.items.length - 1;
    };

    PriorityQueue.prototype.put = function(item) {
      this.items[this.n] = item;
      return this.swim(this.n);
    };

    PriorityQueue.prototype.swim = function(itemIndex) {};

    return PriorityQueue;

  })();

  exports.PriorityQueue = PriorityQueue;

}).call(this);