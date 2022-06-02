class MinHeap {
    constructor() {
      this.heap = [null];
    }
    top() {
        if(this.heap.length > 1){
            return this.heap[0]
        }
        else{
            return null
        }
    }
    insert(num) {
        this.heap.push(num)
        this.shiftUp()
    }

    shiftUp(){
      // LAST INDEX OF THE ARRAY
    var indexToShift = this.heap.length - 1

    while(indexToShift > 1){
        var parentIndex = Math.floor(indexToShift / 2)

        if(this.heap[parentIndex] <= this.heap[indexToShift]){
            break
        }

        var temp = this.heap[parentIndex]
        this.heap[parentIndex] = this.heap[indexToShift]
        this.heap[indexToShift] = temp

        indexToShift = parentIndex
    }
}

    /**
     * Extracts the min num from the heap and then re-orders the heap to
     * maintain order so the next min is ready to be extracted.
     * 1. Save the first node to a temp var.
     * 2. Pop last node off and set idx1 equal to the popped value.
     * 3. Iteratively swap the old last node that is now at idx1 with it's
     *    smallest child IF the smallest child is smaller than it.
     * - Time: O(log n) logarithmic due to shiftDown.
     * - Space: O(1) constant.
     * @returns {?number} The min number or null if empty.
     */
    extract() {    
        var indexToShift = this.heap.length - 1
        var minTemp = this.heap[1]
        this.heap[1] = this.heap[indexToShift]
        this.heap[indexToShift] = minTemp
        this.heap.pop()
        indexToShift = 1 
        while(indexToShift < this.heap.length - 1){
            var leftChildIndex = indexToShift * 2
            var rightChildIndex = indexToShift * 2 + 1
            if(this.heap[leftChildIndex] > this.heap[rightChildIndex]){
                if(this.heap[indexToShift] < this.heap[rightChildIndex]){
                    var temp = this.heap[indexToShift]
                    this.heap[indexToShift] = this.heap[rightChildIndex]
                    this.heap[rightChildIndex] = temp
                }
                else return minTemp
            }

            if(this.heap[leftChildIndex] < this.heap[rightChildIndex]){
                if(this.heap[indexToShift] < this.heap[leftChildIndex]){
                    var temp = this.heap[indexToShift]
                    this.heap[indexToShift] = this.heap[leftChildIndex]
                    this.heap[rightChildIndex] = temp
                } 
                else return minTemp
            }

            



          // SWAP THE NUMBER TO REMOVE AND THE LAST NUMBER IN ARRAY
        // .pop() THE NUMBER TO REMOVE AND STORE IT IN A TEMP VARIABLE
  
  
        // shiftDown
        // LOOP UNTIL THE INDEX REACHES THE END OF THE ARRAY (this.heap.length - 1)
        // SWAP WITH THE LESSER OF THE TWO CHILDREN VALUES
  
  
        // RETURN THE TEMP VARIABLE
        
      }
  
    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
    return;
    }
  
    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
  
    console.log(
    " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
    );
  
      this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
    }

    /**
   * Extracts the min num from the heap and then re-orders the heap to
   * maintain order so the next min is ready to be extracted.
   * 1. Save the first node to a temp var.
   * 2. Pop last node off and set idx1 equal to the popped value.
   * 3. Iteratively swap the old last node that is now at idx1 with it's
   *    smallest child IF the smallest child is smaller than it.
   * - Time: O(log n) logarithmic due to shiftDown.
   * - Space: O(1) constant.
   * @returns {?number} The min number or null if empty.
   */