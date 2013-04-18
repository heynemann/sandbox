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
    }
}).export(module);
