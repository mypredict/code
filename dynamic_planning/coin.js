// 最少硬币数凑出价格
const coins = [2, 5, 7];
const price = 27;
function minCount (coins, price) {
  // minCountIndexs[i] = Math.min(minCountIndexs[i-coin] + 1, ...)
  const minCountIndexs = [0];
  if (price === 0) {
    return 0;
  }
  for (let i=1; i<=price; i++) {
    minCountIndexs[i] = 10000;
    for (let coin of coins) {
      if (coin <= i && minCountIndexs[i - coin] !== 10000) {
        minCountIndexs[i] = Math.min(minCountIndexs[i - coin] + 1, minCountIndexs[i]);
      }
    }
  }
  if (minCountIndexs[price] === 10000 || price < 0) {
    return -1;
  }
  return minCountIndexs[price];
}
console.log(minCount(coins, price));