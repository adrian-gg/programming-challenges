import { createInterface } from "node:readline/promises"

const prompt = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const formatText = (text) => {
  return text
    .toLowerCase()
    .replace(/ñ/g, "V")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/V/g, "ñ")
}

async function the100PintWord() {
  const CHARS = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
  let value = 0

  while (value < 100 || value > 100) {
    let promptAnswer = await prompt.question(`Introduce una palabra: \n> `)

    promptAnswer.trim()

    if (promptAnswer !== "" && !promptAnswer.includes(" ")) {
      value = formatText(promptAnswer)
        .toUpperCase()
        .split("")
        .reduce((acc, val) => acc + CHARS.indexOf(val) + 1, 0)

      console.log(`El valor de "${promptAnswer}" es ${value}`)

      if (value === 100) {
        console.log(
          "¡Has introducido una palabra de 100 puntos! El programa finalizará."
        )
      } else {
        value = 0
      }
    }
  }

  prompt.close()
}

;(async () => {
  await the100PintWord()
})()
