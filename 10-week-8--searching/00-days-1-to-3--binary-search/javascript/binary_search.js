function binary_search(array, target){
  if (array.length === 0 ) return false

  let mid = Math.floor(array.length/2)
  let midVal = array[mid]

  if (midVal === target ) return true

  return binary_search((midVal > target ? array.slice(0,mid) : array.slice(mid+1)), target)


  // initialize integer variable middle with middle index of input array
  // initialize integer variable middle_value with middle value from array

  // return true if middle_value == target

  // if middle_value > target:
  //   return binary_search(left half of input, target)
  // else:
  //   return binary_search(right half of input, target)
}

// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
function binarySearchIndex(array, target) {
  if (array.length === 0 ) return -1

  let mid = Math.floor(array.length/2)
  let midVal = array[mid]

  if (midVal === target ) return array.indexOf(target)

  return binarySearchIndex((midVal > target ? array.slice(0,mid) : array.slice(mid+1)), target)

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", binary_search([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", binary_search([3, 5, 9], 10));

  // UNCOMMENT FOR BONUS
  console.log("");
  console.log("Expecting: 0");
  console.log("=>", binarySearchIndex([1, 2, 3], 1));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([4, 7, 20], 100));
}

module.exports = {
  binary_search,
  binarySearchIndex
};

// Add a written explanation of your solution
