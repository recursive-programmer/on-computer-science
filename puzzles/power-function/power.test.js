const power = require('./power');

test('power function is defined', () => {
  expect(typeof power).toEqual('function');
});

// ----- 0

test('0 ^ 4 = 0', () => {
  expect(power(0, 4)).toEqual(0 ** 4);
});

test('0 ^ 3 = 0', () => {
  expect(power(0, 3)).toEqual(0 ** 3);
});

test('0 ^ 2 = 0', () => {
  expect(power(0, 2)).toEqual(0 ** 2);
});

test('0 ^ 1 = 0', () => {
  expect(power(0, 1)).toEqual(0 ** 1);
});

test('0 ^ 0 = 1', () => {
  expect(power(0, 0)).toEqual(0 ** 0);
});

test('0 ^ -1 = Infinity', () => {
  expect(power(0, -1)).toEqual(0 ** -1);
});

test('0 ^ -2 = Infinity', () => {
  expect(power(0, -2)).toEqual(0 ** -2);
});

test('0 ^ -3 = Infinity', () => {
  expect(power(0, -3)).toEqual(0 ** -3);
});

test('0 ^ -4 = Infinity', () => {
  expect(power(0, -4)).toEqual(0 ** -4);
});

// ----- 1

test('1 ^ 4 = 1', () => {
  expect(power(1, 4)).toEqual(1 ** 4);
});

test('1 ^ 3 = 1', () => {
  expect(power(1, 3)).toEqual(1 ** 3);
});

test('1 ^ 2 = 1', () => {
  expect(power(1, 2)).toEqual(1 ** 2);
});

test('1 ^ 1 = 1', () => {
  expect(power(1, 1)).toEqual(1 ** 1);
});

test('1 ^ 0 = 1', () => {
  expect(power(1, 0)).toEqual(1 ** 0);
});

test('1 ^ -1 = 1', () => {
  expect(power(1, -1)).toEqual(1 ** -1);
});

test('1 ^ -2 = 1', () => {
  expect(power(1, -2)).toEqual(1 ** -2);
});

test('1 ^ -3 = 1', () => {
  expect(power(1, -3)).toEqual(1 ** -3);
});

test('1 ^ -4 = 1', () => {
  expect(power(1, -4)).toEqual(1 ** -4);
});

// ----- -1

test('-1 ^ 4 = 1', () => {
  expect(power(-1, 4)).toEqual((-1) ** 4);
});

test('-1 ^ 3 = -1', () => {
  expect(power(-1, 3)).toEqual((-1) ** 3);
});

test('-1 ^ 2 = 1', () => {
  expect(power(-1, 2)).toEqual((-1) ** 2);
});

test('-1 ^ 1 = -1', () => {
  expect(power(-1, 1)).toEqual((-1) ** 1);
});

test('-1 ^ 0 = 1', () => {
  expect(power(-1, 0)).toEqual((-1) ** 0);
});

test('-1 ^ -1 = -1', () => {
  expect(power(-1, -1)).toEqual((-1) ** -1);
});

test('-1 ^ -2 = 1', () => {
  expect(power(-1, -2)).toEqual((-1) ** -2);
});

test('-1 ^ -3 = -1', () => {
  expect(power(-1, -3)).toEqual((-1) ** -3);
});

test('-1 ^ -4 = 1', () => {
  expect(power(-1, -4)).toEqual((-1) ** -4);
});

// ----- 2

test('2 ^ 4 = 16', () => {
  expect(power(2, 4)).toEqual(2 ** 4);
});

test('2 ^ 3 = 8', () => {
  expect(power(2, 3)).toEqual(2 ** 3);
});

test('2 ^ 2 = 4', () => {
  expect(power(2, 2)).toEqual(2 ** 2);
});

test('2 ^ 1 = 2', () => {
  expect(power(2, 1)).toEqual(2 ** 1);
});

test('2 ^ 0 = 1', () => {
  expect(power(2, 0)).toEqual(2 ** 0);
});

test('2 ^ -1 = 0.5', () => {
  expect(power(2, -1)).toEqual(2 ** -1);
});

test('2 ^ -2 = 0.25', () => {
  expect(power(2, -2)).toEqual(2 ** -2);
});

test('2 ^ -3 = 0.125', () => {
  expect(power(2, -3)).toEqual(2 ** -3);
});

test('2 ^ -4 = 0.0625', () => {
  expect(power(2, -4)).toEqual(2 ** -4);
});

// ----- -2

test('-2 ^ 4 = 16', () => {
  expect(power(-2, 4)).toEqual((-2) ** 4);
});

test('-2 ^ 3 = -8', () => {
  expect(power(-2, 3)).toEqual((-2) ** 3);
});

test('-2 ^ 2 = 4', () => {
  expect(power(-2, 2)).toEqual((-2) ** 2);
});

test('-2 ^ 1 = -2', () => {
  expect(power(-2, 1)).toEqual((-2) ** 1);
});

test('-2 ^ 0 = 1', () => {
  expect(power(-2, 0)).toEqual((-2) ** 0);
});

test('-2 ^ -1 = -0.5', () => {
  expect(power(-2, -1)).toEqual((-2) ** -1);
});

test('-2 ^ -2 = 0.25', () => {
  expect(power(-2, -2)).toEqual((-2) ** -2);
});

test('-2 ^ -3 = -0.125', () => {
  expect(power(-2, -3)).toEqual((-2) ** -3);
});

test('-2 ^ -4 = 0.0625', () => {
  expect(power(-2, -4)).toEqual((-2) ** -4);
});
