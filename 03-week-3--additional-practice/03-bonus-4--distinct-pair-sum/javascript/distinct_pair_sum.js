function distinctPairSum(arr, k) {
  let pairs = {}

  arr.slice(0, -1).forEach((num, idx) => {
    const nextValue = arr[idx + 1];

    if (num + nextValue === k && pairs[num] === undefined && pairs[nextValue] === undefined) { 
        // if the pair sums to k, and the pair is not pairs
        // add a key to pairs where the num is the key and the value is the pair
        // this can be used to verify if later pairs have already been found
        pairs[num] = [num, nextValue];
    }
  });

  return Object.values(pairs);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
