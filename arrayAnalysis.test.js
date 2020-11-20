/* === Array analysis tests ===
Write a function that takes an array of numbers and returns an object
with the following properties: average, min, max, and length.
============================================================================= */
const { analyzer } = require("./arrayAnalysis");

test("Return an object with average, min, max and length", () => {
  expect(analyzer([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
