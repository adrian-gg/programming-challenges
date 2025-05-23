function gameOfLife(board) {
  const rows = board.length
  const cols = board[0].length
  const nextState = Array.from({ length: rows }, () => Array(cols).fill(0))
  const DIRS = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
    [-1, 1], //up-right
    [1, 1], //right-down
    [1, -1], //down-left
    [-1, -1], //left-up
  ]

  const getLiveCells = (c, r) => {
    let live = 0

    for (const [dr, dc] of DIRS) {
      const nr = r + dr
      const nc = c + dc
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] === 1) {
        live++
      }
    }
    return live
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const liveCells = getLiveCells(c, r)
      if (board[r][c] === 1) {
        // Live cell
        nextState[r][c] = liveCells === 2 || liveCells === 3 ? 1 : 0
      } else {
        // Dead cell
        nextState[r][c] = liveCells === 3 ? 1 : 0
      }
    }
  }

  return nextState
}

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
) //[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
console.log(
  gameOfLife([
    [1, 1],
    [1, 0],
  ])
) //[[1,1],[1,1]]
