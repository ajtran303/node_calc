const assert = require("assert");
const operations = require("./operations.js");

it("can add 1 and 3", () => {
  assert.strictEqual(operations.add(1, 3), 4);
});

it("can add -1 and -1", () => {
  assert.strictEqual(operations.add(-1, -1), -2);
});

it("can subtract 33 and 3", () => {
  assert.strictEqual(operations.subtract(33, 3), 30);
});

it("can multiply 12 and 12", () => {
  assert.strictEqual(operations.multiply(12, 12), 144);
});

it("can divide 10 and 2", () => {
  assert.strictEqual(operations.divide(10, 2), 5);
});

it("fails when a string is used instead of a number", () => {
  assert.strictEqual(operations.validateNumbers("sammy", 5), false);
});

it("fails when two strings are used instead of numbers", () => {
  assert.strictEqual(operations.validateNumbers("sammy", "sammy"), false);
});

it("succeeds when two numbers are used", () => {
  assert.strictEqual(operations.validateNumbers(5, 5), true);
});
