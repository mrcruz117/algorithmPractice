function nonConstructibleChange(coins) {
  if (!coins) return 1;
  coins = coins.sort((a, b) => a - b);

  let currentChange = 0;
  for (const coin of coins) {
    console.log(coin);
    if (coin > currentChange + 1) return currentChange + 1;

    currentChange += coin;
  }
  return currentChange + 1;
}
