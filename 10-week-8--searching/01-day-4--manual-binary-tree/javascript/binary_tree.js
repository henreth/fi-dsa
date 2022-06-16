class Node {
  constructor(value, left = null, right = null) {
    // add your Node class code
    this.value = value
    this.left = left
    this.right = right

  }
}

// list = [1, 4, 7]
function oneToSeven() {
  // manually create the BST
  // then return the root node
  let left = new Node(1)
  let right = new Node(7)

  return new Node(4, left, right)
}

// list = [10, 40, 45, 46, 50]
function tenToFifty() {
  let leftLeaf = new Node(10)
  let left = new Node(40, leftLeaf)
  let rightLeaf = new Node(50)
  let right = new Node(46, rightLeaf)

  return new Node(45, left, right)

}

// list = [-20, -19, -17, -15, 0, 1, 2, 10]
function negativeToPositive() {
  let n20 = new Node(-20)
  let n17 = new Node(-17)
  let n19 = new Node(-19,n20,n17)

  let one = new Node(1)
  let zero = new Node(0, null, one)
  let ten = new Node(10)
  let two = new Node(2,zero,ten)

  return new Node(-15, left, right)
}

if (require.main === module) {
  // add your own tests in here if you want
}

module.exports = {
  Node,
  oneToSeven,
  tenToFifty,
  negativeToPositive
};

// Please add your pseudocode to this file
// And a written explanation of your solution
