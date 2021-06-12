function sortedSquaredArray(array) {
  var sqrArr = [];

  for (let i = 0; i < array.length; i++) {
    sqrArr.push(Math.pow(array[i], 2));
  }
  sqrArr.sort((a, b) => a - b);
  return sqrArr;
}
