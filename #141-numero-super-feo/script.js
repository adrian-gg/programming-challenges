function nthSuperUglyNumber(n, primes) {
  const k = primes.length
  const ugly = new Array(n).fill(1)
  const indices = new Array(k).fill(0)
  const values = primes.slice()

  for (let i = 1; i < n; i++) {
    const nextUgly = Math.min(...values)
    ugly[i] = nextUgly

    for (let j = 0; j < k; j++) {
      if (values[j] === nextUgly) {
        indices[j]++
        values[j] = primes[j] * ugly[indices[j]]
      }
    }
  }

  return ugly[n - 1]
}

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19])) // 32
console.log(nthSuperUglyNumber(1, [2, 3, 5])) // 1
