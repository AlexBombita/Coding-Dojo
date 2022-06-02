//==========================//
//         TESTING          //
//==========================//


const emptyTree = new BinarySearchTree();



const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   4  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(4);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.right = new BSTNode(20);
threeLevelTree.root.right.left = new BSTNode(13);


// console.log(threeLevelTree.max())
// console.log(threeLevelTree.min())
console.log(threeLevelTree.contains(13)) // return true
console.log(threeLevelTree.contains(30)) // return false
console.log(threeLevelTree.range()) // return 18



// TUESDAY -------------------------------------------------------------------//

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    //  contains(searchVal) { 
        // 1. BST IS EMPTY
        // if(this.isEmpty()){
        //     console.log("BST IS EMPTY")
        //     return
        // }
        // 2. BST IS NOT EMPTY
    //     var runner = this.root
    //     while(runner.left != null){
    //         runner = runner.left
    //     }
    //     return runner.data
    // }
        
        // If the searchVal is less than the runner data, go left
        // if(searchVal < runner.data){
        //     runner = runner.left
        // }
        // else {runner = runner.right}
        
        // If the searchVal is greater than the runner data, go right
        // else if (searchVal > runner.data){
        //     runner = runner.right
        // }
        // else if (searchVal === runner.data){
        //     return true
        // }
        // else {return false}
        contains(searchVal) { 
            var runner = this.root
            while(runner != null){
                if(searchVal < runner.data){
                    runner = runner.left
                }
                else if (searchVal > runner.data){
                    runner = runner.right
                }
                else if (searchVal === runner.data){
                    return true
                }
            }
            return false
        }


    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) { }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(startNode = this.root) { }