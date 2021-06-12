function isValidSubsequence(array, sequence) {
  let seqIndex = 0;

  for (const value of array) {
    if (value === sequence[seqIndex]) seqIndex++;
  }
  return seqIndex === sequence.length;
}
