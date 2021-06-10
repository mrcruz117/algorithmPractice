function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 1; j < array.length; j += 1) {
      if (array[i] + array[j] === targetSum && i !== j) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
