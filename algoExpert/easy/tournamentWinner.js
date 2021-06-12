function tournamentWinner(competitions, results) {
  var resultObj = {};

  for (let i = 0; i < results.length; i++) {
    if (results[i] === 0 && resultObj[competitions[i][1]]) {
      resultObj[competitions[i][1]] += 3;
    } else if (results[i] === 0 && !resultObj[competitions[i][1]]) {
      resultObj[competitions[i][1]] = 3;
    }

    if (results[i] === 1 && resultObj[competitions[i][0]]) {
      resultObj[competitions[i][0]] += 3;
    } else if (results[i] === 1 && !resultObj[competitions[i][0]]) {
      resultObj[competitions[i][0]] = 3;
    }
  }
  let winner;
  let score;
  for (const team in resultObj) {
    if (!winner) {
      score = resultObj[team];
      winner = team;
    }
    if (resultObj[team] > score) {
      score = resultObj[team];
      winner = team;
    }
  }
  return winner;
}
