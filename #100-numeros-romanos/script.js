const ROMAN_NUMBERS = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
]

function romanNumber(num) {
  let result = ""

  for (let [value, symbol] of ROMAN_NUMBERS) {
    while (num >= value) {
      result += symbol
      num -= value
    }
  }

  return result
}

console.log(romanNumber(4)) // IV
console.log(romanNumber(5)) // V
console.log(romanNumber(16)) // XVI
console.log(romanNumber(30)) // XXX
console.log(romanNumber(45)) // XLV
console.log(romanNumber(90)) // XC
console.log(romanNumber(95)) // XCV
console.log(romanNumber(1234)) // MCCXXXIV
