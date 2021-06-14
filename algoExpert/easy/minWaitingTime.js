function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let minWait = 0;
  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    minWait += duration * (queries.length - (i + 1));
  }

  return minWait;
}
