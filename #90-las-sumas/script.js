function findSums(numbers, target) {
  let sortedAndFilteredNumbers = numbers
    .sort((a, b) => a - b)
    .filter((number) => number > 0)

  if (sortedAndFilteredNumbers.length === 0) return []

  const results = []
  const seenCombinations = new Set()

  const sum = (arrNumbers) => {
    const res = arrNumbers.reduce((acc, val) => acc + val, 0)
    const combinationKey = arrNumbers.join(",")

    if (res === target && !seenCombinations.has(combinationKey)) {
      results.push(arrNumbers)
      seenCombinations.add(combinationKey)
    }

    return res
  }

  for (let i = 0; i < sortedAndFilteredNumbers.length; i++) {
    for (let j = i + 1; j < sortedAndFilteredNumbers.length; j++) {
      const arrNumbers = sortedAndFilteredNumbers.slice(i, j + 1)

      if (arrNumbers.length >= 2) {
        sum(arrNumbers)
      }
    }
  }

  return results
}

console.log(findSums([1, 5, 2, 2, 1, 1], 6)) // [ [ 1, 1, 2, 2 ], [ 1, 5 ] ]
console.log(findSums([1, 5, 3, 2], 6)) // [ [ 1, 2, 3 ], [ 1, 5 ] ]
console.log(findSums([1, 2, 1, 1, 1, 1, 2, 1], 6)) // [ [ 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 2 ], [ 1, 1, 2, 2 ] ]
console.log(findSums([1, 2, 2, 1], 4)) // [ [ 1, 1, 2 ], [ 2, 2 ] ]
