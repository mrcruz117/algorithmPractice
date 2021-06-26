function firstNonRepeatingCharacter(string) {
  const charFreq = {};

  for (const character of string) {
    if (!charFreq[`_${character}`]) charFreq[`_${character}`] = 0;
    charFreq[`_${character}`]++;
  }
  for (const key in charFreq) {
    if (charFreq[key] === 1) return string.indexOf(key.slice(1));
  }
  return -1;
}
