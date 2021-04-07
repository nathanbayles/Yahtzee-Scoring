const score = require('./yahtzee.scorer');

test('score chance of all 1s equals five ', () => {
  expect(score([1,1,1,1,1], "chance")).toBe(5);
});

// [3,3,3,1,1] => 11
// [1,3,3,3,1] => 11
// [1,3,1,3,3] => 11
// [2,5,3,5,5] => 20

// [2,5,5,5,5] => 22
// [3,3,4,1,1] => 0
test('score Three of a Kind equals 9 ', () => {
  expect(score([3,3,3,1,1], "three-of-a-kind")).toBe(11);
});

test('score fives equals 15 ', () => {
  expect(score([5,5,5,1,1], "fives")).toBe(15);
});