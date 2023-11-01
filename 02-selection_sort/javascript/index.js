/**
 * Finds the index of the smallest value in the given array.
 *
 * @param {Array} array - The input array to search for the smallest value.
 * @returns {number} The index of the smallest value in the array.
 */
function findSmallestIndex(array) {
  let smallestIndex = 0;
  let smallestValue = array[0];

  for (let counter = 1; counter < array.length; counter++) {
    if (array[counter] < smallestValue) {
      smallestIndex = counter;
      smallestValue = array[counter];
    }
  }

  return smallestIndex;
}

/**
 * Sorts an array using the selection sort algorithm.
 *
 * The selection sort algorithm repeatedly finds the smallest element from the unsorted
 * part of the array and moves it to the end of the sorted part.
 *
 * @param {Array} array - The input array to be sorted.
 * @returns {Array} A new array containing the elements of the input array in ascending order.
 */
function selectionSort(array) {
  const sortedArray = [];
  const copy = [...array];

  for (let counter = 0; counter < copy.length; counter++) {
    const index = findSmallestIndex(array);

    const element = array.splice(index, 1)[0];
    sortedArray.push(element);
  }

  return sortedArray;
}

console.log(selectionSort([3, 10, 4, 1, 7]));
console.log(selectionSort([100, 7, -1, -99, 8, 2092, 700]));
