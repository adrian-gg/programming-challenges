const isPalindrome = (word) => {
  let left = 0,
    right = word.length - 1
  while (left < right) {
    if (word[left++] !== word[right--]) return false
  }
  return true
}

function palindromePairs(words) {
  const map = new Map()
  const res = []

  words.forEach((word, i) => map.set(word, i))

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const len = word.length

    for (let j = 0; j <= len; j++) {
      const prefix = word.slice(0, j)
      const suffix = word.slice(j)

      if (isPalindrome(prefix)) {
        const reversedSuffix = [...suffix].reverse().join("")
        if (map.has(reversedSuffix) && map.get(reversedSuffix) !== i) {
          res.push([map.get(reversedSuffix), i])
        }
      }

      if (j !== len && isPalindrome(suffix)) {
        const reversedPrefix = [...prefix].reverse().join("")
        if (map.has(reversedPrefix) && map.get(reversedPrefix) !== i) {
          res.push([i, map.get(reversedPrefix)])
        }
      }
    }
  }

  return res
}

console.log(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"])) // [[1,0],[0,1],[3,2],[2,4]]
console.log(palindromePairs(["bat", "tab", "cat"])) // [[1,0],[0,1]]
console.log(palindromePairs(["a", ""])) // [[1,0],[0,1]]
