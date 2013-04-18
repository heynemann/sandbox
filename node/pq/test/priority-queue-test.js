var vows = require('vows'),
    assert = require('assert'),
    queue = require('../pq/queue.js');

vows.describe('A Priority queue').addBatch({
    'can be created': {
        topic: function() {
            return new queue.PriorityQueue();
        },
        "should be a pq": function(topic) {
            assert.instanceOf(topic, queue.PriorityQueue);
        }
    }
}).export(module);
