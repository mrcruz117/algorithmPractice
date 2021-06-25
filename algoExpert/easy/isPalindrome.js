function isPalindrome(string) {
  var splitString = string.split('');
  var reversedString = [];
  for (let i = splitString.length - 1; i >= 0; i--) {
    var currentIdx = splitString[i];
    reversedString.push(currentIdx);
  }
  return reversedString.join('') === string;
}
