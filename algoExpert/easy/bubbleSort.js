function bubbleSort(array) {
  let sortCount = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      const temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      sortCount = true;
    }
  }
  if (sortCount) {
    bubbleSort(array);
  }
  return array;
}
