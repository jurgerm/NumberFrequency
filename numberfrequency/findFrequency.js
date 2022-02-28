function findFrequency(A) {

  const maxValue = Math.max(...A);

  let result = [];
  for (let i = 0; i < maxValue; i++) {
    result[i] = 0;
  }

  A.forEach(element => {
    result[element-1]++;
  });
  return result;
}

module.exports = findFrequency;
