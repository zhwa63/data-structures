function Heap(){
    this.heap = [];
}

Heap.prototype.getLeftChildIndex = function(index){
    return index * 2 + 1;
}

Heap.prototype.getRightChildIndex = function(index){
    return i = index * 2 + 2;
}

Heap.prototype.getParentIndex = function(index){
    return  Math.round((index - 1 )/2);
}

Heap.prototype.getLeftChild = function(index){
    return this.heap[this.getLeftChildIndex(index)];
}

Heap.prototype.getRightChild = function(index){
    return this.heap[this.getRightChildIndex(index)];
}

Heap.prototype.getParent = function(index){
    return this.heap[this.getParentIndex(index)];
}

Heap.prototype.getSmallerChild = function(index){
    let leftChild = this.getLeftChild(index);
    let rightChild = this.getLeftChild(index);

    if(rightChild === undefined){
        return this.getLeftChildIndex(index);
    }else if(leftChild === undefined){
        return null;
    }else{
        return this.getLeftChild(index) < this.getRightChild(index) ? this.getLeftChildIndex(index) : this.getRightChildIndex(index);
    }
}

Heap.prototype.peek = function(){
    return this.heap[0];
}

Heap.prototype.bubbleUp = function(curr){
    let parent = this.getParentIndex(curr);
    while(this.heap[curr] < this.heap[parent]){
        
        let temp = this.heap[parent];
        this.heap[parent] = this.heap[curr];
        this.heap[curr] = temp;

        curr = parent;
        parent = this.getParentIndex(curr);
    }
}

Heap.prototype.tricleDown = function(curr){
    let minChild = this.getSmallerChild(curr);

    while(this.heap[curr] > this.heap[minChild]){
        let temp = this.heap[minChild];
        this.heap[minChild] = this.heap[curr];
        this.heap[curr] = temp;

        curr = minChild;
        minChild = this.getSmallerChild(curr);
    }
}

Heap.prototype.add = function(x){
    this.heap.push(x);
    this.bubbleUp(this.heap.length-1);
}

Heap.prototype.poll = function(){
    var minItem = this.heap[0];
    this.heap[0] = this.heap[this.heap.length-1];
    this.heap.pop();
    this.tricleDown(0);

    return minItem;
}

function testHeap(){
    var minHeap = new Heap();
    var value = [1, 3, 7, 17, 25,19,100, 36,2];
    for(let i = 0; i < value.length; i++){
        minHeap.add(value[i]);
    }

    console.log("initialize", minHeap);

    for(let i = 0; i < value.length; i++){
        var minItem = minHeap.poll();
        console.log("poll min", i, "times", minItem);
    }
}

testHeap();