const isSelfCrossing = (distance) => {
  const DIRS = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ]
  const visited = new Set()
  let x = 0,
    y = 0
  visited.add(`${x},${y}`)

  for (let i = 0; i < distance.length; i++) {
    const dir = DIRS[i % 4]

    for (let step = 0; step < distance[i]; step++) {
      x += dir[0]
      y += dir[1]
      const key = `${x},${y}`

      if (visited.has(key)) {
        return true
      }

      visited.add(key)
    }
  }

  return false
}

console.log(isSelfCrossing([2, 1, 1, 2])) //true
console.log(isSelfCrossing([1, 2, 3, 4])) //false
console.log(isSelfCrossing([1, 1, 1, 2, 1])) //true
