function drawACircle(radio) {
  if (radio <= 0) {
    console.log("El radio debe ser un número positivo.")
    return
  }

  const aspectRatioFactor = radio === 1 ? 1.2 : 1.0
  let circle = ""

  for (let i = -radio; i <= radio; i++) {
    let line = ""

    for (let j = -radio; j <= radio; j++) {
      const distance = Math.round(
        Math.sqrt(
          Math.pow(j * aspectRatioFactor, 2) +
            Math.pow(i * aspectRatioFactor, 2)
        )
      )

      if (distance >= radio && distance <= radio) {
        line += "⬜"
      } else {
        line += "⬛"
      }
    }

    circle += `${line}\n`
  }

  return circle
}

console.log(drawACircle(1))
console.log(drawACircle(2))
console.log(drawACircle(3))
console.log(drawACircle(4))
console.log(drawACircle(5))
console.log(drawACircle(6))
console.log(drawACircle(7))
console.log(drawACircle(8))
