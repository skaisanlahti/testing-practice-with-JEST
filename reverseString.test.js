const { TestScheduler } = require("jest");
const { reverseString } = require("./reverseString");

test("Reverse word", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("Reverse phrases", () => {
  expect(reverseString("Hello world!")).toBe("!dlrow olleH");
});
