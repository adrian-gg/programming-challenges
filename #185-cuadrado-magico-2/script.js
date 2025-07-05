function magicSquare(n) {
  if (n === 2) {
    console.error(
      "No es posible crear un cuadrado mágico par de tamaño 2 o menor."
    )
    return null
  }
  if (n <= 0 || n % 2 !== 0) {
    console.error("El tamaño del cuadrado debe ser un número par positivo")
    return null
  }

  const magicSum = (n * (n * n + 1)) / 2
  let square

  if (n % 4 === 0) {
    square = Array(n)
      .fill(0)
      .map(() => Array(n).fill(0))
    let counter = 1

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        square[i][j] = counter++
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const rowMod = i % 4
        const colMod = j % 4

        if (
          ((rowMod === 0 || rowMod === 3) && (colMod === 0 || colMod === 3)) ||
          ((rowMod === 1 || rowMod === 2) && (colMod === 1 || colMod === 2))
        ) {
          square[i][j] = n * n + 1 - square[i][j]
        }
      }
    }
  } else {
    const m = n / 2

    const generateOddSubSquare = (size, startValue) => {
      const subSquare = Array(size)
        .fill(0)
        .map(() => Array(size).fill(0))
      let r = 0
      let c = Math.floor(size / 2)

      for (let num = startValue; num < startValue + size * size; num++) {
        subSquare[r][c] = num

        let nextRow = r - 1
        let nextCol = c + 1

        if (nextRow < 0) nextRow = size - 1
        if (nextCol >= size) nextCol = 0

        if (subSquare[nextRow][nextCol] !== 0) {
          r = r + 1
          if (r >= size) r = 0
        } else {
          r = nextRow
          c = nextCol
        }
      }
      return subSquare
    }

    const A = generateOddSubSquare(m, 1)
    const B = generateOddSubSquare(m, m * m + 1)
    const C = generateOddSubSquare(m, 2 * m * m + 1)
    const D = generateOddSubSquare(m, 3 * m * m + 1)

    square = Array(n)
      .fill(0)
      .map(() => Array(n).fill(0))
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        square[i][j] = A[i][j]
        square[i][j + m] = D[i][j]
        square[i + m][j] = C[i][j]
        square[i + m][j + m] = B[i][j]
      }
    }

    const k = Math.floor((n - 2) / 4)

    for (let col = 0; col < k; col++) {
      for (let row = 0; row < m; row++) {
        let temp = square[row][col]
        square[row][col] = square[row + m][col]
        square[row + m][col] = temp
      }
    }

    if (k > 1) {
      for (let col = m - (k - 1); col < m; col++) {
        for (let row = 0; row < m; row++) {
          let temp = square[row][col + m]
          square[row][col + m] = square[row + m][col + m]
          square[row + m][col + m] = temp
        }
      }
    }

    for (let i = 0; i < m; i++) {
      if (i !== Math.floor(m / 2)) {
        let temp = square[i][k]
        square[i][k] = square[i + m][k]
        square[i + m][k] = temp
      }
    }
  }

  return {
    result: magicSum,
    square: square,
  }
}

console.log(magicSquare(0)) //null
console.log(magicSquare(2)) //null
console.log(magicSquare(4))
/*
{
  result: 34,
  square: [
    [ 16, 2, 3, 13 ],
    [ 5, 11, 10, 8 ],
    [ 9, 7, 6, 12 ],
    [ 4, 14, 15, 1 ]
  ]
}
*/
console.log(magicSquare(6))
/*
{
  result: 111,
  square: [
    [ 26, 19, 6, 35, 28, 33 ],
    [ 21, 5, 7, 30, 32, 34 ],
    [ 22, 27, 2, 31, 36, 29 ],
    [ 8, 1, 24, 17, 10, 15 ],
    [ 3, 23, 25, 12, 14, 16 ],
    [ 4, 9, 20, 13, 18, 11 ]
  ]
}
  */
