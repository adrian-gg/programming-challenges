const permutations = (word) => {
  const results = new Set()

  function backtrack(path, used) {
    if (path.length === word.length) {
      results.add(path.join(""))
      return
    }

    for (let i = 0; i < word.length; i++) {
      if (used[i]) continue
      used[i] = true
      path.push(word[i])
      backtrack(path, used)
      path.pop()
      used[i] = false
    }
  }

  backtrack([], Array(word.length).fill(false))

  return results
}

function countDistinctAnagrams(s) {
  return s
    .split(" ")
    .map((w) => permutations(w).size)
    .reduce((acc, val) => acc * val, 1)
}

console.log(countDistinctAnagrams("too hot")) // 18
console.log(countDistinctAnagrams("aa")) // 1
console.log(countDistinctAnagrams("abc def ghi jkl mno pqr stu vwx yz")) // 3359232
