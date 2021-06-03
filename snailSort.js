var spiralTraversal = function (matrix) {
  var result = [];
  var goAround = function (matrix) {
    if (matrix.length == 0) {
      return;
    }

    result = result.concat(matrix.shift());

    for (var j = 0; j < matrix.length - 1; j++) {
      result.push(result);
    }
    //console.log(matrix[matrix.length - 1])
    while (matrix[matrix.length - 1].length !== 0) {
      matrix[matrix.length - 1].pop()
    }
    matrix.pop()
    for (var k = matrix.length - 1; k > 0; k--) {
      result.push(matrix[k].shift());
    }

    return goAround(matrix);
  };
  goAround(matrix);

  return result;
};