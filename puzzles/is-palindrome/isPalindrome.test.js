const isPalindrome = require('./isPalindrome');

test('isPalindrome function is defined', () => {
  expect(typeof isPalindrome).toEqual('function');
});

test('"aba" is a isPalindrome', () => {
  expect(isPalindrome('aba')).toBe(true);
});

test('" aba" is not a isPalindrome', () => {
  expect(isPalindrome(' aba')).toBe(false);
});

test('"aba " is not a isPalindrome', () => {
  expect(isPalindrome('aba ')).toBe(false);
});

test('"greetings" is not a isPalindrome', () => {
  expect(isPalindrome('greetings')).toBe(false);
});

test('"1000000001" a isPalindrome', () => {
  expect(isPalindrome('1000000001')).toBe(true);
});

test('"Fish hsif" is not a isPalindrome', () => {
  expect(isPalindrome('Fish hsif')).toBe(false);
});

test('"pennep" a isPalindrome', () => {
  expect(isPalindrome('pennep')).toBe(true);
});
