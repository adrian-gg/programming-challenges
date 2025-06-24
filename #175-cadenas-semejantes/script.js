function makeEqual(words) {
  if (words.length === 1) {
    return true
  }

  const charCounts = new Map()

  for (const word of words) {
    for (const char of word) {
      charCounts.set(char, (charCounts.get(char) || 0) + 1)
    }
  }

  const n = words.length

  for (const count of charCounts.values()) {
    if (count % n !== 0) {
      return false
    }
  }

  return true
}

console.log(makeEqual(["abc", "aabc", "bc"])) // true
console.log(makeEqual(["ab", "a"])) // false
console.log(makeEqual(["a"])) // true
console.log(makeEqual(["aabb", "bbaa"])) // true
console.log(makeEqual(["cat", "dog"])) // false
