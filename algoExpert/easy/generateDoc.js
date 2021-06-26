function generateDocument(characters, document) {
  var charArray = characters.split('');
  let canGenDoc = true;
  for (const char of document) {
    if (charArray.indexOf(char) === -1) return false;
    if (charArray.indexOf(char)) {
      charArray.splice(charArray.indexOf(char), 1);
    }
  }
  console.log(charArray.indexOf('e'));
  return canGenDoc;
}
