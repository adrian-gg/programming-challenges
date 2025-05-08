function maxProfit(prices) {
  let maxProfit = 0

  for (let i = 0; i < prices.length - 1; i++) {
    const buy = prices[i]
    for (let j = i + 1; j < prices.length; j++) {
      const sell = prices[j]
      maxProfit = Math.max(maxProfit, sell - buy)
    }
  }

  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) //5
console.log(maxProfit([7, 6, 4, 3, 1])) //0
