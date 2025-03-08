function toOctalAndHex(decimal) {
  const hexChars = "0123456789ABCDEF"
  const res = {
    octal: "",
    hex: "",
  }
  let currentDecimal = decimal

  while (currentDecimal > 0) {
    res.octal = (currentDecimal % 8) + res.octal
    currentDecimal = Math.floor(currentDecimal / 8)
  }

  currentDecimal = decimal
  while (currentDecimal > 0) {
    res.hex = hexChars[currentDecimal % 16] + res.hex
    currentDecimal = Math.floor(currentDecimal / 16)
  }

  if (res.octal === "") res.octal = "0"
  if (res.hex === "") res.hex = "0"
  return res
}

console.log(toOctalAndHex(0)) //{ octal: '0', hex: '0' }
console.log(toOctalAndHex(100)) //{ octal: '144', hex: '64' }
console.log(toOctalAndHex(1000)) //{ octal: '1750', hex: '3E8' }
console.log(toOctalAndHex(179)) //{ octal: '263', hex: 'B3' }
