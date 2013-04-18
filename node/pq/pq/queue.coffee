class PriorityQueue
    constructor: () ->
        @items = [null]
        @n = 1

    size: () ->
        @items.length - 1

    put: (item) ->
        @items[@n] = item
        @swim(@n)

    swim: (itemIndex) ->

exports.PriorityQueue = PriorityQueue
