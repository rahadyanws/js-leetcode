function coinChange(coins, amount) {
  // Isi array dengan Infinity, index mewakili jumlah uang
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // Butuh 0 koin untuk nilai 0

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      // Pilih minimum antara nilai saat ini atau (nilai sisa + 1 koin baru)
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11));