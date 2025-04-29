function letterCombinations(digits) {
  if (digits.length > 4) return "Nope."

  const T9 = [
    " ",
    ",.?!",
    "ABC",
    "DEF",
    "GHI",
    "JKL",
    "MNO",
    "PQRS",
    "TUV",
    "WXYZ",
  ]
  let combinations = []

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i]

    if (i === 0) {
      combinations = T9[digit].split("")
    } else {
      for (let j = 0; j < combinations.length; j++) {
        combinations[j] = new Array(T9[digits[i]].length)
          .fill(combinations[j])
          .map((letter, k) => letter + T9[digits[i]][k])
      }

      combinations = combinations.flat()
    }
  }

  return combinations
}

console.log(letterCombinations("")) //[]
console.log(letterCombinations("2")) //["A","B","C"]
console.log(letterCombinations("23")) //['AD', 'AE', 'AF', 'BD', 'BE', 'BF', 'CD', 'CE', 'CF']
console.log(letterCombinations("234")) //['ADG', 'ADH', 'ADI', 'AEG', 'AEH', 'AEI', 'AFG', 'AFH', 'AFI', 'BDG', 'BDH', 'BDI', 'BEG', 'BEH', 'BEI', 'BFG', 'BFH', 'BFI', 'CDG', 'CDH', 'CDI', 'CEG', 'CEH', 'CEI', 'CFG', 'CFH', 'CFI']
