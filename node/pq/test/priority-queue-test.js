var vows = require('vows'),
    assert = require('assert'),
    queue = require('../pq/pq.js');

vows.describe('A Priority queue').addBatch({
    'can be created': {
        topic: function() {
            return new queue.PriorityQueue();
        },
        "should be a pq": function(topic) {
            assert.instanceOf(topic, queue.PriorityQueue);
        }
    },
    'can put items': {
        topic: function() {
            var pq = new queue.PriorityQueue();
            pq.put(1);

            return pq;
        },
        "should have one item in items array": function(topic) {
            assert.equal(topic.size(), 1);
        }
    },
    'items stay in ascending order': {
        topic: function() {
            var pq = new queue.PriorityQueue();
            pq.put(5);
            pq.put(4);
            pq.put(3);
            pq.put(2);
            pq.put(1);

            return pq;
        },
        "should have proper items": function(topic) {
            assert.deepEqual(topic.items, [null, 1, 2, 4, 5, 3]);
        }
    },
    'items stay in ascending order after removal': {
        topic: function() {
            var pq = new queue.PriorityQueue();
            pq.put(5);
            pq.put(4);
            pq.put(3);
            pq.put(2);
            pq.put(1);

            var item = pq.pop();

            return [item, pq];
        },
        "should have proper items": function(topic) {
            var item = topic[0];
            var pq = topic[1];

            assert.equal(item, 1);
            assert.deepEqual(pq.items, [null, 2, 3, 4, 5]);
        }
    }

}).export(module);
