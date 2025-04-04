function collision(position_a, speed_a, position_b, speed_b) {
  const A = {
    position: { x: position_a[0], y: position_a[1] },
    speed: { x: speed_a[0], y: speed_a[1] },
  }
  const B = {
    position: { x: position_b[0], y: position_b[1] },
    speed: { x: speed_b[0], y: speed_b[1] },
  }
  let col = false
  let time = 0
  let res = {}

  while (!col) {
    A.position.x += A.speed.x
    A.position.y += A.speed.y
    B.position.x += B.speed.x
    B.position.y += B.speed.y
    time++

    if (A.position.x === B.position.x && A.position.y === B.position.y) {
      col = true
      res.collision = A.position
      res.time = time
    }

    if (
      (A.speed.x > 0 && A.position.x > B.position.x) ||
      (A.speed.x < 0 && A.position.x < B.position.x) ||
      (A.speed.y > 0 && A.position.y > B.position.y) ||
      (A.speed.y < 0 && A.position.y < B.position.y)
    ) {
      col = true
      res = "No se produce colisión."
    }
  }

  return res
}

console.log(collision([2, 0], [0, 1], [0, 2], [1, 0])) //{ collision: { x: 2, y: 2 }, time: 2 }
console.log(collision([0, 0], [1, 1], [1, 2], [0, 1])) //No se produce colisión.
console.log(collision([0, 0], [10, 5], [100, 50], [-5, -2.5])) //No se produce colisión.
