function uniquePaths(m, n) {
  if (m < 1 || m > 100 || n < 1 || n > 100) return

  const arr = Array(n).fill(1)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[j] += arr[j - 1]
    }
  }

  return arr[n - 1]
}

console.log(uniquePaths(3, 7)) //28
console.log(uniquePaths(3, 2)) //3
console.log(uniquePaths(7, 7)) //924
