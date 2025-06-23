const DIRS = {
  N: [0, 1],
  E: [1, 0],
  S: [0, -1],
  W: [-1, 0],
}
class Robot {
  constructor(width, height) {
    this.grid = [width, height]
    this.position = [0, 0]
    this.direction = "E"
    this.directionOrder = ["N", "E", "S", "W"]
  }

  /* 
  //step for small numbers
  step(num) {
    let currentDirIndex = this.directionOrder.indexOf(this.direction)
    let currentDirVector = DIRS[this.direction]

    for (let i = 0; i < num; i++) {
      const nextX = this.position[0] + currentDirVector[0]
      const nextY = this.position[1] + currentDirVector[1]

      if (
        nextX < 0 ||
        nextX >= this.grid[0] ||
        nextY < 0 ||
        nextY >= this.grid[1]
      ) {
        currentDirIndex = (currentDirIndex - 1 + 4) % 4
        this.direction = this.directionOrder[currentDirIndex]
        currentDirVector = DIRS[this.direction]
        i--
      } else {
        this.position = [nextX, nextY]
      }
    }

    return null
  } */
  //step for large numbers
  step(num) {
    while (num > 0) {
      const [dx, dy] = DIRS[this.direction]
      let stepsToBoundary = Infinity

      if (this.direction === "E") {
        stepsToBoundary = this.grid[0] - 1 - this.position[0]
      } else if (this.direction === "W") {
        stepsToBoundary = this.position[0]
      } else if (this.direction === "N") {
        stepsToBoundary = this.grid[1] - 1 - this.position[1]
      } else if (this.direction === "S") {
        stepsToBoundary = this.position[1]
      }

      let actualMovementSteps = Math.min(num, stepsToBoundary)

      if (actualMovementSteps > 0) {
        this.position = [
          this.position[0] + dx * actualMovementSteps,
          this.position[1] + dy * actualMovementSteps,
        ]
        num -= actualMovementSteps
      } else {
        let currentDirIndex = this.directionOrder.indexOf(this.direction)
        currentDirIndex = (currentDirIndex - 1 + 4) % 4
        this.direction = this.directionOrder[currentDirIndex]
      }
    }

    return null
  }

  getPos() {
    return this.position
  }

  getDir() {
    return this.direction
  }
}

function runRobot(commands, values) {
  if (commands[0] !== "Robot") return "Parámetro no válido."

  let robot = new Robot(...values[0])
  const res = [null]

  for (let i = 1; i < commands.length; i++) {
    const command = commands[i]
    const args = values[i]

    if (typeof robot[command] === "function") {
      try {
        res.push(robot[command](...args))
      } catch (error) {
        console.error(`Error al ejecutar el comando ${command}:`, error)
        res.push(`Error: ${error.message}`)
      }
    } else {
      res.push(`Error: Comando "${command}" no existe.`)
    }
  }

  return res
}

console.log(
  runRobot(
    [
      "Robot",
      "step",
      "step",
      "getPos",
      "getDir",
      "step",
      "step",
      "step",
      "getPos",
      "getDir",
    ],
    [[6, 3], [2], [2], [], [], [2], [1], [4], [], []]
  )
) //[null, null, null, [4, 0], "E", null, null, null, [1, 2], "W"]
