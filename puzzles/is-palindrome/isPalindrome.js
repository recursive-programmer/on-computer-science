// -----
// Run time env (tested on):
// Node v11.12.0
// -----
// Algorithm complexity
// -----
// Run time:
// Worst case - O(n)
// Best case - O(n)
// Average case - O(n)
// -----
// Space:
// Worst case - O(n)
// Best case - O(n)
// Average case - O(n)
// -----

const isPalindrome = inputString => {
  return inputString
    .split('')
    .every(
      (char, index) => char === inputString[inputString.length - index - 1]
    );
};

module.exports = isPalindrome;
