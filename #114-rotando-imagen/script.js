function rotate(matrix) {
  const arr = Array.from({ length: matrix[0].length }, () => [])

  for (let i = matrix.length - 1; i >= 0; i--) {
    const row = matrix[i]

    for (let j = 0; j < row.length; j++) {
      const num = row[j]
      arr[j].push(num)
    }
  }

  return arr
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
) //[[7, 4, 1], [8, 5, 2], [9, 6, 3]]

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
) //[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]

console.log(
  rotate([
    [3, 6, 9, 12],
    [2, 5, 8, 11],
    [1, 4, 7, 10],
  ])
) //[[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ]]

console.log(
  rotate([
    [5, 10, 15, 20, 25],
    [4, 9, 14, 19, 24],
    [3, 8, 13, 18, 23],
    [2, 7, 12, 17, 22],
    [1, 6, 11, 16, 21],
  ])
)
/*
[
  [ 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10 ],
  [ 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ],
  [ 21, 22, 23, 24, 25 ]
]
*/
