function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  console.log(arrayOne, arrayTwo);
  let result = [];
  let oneTracker = 0;
  let twoTracker = 0;
  let smallest = Infinity;
  let current = Infinity;
  while (oneTracker < arrayOne.length && twoTracker < arrayTwo.length) {
    let one = arrayOne[oneTracker];
    let two = arrayTwo[twoTracker];
    if (one < two) {
      current = two - one;
      oneTracker++;
    } else if (one > two) {
      current = one - two;
      twoTracker++;
    } else {
      return [one, two];
    }
    if (smallest > current) {
      smallest = current;
      result = [one, two];
    }
  }
  return result;
}
