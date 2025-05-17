function rotate(matrix, deg = 1) {
  if (deg <= 0) return matrix

  let res = matrix
  deg = deg % 4

  while (deg > 0) {
    const arr = Array.from({ length: res[0].length }, () => [])

    for (let i = 0; i < res.length; i++) {
      const row = res[i]

      for (let j = 0; j < row.length; j++) {
        const num = row[j]
        arr[j].unshift(num)
      }
    }

    res = arr
    deg -= 1
  }

  return res
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
) //[[7, 4, 1], [8, 5, 2], [9, 6, 3]]

console.log(
  rotate(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    2
  )
) //[[ 9, 8, 7 ], [ 6, 5, 4 ], [ 3, 2, 1 ]]

console.log(
  rotate(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    3
  )
) //[[ 3, 6, 9 ], [ 2, 5, 8 ], [ 1, 4, 7 ]]
