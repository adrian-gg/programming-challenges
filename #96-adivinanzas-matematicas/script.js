import { createInterface } from "node:readline/promises"

const prompt = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const SYMBOLS = ["+", "-", "*", "/"]

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

const generateQuestion = (numQuerstion) => {
  const numberSize = Math.floor((numQuerstion - 1) / 10) + 1
  const num1 = getRandomNumber(
    0,
    "9".repeat(numberSize + (Math.floor((numQuerstion - 1) / 5) % 2)) * 1
  )
  const num2 = getRandomNumber(0, "9".repeat(numberSize) * 1)
  const symbol = SYMBOLS[getRandomNumber(0, SYMBOLS.length - 1)]
  let answer

  if (symbol === "+") {
    answer = num1 + num2
  } else if (symbol === "-") {
    answer = num1 - num2
  } else if (symbol === "*") {
    answer = num1 * num2
  } else if (symbol === "/") {
    if (num2 === 0) return generateQuestion(numQuerstion)
    answer = Math.round(num1 / num2)
  }

  return { question: `${num1} ${symbol} ${num2} = ?`, answer }
}

function gameOver(numQuerstion) {
  numQuerstion--
  console.log(`
    Respuestas corretas: ${numQuerstion}
    ${
      numQuerstion <= 10
        ? "Meh... prueba suerte la próxima vez."
        : numQuerstion > 10 && numQuerstion <= 15
        ? "No esta mal, pero puedes mejorar."
        : numQuerstion > 15 && numQuerstion <= 19
        ? "¡Así se hace!"
        : "¡Perfecto!"
    }`)
}

async function mathematicalQuestions() {
  let numQuerstion = 1
  let isGameStarted = false
  let endGame = false
  console.clear()

  while (!endGame) {
    if (isGameStarted) {
      const { question, answer } = generateQuestion(numQuerstion)
      let promptAnswer = null
      let time = true

      const timeout = setTimeout(() => {
        console.log(`Se acabó el tiempo. La respuesta era (${answer})`)
        gameOver(numQuerstion)
        numQuerstion = 1
        isGameStarted = false
        time = false
        promptAnswer = null
        return
      }, 5000)

      promptAnswer = await prompt.question(`${question}\n> `)

      if (promptAnswer * 1 === answer && time) {
        numQuerstion++
      } else if (time) {
        console.log(`Respuesta incorrecta. La respuesta era (${answer})`)
        gameOver(numQuerstion)
        numQuerstion = 1
        isGameStarted = false
      }

      clearTimeout(timeout)
    } else {
      await prompt.question(`Press Enter to start\n `)
      console.clear()
      isGameStarted = true
    }
  }

  prompt.close()
}

;(async () => {
  await mathematicalQuestions()
})()
