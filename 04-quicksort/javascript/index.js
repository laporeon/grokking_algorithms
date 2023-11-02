/**
 * QuickSort algorithm.
 *
 * The QuickSort algorithm is a divide-and-conquer sorting algorithm that
 * works by selecting a 'pivot' element from the array and partitioning the
 * other elements into two sub-arrays, according to whether they are less
 * than or greater than the pivot. The sub-arrays are then recursively sorted.
 *
 * @param {Array} array - The array to be sorted.
 * @returns {Array} A new array containing the elements sorted in ascending order.
 */

function quicksort(array) {
  // Base case: if the array has only 1 element, it's already sorted.
  if (array.length <= 1) return array;

  const pivot = array[0];
  const smaller = [];
  const bigger = [];

  // Partition the array into smaller and bigger sub-arrays based on the pivot
  for (let counter = 1; counter < array.length; counter++) {
    if (array[counter] < pivot) {
      smaller.push(array[counter]);
    } else {
      bigger.push(array[counter]);
    }
  }

  // Recursively sort the smaller and bigger sub-arrays and combine them
  // with the pivot to form the sorted array.
  return [...quicksort(smaller), pivot, ...quicksort(bigger)];
}

console.log(quicksort([10, 5, 2, 3]));
