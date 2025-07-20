function canWinNim(n) {
  return n % 4 !== 0
}

console.log(canWinNim(1)) // true
console.log(canWinNim(2)) // true
console.log(canWinNim(3)) // true
console.log(canWinNim(4)) // false
console.log(canWinNim(5)) // true
console.log(canWinNim(6)) // true
console.log(canWinNim(7)) // true
console.log(canWinNim(8)) // false
console.log(canWinNim(9)) // true
console.log(canWinNim(10)) // true
console.log(canWinNim(11)) // true
console.log(canWinNim(12)) // false
console.log(canWinNim(13)) // true
console.log(canWinNim(14)) // true
console.log(canWinNim(15)) // true
