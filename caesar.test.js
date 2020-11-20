/* === Caesar tests ===
============================================================================= */
const { caesar } = require("./caesar");

test("Works with letters", () => {
  expect(caesar("Aaa", 1)).toBe("Bbb");
});

test("Works with phrases", () => {
  expect(caesar("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});

test("Works with negative shift", () => {
  expect(caesar("Mjqqt, Btwqi!", -5)).toBe("Hello, World!");
});

test("Works with large shifts", () => {
  expect(caesar("Hello, World!", 75)).toBe("Ebiil, Tloia!");
});

test("Works with scandinavian letters", () => {
  expect(caesar("Hällö, Wörld!", 1)).toBe("Iömma, Xasme!");
});
