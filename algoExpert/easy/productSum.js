function productSum(array) {
  let depth = 1;
  let total = 0;
  const inner = (array, depth) => {
    let currentTotal = 0;
    for (let i = 0; i < array.length; i++) {
      const currentIndex = array[i];
      if (Array.isArray(currentIndex)) {
        inner(currentIndex, depth + 1);
      } else {
        currentTotal += currentIndex;
      }
    }

    total += factorialize(depth) * currentTotal;
    //console.log('total: ', total)
  };
  inner(array, depth);

  return total;
}

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

const array1 = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

const test = productSum(array1);
console.log(test);
