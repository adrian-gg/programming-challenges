function getFirstSetBitPosition(n) {
  if (n === 0) {
    return 0
  }

  let position = 1
  while ((n & 1) === 0) {
    n >>= 1
    position++
  }
  return position
}

console.log(getFirstSetBitPosition(18)) //2
console.log(getFirstSetBitPosition(12)) //3
console.log(getFirstSetBitPosition(1)) //1
console.log(getFirstSetBitPosition(0)) //0
console.log(getFirstSetBitPosition(32)) //6
