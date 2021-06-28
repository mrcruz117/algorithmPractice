function spiralTraverse(array) {
  let result = [];
  const travel = (array) => {
    if (!array[0][0]) return array;
    // go left
    for (let i = 0; i < array[0].length; i++) {
      result.push(array[0][i]);
    }
    array.splice(0, 1);
    if (!array.length) return;
    // go down
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
      if (!array[i].length) {
        array.splice(i, 1);
        i--;
      }
    }
    if (!array.length) return;
    // go left
    for (let i = array[array.length - 1].length - 1; i >= 0; i--) {
      result.push(array[array.length - 1][i]);
    }
    array.splice(array.length - 1, 1);
    if (!array.length) return;
    // go up
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
      if (!array[i].length) array.splice(i, 1);
    }

    if (array.length) travel(array);
  };
  travel(array);

  return result;
}
