function caesarCipherEncryptor(string, key) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  var cipher = '';
  for (let i = 0; i < string.length; i++) {
    var letterIdx = letters.indexOf(string[i]);
    // if (!letters[letterIdx+key]){
    // 	cipher += letters[(letterIdx+(key%26))]
    // 	console.log(key % 26)
    // } else {
    // 	cipher += letters[letterIdx+key];
    // }
    cipher += letters[(letterIdx + key) % 26];
  }
  return cipher;
}
