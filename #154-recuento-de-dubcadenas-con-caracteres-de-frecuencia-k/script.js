function numberOfSubstrings(s, k) {
  let totalValidSubstrings = 0
  const n = s.length

  for (let i = 0; i < n; i++) {
    const charFrequencies = new Map()

    for (let j = i; j < n; j++) {
      const char = s[j]
      charFrequencies.set(char, (charFrequencies.get(char) || 0) + 1)
      let isValid = false

      for (const frequency of charFrequencies.values()) {
        if (frequency >= k) {
          isValid = true
          break
        }
      }

      if (isValid) {
        totalValidSubstrings++
      }
    }
  }

  return totalValidSubstrings
}

console.log(numberOfSubstrings("abacb", 2)) //4
console.log(numberOfSubstrings("abcde", 1)) //15
console.log(numberOfSubstrings("aaabbbccc", 3)) //22
console.log(numberOfSubstrings("a", 1)) //1
console.log(numberOfSubstrings("abc", 2)) //0
