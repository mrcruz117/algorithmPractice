function getNthFib(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  var fibTrack = [0, 1];
  for (let i = 0; i < n; i++) {
    fibTrack.push(fibTrack[i] + fibTrack[i + 1]);
  }

  return fibTrack[n - 1];
}
