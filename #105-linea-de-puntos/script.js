function maxPoints(points) {
  if (points.length <= 1) return points.length

  let max = 0

  for (let i = 0; i < points.length; i++) {
    let slopes = new Map()
    let same = 1

    for (let j = 0; j < points.length; j++) {
      if (i === j) continue

      let [dx, dy] = [points[j][0] - points[i][0], points[j][1] - points[i][1]]

      if (dx === 0 && dy === 0) {
        same++
        continue
      }

      let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
      const g = gcd(dx, dy)
      dx /= g
      dy /= g

      if (dx < 0) {
        dx = -dx
        dy = -dy
      }

      const slopeKey = `${dx}/${dy}`
      slopes.set(slopeKey, (slopes.get(slopeKey) || 0) + 1)
    }

    const currentMax = Math.max(0, ...slopes.values()) + same
    max = Math.max(max, currentMax)
  }

  return max
}

console.log(
  maxPoints([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
) //3
console.log(
  maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ])
) //4
console.log(maxPoints([])) //0
