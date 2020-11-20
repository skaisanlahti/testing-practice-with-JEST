function analyzer(array) {
  const average = array.reduce((prev, total) => prev + total, 0) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = { analyzer };
