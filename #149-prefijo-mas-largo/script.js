function longestCommonPrefix(strs) {
  let res = ""

  for (let i = 0; i < strs[0].length; i++) {
    const letter = strs[0][i]

    for (let j = 0; j < strs.length; j++) {
      const word = strs[j]
      if (j !== 0) {
        if (word[i] && word[i] !== letter) return res
      }
    }

    res += letter
  }
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])) //fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])) //
