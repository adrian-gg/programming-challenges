function numberOfSpecialChars(word) {
  const lowerSeen = new Set()
  const upperSeen = new Set()

  for (const char of word) {
    if (char >= "a" && char <= "z") {
      lowerSeen.add(char)
    } else if (char >= "A" && char <= "Z") {
      upperSeen.add(char)
    }
  }

  let specialCount = 0
  for (const char of lowerSeen) {
    if (upperSeen.has(char.toUpperCase())) {
      specialCount++
    }
  }

  return specialCount
}

console.log(numberOfSpecialChars("aaAbcBC")) // 3
console.log(numberOfSpecialChars("abc")) // 0
console.log(numberOfSpecialChars("abBCab")) // 1
