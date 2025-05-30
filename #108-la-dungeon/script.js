/* function calculateMinimumHP(dungeon) {
  let health = Math.max(0, dungeon[0][0] - 1)
  let pass = false
  let paths = []

  const nextRoom = (hp, y = 0, x = 0) => {
    hp += dungeon[y][x]

    if (hp > 0) {
      if (x + 1 <= dungeon[y].length - 1) {
        nextRoom(hp, y, x + 1)
      }

      if (y + 1 <= dungeon.length - 1) {
        nextRoom(hp, y + 1, x)
      }

      if (!dungeon[y]?.[x + 1] && !dungeon[y + 1]?.[x]) {
        paths.push(hp > 0)
      }
    }
  }

  while (!pass) {
    health++
    paths = []

    nextRoom(health)

    if (paths.includes(true)) {
      pass = true
    }
  }

  return health
} */

function calculateMinimumHP(dungeon) {
  const m = dungeon.length
  const n = dungeon[0].length

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(Infinity))

  dp[m][n - 1] = dp[m - 1][n] = 1
  console.log(dp)

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const minHealthOnExit = Math.min(dp[i + 1][j], dp[i][j + 1])
      dp[i][j] = Math.max(1, minHealthOnExit - dungeon[i][j])
    }
  }

  return dp[0][0]
}

console.log(
  calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ])
) // 7

console.log(
  calculateMinimumHP([
    [0, -2, -3],
    [-2, 0, -4],
    [-3, -4, -5],
  ])
) // 12

console.log(calculateMinimumHP([[0]])) // 1

console.log(
  calculateMinimumHP([
    [0, -3, -2, 1, -10, 2, -5, 0, -1, 3],
    [-5, -10, 10, 2, -3, -5, 0, 1, -2, -1],
    [10, 0, -3, -1, 5, -2, -4, -3, 10, -5],
    [-2, -1, -5, 3, -7, 0, 2, 3, -3, -2],
    [-3, 2, 1, -10, -5, 4, -6, 0, -1, 1],
    [0, -2, -3, 2, 3, -9, 4, -4, 2, -2],
    [-5, 1, 2, -4, -6, 5, 0, 1, -3, -1],
    [3, -2, 1, -1, -4, 3, -2, 2, 0, 5],
    [0, -3, -2, 4, 1, -3, 2, -2, -1, -4],
    [2, 3, -1, -5, -2, 4, 3, -1, 2, -6],
  ])
) // 6

console.log(
  calculateMinimumHP([
    [
      -2, -3, -5, -10, -20, -1, -1, 0, -5, -3, -2, -7, -1, -4, -1, 0, 0, -6, -8,
      -5,
    ],
    [
      -3, -4, 2, 0, -3, -2, -6, -1, -2, 2, -3, -6, -1, -5, -2, -3, -4, -5, -6,
      -7,
    ],
    [
      -4, -6, -1, -5, -3, 3, -4, -5, 0, -1, -3, -4, -5, -2, -4, -1, -2, -1, -1,
      -2,
    ],
    [
      1, -5, -7, -4, -2, -3, -6, -7, -3, -5, -3, -2, -1, 0, -3, -3, -4, -5, -6,
      -4,
    ],
    [
      -6, -3, -1, -2, -3, -5, -2, -1, -5, -6, -4, -3, -2, -1, -1, -2, -4, -6,
      -7, -8,
    ],
    [
      -2, -2, -3, -4, -5, -1, -2, -3, -1, -1, -4, -6, -2, -3, -3, -2, -1, -2,
      -1, -4,
    ],
    [
      0, -2, -1, -1, -3, -2, -3, -4, -1, -5, -3, -1, -4, -2, -1, -3, -4, -2, -3,
      -2,
    ],
    [
      -3, -4, -2, -3, -2, -1, -2, -1, -3, -4, -2, -3, -5, -2, -3, -4, -5, -4,
      -3, -1,
    ],
    [
      -1, -3, -2, -2, -3, -4, -2, -3, -4, -2, -3, -5, -6, -3, -2, -3, -1, -2,
      -1, -2,
    ],
    [
      -2, -1, -3, -4, -5, -1, -2, -3, -2, -2, -1, -4, -3, -2, -1, -3, -4, -5,
      -4, -2,
    ],
    [
      -3, -4, -1, -2, -1, -3, -2, -4, -5, -6, -5, -4, -2, -1, -1, -2, -3, -4,
      -2, -1,
    ],
    [
      -2, -3, -2, -4, -2, -3, -1, -2, -3, -5, -6, -3, -2, -1, -3, -4, -2, -1,
      -3, -2,
    ],
    [
      -1, -2, -1, -2, -3, -1, -4, -5, -2, -3, -2, -1, -2, -4, -3, -2, -1, -2,
      -3, -1,
    ],
    [
      -4, -3, -2, -1, -2, -3, -1, -2, -1, -2, -3, -4, -2, -3, -4, -3, -2, -4,
      -1, -1,
    ],
    [
      -3, -2, -1, -2, -3, -1, -3, -4, -2, -3, -2, -1, -3, -2, -4, -3, -2, -1,
      -2, -3,
    ],
    [
      -2, -1, -2, -3, -4, -3, -1, -2, -3, -4, -2, -1, -2, -3, -4, -2, -1, -3,
      -4, -2,
    ],
    [
      -3, -2, -1, -2, -1, -2, -3, -1, -2, -3, -4, -2, -1, -2, -1, -3, -2, -1,
      -2, -3,
    ],
    [
      -4, -1, -2, -3, -2, -1, -2, -3, -1, -2, -3, -2, -1, -3, -2, -4, -1, -2,
      -3, -1,
    ],
    [
      -2, -1, -2, -1, -3, -2, -4, -3, -2, -3, -1, -2, -1, -4, -3, -2, -1, -2,
      -1, -2,
    ],
    [
      -1, -2, -1, -3, -2, -1, -3, -2, -1, -4, -2, -1, -3, -2, -1, -2, -3, -1,
      -2, -10,
    ],
  ])
) //74
