function calculatorFactory() {
  function add(a, b) {}
  function substract(a, b) {}
  function divide(a, b) {}
  function multiply(a, b) {}
  return {
    add,
    substract,
    divide,
    multiply,
  };
}

module.exports = { calculatorFactory };
