function permutations(word) {
  if (word.length <= 1) {
    return [word]
  }

  const result = [[]]

  for (let i = 0; i < word.length; i++) {
    const arrayWord =
      result[1]?.[result[1]?.length - 1]?.split("") || word.split("")
    const newWord = [...arrayWord.splice(1), arrayWord[0]].join("")
    result[0].push(newWord)
    if (i !== word.length - 1) result.unshift([])
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 1; j < word.length; j++) {
      for (let k = 1; k < word.length; k++) {
        const arrayWord = word.split("")
        const firstChars = arrayWord.splice(0, k)
        let newWord = [...firstChars, ...arrayWord.reverse()].join("")
        if (word.length - 1 !== firstChars.length) result[i].push(newWord)
      }
    }
    result[i].pop()
  }

  return result.flat()
}

function recursivePermutations(word) {
  if (word.length <= 1) {
    return [word]
  }

  let result = []

  for (let i = 0; i < word.length; i++) {
    let currentChar = word[i]
    let remainingWord = word.slice(0, i) + word.slice(i + 1)
    let remainingPermutations = recursivePermutations(remainingWord)

    for (let perm of remainingPermutations) {
      result.push(currentChar + perm)
    }
  }

  return result
}

console.log(permutations("a")) //[a]
console.log(permutations("sol")) // ["sol", "slo", "osl", "ols", "los", "lso"]
console.log(permutations("sola")) // ["sola", "sloa", "osla", "olas", "laos", "laso", ...]

console.log(recursivePermutations("a")) //[a]
console.log(recursivePermutations("sol")) // ["sol", "slo", "osl", "ols", "los", "lso"]
console.log(recursivePermutations("sola")) // ["sola", "sloa", "osla", "olas", "laos", "laso", ...]
