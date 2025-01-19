/*
 * Reto #18
 * TRES EN RAYA
 * Dificultad: DIFÍCIL
 * Enunciado: Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta. O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.
 */

function checkTicTacToe(board) {
  const concatedBoard = board.flat()
  const Xs = concatedBoard.filter((r) => r === "X").length
  const Os = concatedBoard.filter((r) => r === "O").length
  if (Xs > 5 || Os > 5) return "Nulo"

  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const winner = []
  wins.forEach((row) => {
    concatedBoard[row[0]] !== "" &&
      concatedBoard[row[0]] === concatedBoard[row[1]] &&
      concatedBoard[row[1]] === concatedBoard[row[2]] &&
      winner.push(concatedBoard[row[0]])
  })

  return winner.length === 0
    ? "Empate"
    : [...new Set(winner)].length > 1
    ? "Nulo"
    : winner[0]
}

console.log(
  checkTicTacToe([
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "O", "X"],
  ])
) // X
console.log(
  checkTicTacToe([
    ["X", "O", "X"],
    ["X", "X", "O"],
    ["X", "O", "O"],
  ])
) // X
console.log(
  checkTicTacToe([
    ["O", "O", "X"],
    ["", "X", "X"],
    ["", "O", "X"],
  ])
) // X

console.log(
  checkTicTacToe([
    ["O", "O", "O"],
    ["O", "X", "X"],
    ["O", "X", "X"],
  ])
) //O
console.log(
  checkTicTacToe([
    ["O", "O", "X"],
    ["X", "X", "O"],
    ["O", "O", "X"],
  ])
) // Empate
console.log(
  checkTicTacToe([
    ["", "O", "X"],
    ["", "X", "O"],
    ["", "O", "X"],
  ])
) // Empate
console.log(
  checkTicTacToe([
    ["O", "O", "O"],
    ["X", "X", "X"],
    ["O", "O", "X"],
  ])
) // Nulo
console.log(
  checkTicTacToe([
    ["X", "O", "X"],
    ["X", "X", "O"],
    ["X", "X", "X"],
  ])
) // Nulo
