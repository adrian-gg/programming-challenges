function calculateColumnName(number) {
  let name = ""

  while (number > 0) {
    number--
    const letter = String.fromCharCode((num % 26) + 65)
    name = letter + name
    number = Math.floor(number / 26)
  }

  return name
}

console.log(calculateColumnName(1)) // A
console.log(calculateColumnName(26)) // Z
console.log(calculateColumnName(27)) // AA
console.log(calculateColumnName(79)) // CA
console.log(calculateColumnName(703)) // AAA
console.log(calculateColumnName(16384)) // XFD
console.log(calculateColumnName(475254)) // ZZZZ
