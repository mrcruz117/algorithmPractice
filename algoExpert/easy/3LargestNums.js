function findThreeLargestNumbers(array) {
  const largestNums = [null, null, null];
  largestNums.sort((a, b) => a - b);
  for (const num of array) {
    if (num > largestNums[2] || largestNums[2] === null) {
      if (largestNums[2]) {
        var temp = largestNums[1];
        largestNums[1] = largestNums[2];
        largestNums[0] = temp;
      }
      largestNums[2] = num;
    } else if (num > largestNums[1] || largestNums[1] === null) {
      if (largestNums[1]) largestNums[0] = largestNums[1];
      largestNums[1] = num;
    } else if (num > largestNums[0] || largestNums[0] === null) {
      largestNums[0] = num;
    }
  }
  return largestNums;
}
