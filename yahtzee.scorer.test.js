const score = require('./yahtzee.scorer');

test('score chance of all 1s equals five ', () => {
  expect(score([1,1,1,1,1], "chance")).toBe(5);
});
test('score chance ', () => {
  expect(score([3,1,2,1,5], "chance")).toBe(12);
});

test('score Three of a Kind ', () => {
  expect(score([4,4,4,1,1], "three-of-a-kind")).toBe(14);
});
test('score Three of a Kind ', () => {
  expect(score([3,2,2,1,2], "three-of-a-kind")).toBe(10);
});
test('score Three of a Kind ', () => {
  expect(score([3,6,6,6,1], "three-of-a-kind")).toBe(22);
});
test('score Three of a Kind', () => {
  expect(score([3,6,5,6,1], "three-of-a-kind")).toBe(0);
});
test('score Three of a Kind ', () => {
  expect(score([1,2,2,3,1], "three-of-a-kind")).toBe(0);
});
test('score Three of a Kind ', () => {
  expect(score([2,2,2,2,1], "three-of-a-kind")).toBe(9);
});


test('score Three of a Kind ', () => {
  expect(score([2,2,2,2,2], "three-of-a-kind")).toBe(10);
});

// test('score fives equals 15 ', () => {
//   expect(score([5,5,5,1,1], "fives")).toBe(15);
// });
