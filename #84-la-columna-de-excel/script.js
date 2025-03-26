function calculateColumnNumber(columnName) {
  return [...columnName].reduce(
    (acc, char) => acc * 26 + (char.charCodeAt() - 64),
    0
  )
}

console.log(calculateColumnNumber("A")) // 1
console.log(calculateColumnNumber("Z")) // 26
console.log(calculateColumnNumber("AA")) // 27
console.log(calculateColumnNumber("CA")) // 79
console.log(calculateColumnNumber("AAA")) // 703
console.log(calculateColumnNumber("XFD")) // 16384
console.log(calculateColumnNumber("ZZZZ")) // 4475254
