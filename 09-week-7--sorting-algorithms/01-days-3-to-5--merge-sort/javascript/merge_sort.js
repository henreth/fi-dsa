function merge(arr1, arr2) {
  let result =[]
  while(arr1.length && arr2.length){
    result.push((arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift());
  }
  return [...result, ...arr1, ...arr2];
}


console.log('=> [-2, 0, 1, 4]')
console.log(merge([0, 1], [-2, 4]))

function mergeSort(arr) {
  if (arr.length < 2 ) return arr 
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid,))
  return merge(left,right)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
