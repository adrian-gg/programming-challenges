import { createInterface } from "node:readline/promises"

const prompt = createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function selectorHat() {
  const hatQuestions = {
    "¿Cómo te definirías?": [
      { answer: "1. Valiente", house: "gryffindor" },
      { answer: "2. Leal", house: "hufflepuff" },
      { answer: "3. Sabio", house: "ravenclaw" },
      { answer: "4. Ambicioso", house: "slytherin" },
    ],
    "¿Cuál es tu clase favorita?": [
      { answer: "1. Vuelo", house: "gryffindor" },
      { answer: "2. Pociones", house: "ravenclaw" },
      { answer: "3. Defensa contra las artes oscuras", house: "slytherin" },
      { answer: "4. Animales fantásticos", house: "hufflepuff" },
    ],
    "¿Dónde pasarías más tiempo?": [
      { answer: "1. Invernadero", house: "hufflepuff" },
      { answer: "2. Biblioteca", house: "ravenclaw" },
      { answer: "3. En la sala común", house: "slytherin" },
      { answer: "4. Explorando", house: "gryffindor" },
    ],
    "¿Cuál es tu color favorito?": [
      { answer: "1. Rojo", house: "gryffindor" },
      { answer: "2. Azul", house: "ravenclaw" },
      { answer: "3. Verde", house: "slytherin" },
      { answer: "4. Amarillo", house: "hufflepuff" },
    ],
    "¿Cuál es tu mascota?": [
      { answer: "1. Sapo", house: "ravenclaw" },
      { answer: "2. Lechuza", house: "gryffindor" },
      { answer: "3. Gato", house: "hufflepuff" },
      { answer: "4. Serpiente", house: "slytherin" },
    ],
  }
  const houses = {
    gryffindor: 0,
    ravenclaw: 0,
    hufflepuff: 0,
    slytherin: 0,
  }

  const questions = Object.keys(hatQuestions)

  for (const q of questions) {
    let questionPrompt = `\n${q}\n`
    hatQuestions[q].forEach((a) => {
      questionPrompt += `${a.answer}\n`
    })

    const promptAnswer = await prompt.question(`${questionPrompt}\n> `)
    const valueIndex = parseInt(promptAnswer) - 1
    houses[hatQuestions[q][valueIndex].house]++
  }

  const maxHousePoints = Object.values(houses).sort((a, b) => b - a)[0]
  const house =
    Object.keys(houses)[Object.values(houses).indexOf(maxHousePoints)]

  console.log(`¡Felicidades! Has entrado a ${house}`)
  prompt.close()
}

;(async () => {
  await selectorHat()
})()
