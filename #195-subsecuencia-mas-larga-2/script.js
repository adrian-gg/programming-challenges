const hammingDistance = (word1, word2) => {
  if (word1.length !== word2.length) return -1

  let distance = 0
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      distance++
    }
  }

  return distance
}

function getLongestSubsequence(words, groups) {
  if (words.length === 0) return []

  const n = words.length
  const dp = new Array(n).fill(1)
  const path = new Array(n).fill(-1)

  let maxLength = 1
  let endIndex = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (
        groups[i] !== groups[j] &&
        words[i].length === words[j].length &&
        hammingDistance(words[i], words[j]) === 1
      ) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          path[i] = j
        }
      }
    }

    if (dp[i] > maxLength) {
      maxLength = dp[i]
      endIndex = i
    }
  }

  const result = []
  let currentIndex = endIndex
  while (currentIndex !== -1) {
    result.unshift(words[currentIndex])
    currentIndex = path[currentIndex]
  }

  return result
}

console.log(getLongestSubsequence(["bab", "dab", "cab"], [1, 2, 2])) //["bab","dab"]
console.log(getLongestSubsequence(["a", "b", "c", "d"], [1, 2, 3, 4])) //["a", "b", "c", "d"]
console.log(getLongestSubsequence(["a", "ab", "ac"], [1, 2, 3])) //[ 'ab', 'ac' ]
console.log(getLongestSubsequence(["ab", "ac", "ad"], [1, 2, 1])) //[ 'ab', 'ac', 'ad' ]
console.log(getLongestSubsequence(["top", "tap", "tot", "tip"], [1, 2, 1, 3])) //[ 'top', 'tap', 'tip' ]
