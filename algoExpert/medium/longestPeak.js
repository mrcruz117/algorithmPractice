function longestPeak(array) {
  var longest = 0;
  var longLong = 0;
  let leftTracker = 1;
  let rightTracker = 1;
  for (let i = 0; i < array.length; i++) {
    let leftIdx = i - 1;
    let rightIdx = i + 1;
    const currentPeak = array[i];

    if (array[leftIdx] < currentPeak && array[rightIdx] < currentPeak) {
      longest = 3;

      while (array[leftIdx - 1] < array[leftIdx]) {
        longest++;
        leftIdx--;
      }
      leftTracker = 1;
      while (array[rightIdx + 1] < array[rightIdx]) {
        longest++;
        rightIdx++;
        // console.log(longest)
      }
      if (longest > longLong) {
        longLong = longest;
        longest = 0;
      }
    }
  }
  return longLong;
}
