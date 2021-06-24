function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      const temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      for (let j = i; j >= 0; j--) {
        if (array[j] < array[j - 1]) {
          const temp = array[j];
          array[j] = array[j - 1];
          array[j - 1] = temp;
        }
      }
    }
  }
  return array;
}
