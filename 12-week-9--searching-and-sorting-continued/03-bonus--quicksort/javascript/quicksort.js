function partition(array, low, high) {
  const pivot = array[high];  // choose rightmost element as pivot
  let pivotIndex = high;  // store index of pivot

  // iterate over the portion of the array that needs processing
  // use a while loop to control the index, we only want to increment it
  // if we encounter an element that's less than or equal to the pivot
  let i = low;

  while (i < pivotIndex) {
    if (array[i] <= pivot) {
      ++i;
      continue;
    }

    const beforePivot = pivotIndex - 1;
    // swap the higher valued element with the one just before the pivot
    // then swap the element just before the pivot with the pivot
    // then update the pivot index since it moved
    [array[i], array[beforePivot]] = [array[beforePivot], array[i]];
    [array[pivotIndex], array[beforePivot]] = [array[beforePivot], array[pivotIndex]];
    --pivotIndex;
  }

  return pivotIndex;
}

function quicksort(array, low = 0, high = array.length - 1) {
  if (low >= high) {
    return array;
  }

  const pivotIndex = partition(array, low, high);
  quicksort(array, low, pivotIndex - 1);
  quicksort(array, pivotIndex + 1, high);

  return array;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 2, 3, 4]));
}

module.exports = quicksort;

// Please add your pseudocode to this file
// And a written explanation of your solution
