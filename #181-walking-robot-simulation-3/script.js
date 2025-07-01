function executeInstructions(n, startPos, s) {
  const DIRS = {
    R: [0, 1],
    D: [1, 0],
    L: [0, -1],
    U: [-1, 0],
  }
  const res = []

  const step = (direction, [row, col]) => {
    const newRow = row + direction[0]
    const newCol = col + direction[1]

    if (newRow < 0 || newRow >= n || newCol < 0 || newCol >= n) {
      return null
    }

    return [newRow, newCol]
  }

  for (let i = 0; i < s.length; i++) {
    const section = s.slice(i)
    let countSteps = 0
    let currentPosition = startPos

    while (countSteps < section.length) {
      const nextPosition = step(DIRS[section[countSteps]], currentPosition)
      if (nextPosition === null) break
      currentPosition = nextPosition
      countSteps++
    }

    res.push(countSteps)
  }

  return res
}

console.log(executeInstructions(3, [0, 1], "RRDDLU")) // [1,5,4,3,1,0]
console.log(executeInstructions(2, [1, 1], "LURD")) // [4,1,0,0]
console.log(executeInstructions(1, [0, 0], "LRUD")) // [0,0,0,0]
