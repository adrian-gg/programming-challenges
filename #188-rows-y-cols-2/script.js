import { rotate, binaryToDecimal } from "../%23127-utils/script.js"

function matrixScore(grid) {
  const switchValues = (array) => array.map((n) => (n === 1 ? 0 : 1))
  let res = 0

  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] === 0) {
      grid[i] = switchValues(grid[i])
    }
  }

  grid = rotate(grid)

  for (let i = 0; i < grid.length; i++) {
    const difference = grid[i].reduce(
      (acc, val) => (val === 0 ? acc - 1 : acc + 1),
      0
    )

    if (difference <= 0) {
      grid[i] = switchValues(grid[i])
    }
  }

  grid = rotate(grid, 3)

  for (let i = 0; i < grid.length; i++) {
    res += binaryToDecimal(grid[i].join(""))
  }

  return res
}

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ])
) //39
console.log(matrixScore([[0]])) //1
