// -----
// Run time env (tested on):
// Node v11.12.0
// -----
// Algorithm complexity
// -----
// Run time:
// Worst case - O(log(n))
// Best case - O(1)
// Average case - O(log(n))
// -----
// Space (with tail-call optimization):
// Worst case - O(log(n))
// Best case - O(1)
// Average case - O(log(n))
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

  // if y is divisible by 2, we can divide and conquer it out
  if (y !== 0 && (y % 2 === 0 || y % 2 === -0)) {
    return power(x, y / 2, result) * power(x, y / 2);
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
