function numberOfSpecialChars(word) {
  const lowerSeen = new Map()
  const upperSeen = new Map()

  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    if (char >= "a" && char <= "z" && lowerSeen.get(char) === undefined) {
      lowerSeen.set(char, i)
    } else if (
      char >= "A" &&
      char <= "Z" &&
      upperSeen.get(char) === undefined
    ) {
      upperSeen.set(char, i)
    }
  }

  let specialCount = 0
  const entriesLoweSeen = [...lowerSeen.entries()]
  for (const char of entriesLoweSeen) {
    if (char[1] < upperSeen.get(char[0].toUpperCase())) {
      specialCount++
    }
  }

  return specialCount
}

console.log(numberOfSpecialChars("aaAbcBC")) // 3
console.log(numberOfSpecialChars("abcABC")) // 3
console.log(numberOfSpecialChars("ABCabc")) // 0
console.log(numberOfSpecialChars("AbBCab")) // 1
