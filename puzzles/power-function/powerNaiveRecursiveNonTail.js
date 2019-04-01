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

const power = (base, exponent) => {
  // 0 ^ exponent will always be 0 when exponent > 0
  if (base === 0 && exponent > 0) {
    return 0;
  }

  // base ^ 0 will always be 1
  if (exponent === 0) {
    return 1;
  }

  if (exponent > 0) {
    return base * power(base, exponent - 1);
  }

  if (exponent < 0) {
    return (1 / base) * power(base, exponent + 1);
  }

  return base;
};

module.exports = power;
