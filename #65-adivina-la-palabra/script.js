import { createInterface } from "node:readline/promises"

const prompt = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * max - min + 1 + min)

const fragmentWord = (word) => {
  let count = 0
  let fragmentedWord = word

  while (count < Math.round(word.length / 2)) {
    const randomLetter =
      fragmentedWord[getRandomNumber(0, fragmentedWord.length - 1)]

    if (randomLetter !== "_") {
      fragmentedWord = fragmentedWord
        .split("")
        .map((l) => {
          if (l === randomLetter) {
            count++
            return "_"
          }
          return l
        })
        .join("")
    }
  }

  return fragmentedWord
}

async function guessTheWorld() {
  const words = ["silencio", "manualidades", "desarrollo"]
  const word = words[getRandomNumber(0, words.length - 1)]
  let tries = Math.round((word.length - 1) / 3)
  let fragmentedWord = fragmentWord(word)

  while (tries > 0) {
    let promptAnswer = await prompt.question(
      `${fragmentedWord} (intentos: ${tries})\n> `
    )

    promptAnswer = promptAnswer.toLowerCase()

    if (promptAnswer.length === 1) {
      if (
        word.includes(promptAnswer) &&
        !fragmentedWord.includes(promptAnswer)
      ) {
        fragmentedWord = fragmentedWord
          .split("")
          .map((l, i) => (word[i] === promptAnswer ? promptAnswer : l))
          .join("")
      } else {
        console.log("Letra no encontrada o ya visible.")
      }
    } else if (promptAnswer.length === word.length) {
      if (promptAnswer === word) {
        tries = 0
        console.log(`¡Has acertado! La palabra oculta era ${word}.`)
      } else {
        console.log("La palabra no es correcta.")
      }
    } else {
      console.log("Texto inválido.")
    }

    if (!fragmentedWord.includes("_")) {
      tries = 0
      console.log(`¡Has acertado! La palabra oculta era ${word}.`)
    }

    tries--
  }

  if (fragmentedWord.includes("_") && tries <= 0) {
    console.log(`Has perdido. La palabra oculta era ${word}.`)
  }

  prompt.close()
}

;(async () => {
  await guessTheWorld()
})()
