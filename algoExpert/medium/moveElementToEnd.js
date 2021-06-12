function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    var currentNum = array[i];
    if (currentNum === toMove) {
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    i++;
  }
  return array;
}
