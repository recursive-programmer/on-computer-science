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
// Space:
// Worst case - O(n)
// Best case - O(1)
// Average case - O(n)
// -----

const power = (x, y) => {
  // 0 ^ y will always be 0 when y > 0
  if (x === 0 && y > 0) {
    return 0;
  }

  // x ^ 0 will always be 1
  if (y === 0) {
    return 1;
  }

  if (y > 0) {
    return x * power(x, y - 1);
  }

  if (y < 0) {
    return (1 / x) * power(x, y + 1);
  }

  return x;
};

module.exports = power;
