function maxEqualRowsAfterFlips(matrix) {
  const patternCounts = new Map()

  for (let i = 0; i < matrix.length; i++) {
    const currentRow = matrix[i]
    let normalizedRow = []

    if (currentRow[0] === 1) {
      for (let j = 0; j < currentRow.length; j++) {
        normalizedRow.push(currentRow[j] === 0 ? 1 : 0)
      }
    } else {
      normalizedRow = [...currentRow]
    }

    const patternString = normalizedRow.join("")

    patternCounts.set(
      patternString,
      (patternCounts.get(patternString) || 0) + 1
    )
  }

  let maxRows = 0
  for (const count of patternCounts.values()) {
    if (count > maxRows) {
      maxRows = count
    }
  }

  return maxRows
}

console.log(
  maxEqualRowsAfterFlips([
    [0, 1],
    [1, 1],
  ])
) //1
console.log(
  maxEqualRowsAfterFlips([
    [0, 1],
    [1, 0],
  ])
) //2
console.log(
  maxEqualRowsAfterFlips([
    [0, 0, 0],
    [0, 0, 1],
    [1, 1, 0],
  ])
) //2
