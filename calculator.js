function calculatorFactory() {
  function add(a, b) {
    return a + b;
  }
  function substract(a, b) {
    return a - b;
  }
  function divide(a, b) {
    return b === 0 ? "Cannot divide by zero." : a / b;
  }
  function multiply(a, b) {
    return a * b;
  }
  return {
    add,
    substract,
    divide,
    multiply,
  };
}

module.exports = { calculatorFactory };
