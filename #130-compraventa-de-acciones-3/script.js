function maxProfit(prices) {
  if (!prices || prices.length === 0) return 0

  const n = prices.length
  const leftProfits = new Array(n).fill(0)
  const rightProfits = new Array(n + 1).fill(0)

  let minPrice = prices[0]
  for (let i = 1; i < n; i++) {
    minPrice = Math.min(minPrice, prices[i])
    leftProfits[i] = Math.max(leftProfits[i - 1], prices[i] - minPrice)
  }

  let maxPrice = prices[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    maxPrice = Math.max(maxPrice, prices[i])
    rightProfits[i] = Math.max(rightProfits[i + 1], maxPrice - prices[i])
  }

  let maxProfit = 0
  for (let i = 0; i < n; i++) {
    maxProfit = Math.max(maxProfit, leftProfits[i] + rightProfits[i + 1])
  }

  return maxProfit
}

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])) //6
console.log(maxProfit([1, 2, 3, 4, 5])) //4
console.log(maxProfit([7, 6, 4, 3, 1])) //0
console.log(maxProfit([7, 1, 5, 3, 6, 4])) //7
