/**
 * Calculates the factorial of a given number using recursion.
 *
 * @param {number} number - The number to calculate the factorial.
 * @returns {number} The factorial result.
 */
function recursion(number) {
  if (number === 1) return 1;

  return number * recursion(number - 1);
}

console.log(recursion(5));
console.log(recursion(1));
console.log(recursion(6));
console.log(recursion(4));
