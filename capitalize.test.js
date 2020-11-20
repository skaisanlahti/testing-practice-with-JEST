const { TestScheduler } = require("jest");
const { capitalize } = require("./capitalize");

test("Capitalize first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Capitalize phrases", () => {
  expect(capitalize("hello there stranger.")).toBe("Hello there stranger.");
});

test("Already capitalized", () => {
  expect(capitalize("Hello")).toBe("Hello");
});
