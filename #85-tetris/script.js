import { emitKeypressEvents } from "readline"

emitKeypressEvents(process.stdin)

if (process.stdin.isTTY) process.stdin.setRawMode(true)

const BOARD_SIZE = 10
const MOVES = ["LEFT", "DOWN", "RIGHT", "UP", "SPACE"]

const setPieceOnBoard = (piece) => {
  const {
    shape,
    directions,
    position: { x, y },
  } = piece

  let board = new Array(BOARD_SIZE)
    .fill(0)
    .map(() => new Array(BOARD_SIZE).fill("⬛"))

  directions.forEach(([dy, dx], i) => {
    const newY = y + dy
    const newX = x + dx

    if (newY >= 0 && newY < BOARD_SIZE && newX >= 0 && newX < BOARD_SIZE) {
      board[newY][newX] = shape[Math.floor(i / 3)][i % 3]
    }
  })
  return board
}

const printBoard = (board) => {
  console.clear()
  console.log(board.map((row) => row.join("")).join("\n"))
}

const rotatePiece = (piece) => {
  const line = piece.flat()
  return [
    [line[6], line[3], line[0]],
    [line[7], line[4], line[1]],
    [line[8], line[5], line[2]],
  ]
}

function movePice(move, piece) {
  let newPiece = { ...piece }

  if (!(newPiece.position.y < BOARD_SIZE - (newPiece.rotation === 0 ? 1 : 2)))
    return false

  if (
    (move === "UP" || move === "SPACE") &&
    newPiece.position.y < BOARD_SIZE - 2 &&
    newPiece.position.x >= 1 &&
    newPiece.position.x <= BOARD_SIZE - 2
  ) {
    newPiece.shape = rotatePiece(newPiece.shape)
    newPiece.rotation = (newPiece.rotation + 90) % 360
  } else if (
    move === "LEFT" &&
    newPiece.position.x > (newPiece.rotation === 90 ? 0 : 1)
  ) {
    newPiece.position.x -= 1
  } else if (
    move === "DOWN" &&
    newPiece.position.y < BOARD_SIZE - (newPiece.rotation === 0 ? 1 : 2)
  ) {
    newPiece.position.y += 1
  } else if (
    move === "RIGHT" &&
    newPiece.position.x < BOARD_SIZE - (newPiece.rotation === 270 ? 1 : 2)
  ) {
    newPiece.position.x += 1
  }

  return newPiece
}

let piece = {
  shape: [
    ["⬜", "⬛", "⬛"],
    ["⬜", "⬜", "⬜"],
    ["⬛", "⬛", "⬛"],
  ],
  directions: [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ],
  rotation: 0,
  position: {
    x: 1,
    y: 1,
  },
}

let boardWithPiece = setPieceOnBoard(piece)
printBoard(boardWithPiece)

process.stdin.on("keypress", (_, key) => {
  let move = key.name.toUpperCase()
  if (MOVES.includes(move)) {
    piece = movePice(move, piece)

    if (piece) {
      boardWithPiece = setPieceOnBoard(piece)
      printBoard(boardWithPiece)
      if (!(piece.position.y < BOARD_SIZE - (piece.rotation === 0 ? 1 : 2)))
        process.exit()
    } else {
      process.exit()
    }
  } else if (move === "ESCAPE") process.exit()
})
