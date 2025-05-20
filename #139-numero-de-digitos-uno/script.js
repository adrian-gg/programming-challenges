function countDigitOne(n) {
  if (typeof n !== "number" || n < 0) return "Parámetro no válido."

  let count = 0

  for (let i = 1; i <= n; i *= 10) {
    const divider = i * 10
    count +=
      Math.floor(n / divider) * i +
      Math.min(Math.max((n % divider) - i + 1, 0), i)
  }

  return count
}

console.log(countDigitOne(13)) //6
console.log(countDigitOne(0)) //0
