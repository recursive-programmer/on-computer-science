// -----
// Run time env (tested on):
// Node v11.12.0
// -----
// Algorithm complexity
// -----
// Run time:
// Worst case - O(n)
// Best case - O(1)
// Average case - O(n)
// -----
// Space (with tail-call optimization):
// Worst case - O(1)
// Best case - O(1)
// Average case - O(1)
// -----

const power = (x, y, result = 1) => {
  // 0 ^ y will always be 0 when y > 0
  if (x === 0 && y > 0) {
    return 0;
  }

  // x ^ 0 will always be 1
  if (y === 0 && result === 1) {
    return 1;
  }

  if (y > 0) {
    return power(x, y - 1, x * result);
  }

  if (y < 0) {
    return power(x, y + 1, result / x);
  }

  return result;
};

module.exports = power;
