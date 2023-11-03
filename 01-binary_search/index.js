/**
 * Performs a binary search on a sorted array to find the index of a given value.
 *
 * @param {Array} array - The sorted array to search.
 * @param {number} value - The value to search for.
 * @return {number|null} The index of the value in the array or null if it's not found.
 */
function binarySearch(array, value) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let guess = array[middle];

    if (guess === value) return middle;

    if (guess > value) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }

  return null;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 9, 10], 3)); // Should return 2
console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110], 90)); // Should return 8
console.log(binarySearch([5, 6, 7, 10], 67)); // Should return null
console.log(binarySearch([56, 87, 92, 102], 226)); // Should return null
