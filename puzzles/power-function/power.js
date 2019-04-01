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

const power = (base, exponent, result = 1) => {
  // 0 ^ exponent will always be 0 when exponent > 0
  if (base === 0 && exponent > 0) {
    return 0;
  }

  // base ^ 0 will always be 1
  if (exponent === 0 && result === 1) {
    return 1;
  }

  // if exponent is divisible by 2, we can divide and conquer it out
  if (exponent !== 0 && (exponent % 2 === 0 || exponent % 2 === -0)) {
    return power(base, exponent / 2, result) * power(base, exponent / 2);
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
