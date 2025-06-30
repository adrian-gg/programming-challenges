function numberOfSpecialChars(word) {
  const firstUppercaseIndex = {}
  const lowercaseIndices = {}

  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    if (char >= "A" && char <= "Z") {
      const lowerChar = char.toLowerCase()
      if (!(lowerChar in firstUppercaseIndex)) {
        firstUppercaseIndex[lowerChar] = i
      }
    } else if (char >= "a" && char <= "z") {
      if (!(char in lowercaseIndices)) {
        lowercaseIndices[char] = []
      }
      lowercaseIndices[char].push(i)
    }
  }

  let specialCount = 0

  for (let charCode = 97; charCode <= 122; charCode++) {
    const char = String.fromCharCode(charCode)

    if (char in lowercaseIndices && char in firstUppercaseIndex) {
      const firstUpperIdx = firstUppercaseIndex[char]
      const lowerIdxArray = lowercaseIndices[char]

      let allLowerBeforeFirstUpper = true
      for (const lowerIdx of lowerIdxArray) {
        if (lowerIdx > firstUpperIdx) {
          allLowerBeforeFirstUpper = false
          break
        }
      }

      if (allLowerBeforeFirstUpper) {
        specialCount++
      }
    }
  }

  return specialCount
}

console.log(numberOfSpecialChars("aaAbcBC")) // 3
console.log(numberOfSpecialChars("abc")) // 0
console.log(numberOfSpecialChars("AbBCab")) // 0
