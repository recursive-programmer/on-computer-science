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

const power = (base, exponent, result = 1) => {
  // 0 ^ exponent will exponent be 0 when exponent > 0
  if (base === 0 && exponent > 0) {
    return 0;
  }

  // base ^ 0 will exponent be 1
  if (exponent === 0 && result === 1) {
    return 1;
  }

  if (exponent > 0) {
    return power(base, exponent - 1, base * result);
  }

  if (exponent < 0) {
    return power(base, exponent + 1, result / base);
  }

  return result;
};

module.exports = power;
