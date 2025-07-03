function magicSquare(n) {
  if (n <= 0 || n % 2 === 0) {
    console.error("El tamaño del cuadrado debe ser un número impar positivo.")
    return null
  }

  const square = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0))

  const constanteMagica = (n * (n * n + 1)) / 2

  let row = 0
  let col = Math.floor(n / 2)

  for (let num = 1; num <= n * n; num++) {
    square[row][col] = num

    let nextRow = row - 1
    let nextCol = col + 1

    if (nextRow < 0) {
      nextRow = n - 1
    }
    if (nextCol >= n) {
      nextCol = 0
    }

    if (square[nextRow][nextCol] !== 0) {
      row = row + 1
      if (row >= n) {
        row = 0
      }
    } else {
      row = nextRow
      col = nextCol
    }
  }

  return { result: constanteMagica, square }
}

console.log(magicSquare(3))
/*
{ 
  result: 15,
  square: [ 
    [ 8, 1, 6 ],
    [ 3, 5, 7 ],
    [ 4, 9, 2 ] ]
}
*/
console.log(magicSquare(5))
/*
{
  result: 65,
  square: [
    [ 17, 24, 1, 8, 15 ],
    [ 23, 5, 7, 14, 16 ],
    [ 4, 6, 13, 20, 22 ],
    [ 10, 12, 19, 21, 3 ],
    [ 11, 18, 25, 2, 9 ]
  ]
}
*/

console.log(magicSquare(7))
/*
{
  result: 175,
  square: [
    [ 30, 39, 48, 1, 10, 19, 28 ],
    [ 38, 47,  7, 9, 18, 27, 29 ],
    [ 46,  6,  8, 17, 26, 35, 37 ],
    [ 5, 14, 16, 25, 34, 36, 45 ],
    [ 13, 15, 24, 33, 42, 44,  4 ],
    [ 21, 23, 32, 41, 43,  3, 12 ],
    [ 22, 31, 40, 49, 2, 11, 20 ]
  ]
}
*/
