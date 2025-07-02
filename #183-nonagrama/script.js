import { getRandomNumber, transpose } from "../%23127-utils/script.js"

function nonogram(w, h) {
  const randomNonogram = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => getRandomNumber(1))
  )

  const generateClues = (list) => {
    return list.map((line) => {
      const clues = []
      let currentBlockSize = 0
      for (let i = 0; i < line.length; i++) {
        if (line[i] === 1) {
          currentBlockSize++
        } else {
          if (currentBlockSize > 0) {
            clues.push(currentBlockSize)
          }
          currentBlockSize = 0
        }
      }
      if (currentBlockSize > 0) {
        clues.push(currentBlockSize)
      }
      return clues.length > 0 ? clues : [0]
    })
  }

  const rowClues = generateClues(randomNonogram)
  const colClues = generateClues(transpose(randomNonogram))

  return {
    grid: randomNonogram,
    rows: rowClues,
    cols: colClues,
  }
}

console.log(nonogram(5, 5))
/*
{
  grid: [
    [ 1, 0, 0, 0, 0 ],
    [ 0, 1, 1, 0, 1 ],
    [ 1, 1, 0, 0, 0 ],
    [ 1, 0, 0, 1, 1 ],
    [ 1, 0, 0, 0, 1 ]
  ],
  rows: [ [ 1 ], [ 2, 1 ], [ 2 ], [ 1, 2 ], [ 1, 1 ] ],
  cols: [ [ 1, 3 ], [ 2 ], [ 1 ], [ 1 ], [ 1, 2 ] ]
}
  */
