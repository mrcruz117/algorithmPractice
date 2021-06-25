function selectionSort(array) {
  const arrayLength = array.length;
  var sortedArray = [];

  while (sortedArray.length !== arrayLength) {
    let currentSmallestNum = array[0];
    for (let i = 0; i < arrayLength; i++) {
      var currentNum = array[i];
      if (currentNum < currentSmallestNum) {
        currentSmallestNum = currentNum;
      }
    }
    sortedArray.push(currentSmallestNum);
    array.splice(array.indexOf(currentSmallestNum), 1);
  }
  return sortedArray;
}
