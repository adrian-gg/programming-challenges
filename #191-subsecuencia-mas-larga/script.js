function getLongestSubsequence(words, groups) {
  if (words.length === 0) {
    return []
  }

  let result = []
  result.push(words[0])
  let lastGroup = groups[0]

  for (let i = 1; i < words.length; i++) {
    if (groups[i] !== lastGroup) {
      result.push(words[i])
      lastGroup = groups[i]
    }
  }

  return result
}

console.log(getLongestSubsequence(["e", "a", "b"], [0, 0, 1])) // ["e", "b"]
console.log(getLongestSubsequence(["a", "b", "c", "d"], [1, 0, 1, 1])) // ["a", "b", "c"]
console.log(getLongestSubsequence(["a", "b", "c", "d", "e"], [0, 1, 0, 1, 0])) // ["a", "b", "c", "d", "e"]
console.log(getLongestSubsequence(["a", "b", "c"], [0, 0, 0])) // ["a"]
console.log(getLongestSubsequence([], [])) // []
