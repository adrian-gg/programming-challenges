function isHappy(n) {
  const seen = new Set()

  while (n !== 1 && !seen.has(n)) {
    seen.add(n)
    n = n
      .toString()
      .split("")
      .reduce((acc, val) => acc + Math.pow(Number(val), 2), 0)
  }

  return n === 1
}

console.log(isHappy(19)) // true
console.log(isHappy(2)) // false
