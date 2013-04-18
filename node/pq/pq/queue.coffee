class PriorityQueue
    constructor: () ->
        @ascending = true
        @items = [null]

    size: () ->
        @items.length - 1

    put: (item) ->
        index = @items.length
        @items[index] = item
        @swim(index)

    swim: (itemIndex) ->
        k = itemIndex
        while (k > 1)
            parentIndex = Math.floor(k / 2)
            parent = @items[parentIndex]
            item = @items[k]
            if (@compare(item, parent))
                @switch(k, parentIndex)

            k = Math.floor(k / 2)

    greater: (item, other) ->
        return item > other

    lesser: (item, other) ->
        return item < other

    compare: (item, other) ->
        return @lesser(item, other) if @ascending
        return @greater(item, other) unless @ascending

    switch: (itemIndex, otherIndex) ->
        aux = @items[itemIndex]
        @items[itemIndex] = @items[otherIndex]
        @items[otherIndex] = aux

exports.PriorityQueue = PriorityQueue
