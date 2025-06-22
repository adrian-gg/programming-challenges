function robotSim(commands, obstacles) {
  const DIR = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0],
  }
  const directions = Object.keys(DIR)
  const obstacleSet = new Set(obstacles.map((o) => o[0] + "," + o[1]))

  let robotPos = [0, 0] //x, y
  let robotDirIndex = 0
  let maxSquaredEuclideanDistance = 0

  const turn = (turnDirection) => {
    const delta = turnDirection === -1 ? 1 : -1
    robotDirIndex = (robotDirIndex + delta + 4) % 4
  }

  commands.forEach((command) => {
    if (command < 0) {
      turn(command)
    } else {
      const currentDirVector = DIR[directions[robotDirIndex]]

      for (let i = 0; i < command; i++) {
        const nextX = robotPos[0] + currentDirVector[0]
        const nextY = robotPos[1] + currentDirVector[1]

        if (obstacleSet.has(nextX + "," + nextY)) break

        robotPos = [nextX, nextY]

        maxSquaredEuclideanDistance = Math.max(
          maxSquaredEuclideanDistance,
          nextX ** 2 + nextY ** 2
        )
      }
    }
  })

  return maxSquaredEuclideanDistance
}

console.log(robotSim([4, -1, 3], [])) //25
console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]])) //65
console.log(robotSim([6, -1, -1, 6], [[0, 0]])) //36
