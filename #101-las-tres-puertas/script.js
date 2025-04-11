const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

function threeDoors() {
  const win = [0, 0]
  for (let i = 0; i < 1000; i++) {
    const doors = ["G", "G", "G"]
    const carIndex = getRandomNumber(0, 2)
    doors[carIndex] = "C"

    const contestantChoice = getRandomNumber(0, 2)

    // Host selecciona una puerta con cabra que no sea la del concursante
    const hostOptions = [0, 1, 2].filter(
      (i) => i !== contestantChoice && doors[i] === "G"
    )
    const hostChoice = hostOptions[getRandomNumber(0, hostOptions.length - 1)]

    // No cambiar
    if (doors[contestantChoice] === "C") win[0] += 1

    // Cambiar: elegir la única puerta que no es la del concursante ni la del host
    const switchChoice = [0, 1, 2].filter(
      (i) => i !== contestantChoice && i !== hostChoice
    )[0]
    if (doors[switchChoice] === "C") win[1] += 1
  }

  return (
    `La probabilidad de ganar quedándote es: ${((win[0] / 1000) * 100).toFixed(
      2
    )}%\n` +
    `La probabilidad de ganar cambiando es: ${((win[1] / 1000) * 100).toFixed(
      2
    )}%`
  )
}

console.log(threeDoors())
//La probabilidad de ganar quedándote es: 33.00%
//La probabilidad de ganar cambiando es: 67.00%
