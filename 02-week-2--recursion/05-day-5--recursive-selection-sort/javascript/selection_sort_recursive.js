function selectionSortRecursive(arr) {
  if (arr.length === 0) return [];
  
    // use spread operator to find the minimum value of the existing array
    const min = Math.min(...arr);
    // find the index of the minimum 
    const idx = arr.indexOf(min);
    // remove the presence of the previous minimum
    arr.splice(idx, 1);
    //run until the length of the original array, arr is 0
    let res = selectionSortRecursive(arr)
    res.unshift(min)
    return res
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
