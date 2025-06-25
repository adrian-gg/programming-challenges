function reportSpam(message, bannedWords) {
  let spamCount = 0
  const bannedWordsSet = new Set(bannedWords)

  for (const word of message) {
    if (bannedWordsSet.has(word)) spamCount += 1
  }

  return spamCount >= 2
}

console.log(reportSpam(["hello", "world", "leetcode"], ["world", "hello"])) // true
console.log(
  reportSpam(
    ["hello", "programming", "fun"],
    ["world", "programming", "leetcode"]
  )
) // false
