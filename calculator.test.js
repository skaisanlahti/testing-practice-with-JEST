/* === Calculator tests ===
Make a function that returns an object with the methods
add, substract, divide and multiply.
============================================================================= */
const { calculatorFactory } = require("./calculator");
const calculator = calculatorFactory();

/* === Addition ===
============================================================================= */
test("Addition", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

/* === Substract ===
============================================================================= */
test("Substract", () => {
  expect(calculator.substract(1, 2)).toBe(-1);
});

/* === Divide ===
============================================================================= */
test("Divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("Divide by zero", () => {
  expect(calculator.divide(10, 0)).toBe("Cannot divide by zero.");
});

test("Divide decimals", () => {
  expect(calculator.divide(2.5, 2)).toBe(1.25);
});

/* === Multiply ===
============================================================================= */
test("Multiply", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("Multiply decimals", () => {
  expect(calculator.multiply(3, 2.5)).toBe(7.5);
});
