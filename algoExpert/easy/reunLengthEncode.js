function runLengthEncoding(string) {
  var result = '';
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      counter++;
    } else {
      result += counter + 1 + string[i];
      counter = 0;
    }
    if (counter === 9) {
      result += counter + string[i];
      counter = 0;
    }
  }
  return result;
}
