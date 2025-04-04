import { createInterface } from "node:readline/promises"

const prompt = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const DIFFICULTIES = {
  facil: { rows: 4, cols: 4, ghosts: 0.1 },
  medio: { rows: 5, cols: 5, ghosts: 0.15 },
  dificil: { rows: 6, cols: 6, ghosts: 0.25 },
}
const BLOCKS = {
  me: "😃",
  candy: "🟣",
  ghost: "⚪",
  room: "🔲",
  room_unrevealed: "⬛",
}
const ENIGMAS = [
  {
    question: "¿Qué criatura vuela en la noche y tiene alas negras?",
    answer: "murcielago",
  },
  {
    question: "¿Qué ser mountruoso tiene una sola cabeza, pero tres cuerpos?",
    answer: "cerbero",
  },
  {
    question:
      "¿Qué crece en la luna llena y convierte a las personas en lobos?",
    answer: "licantropo",
  },
  {
    question: "¿Qué asusta a los vampiros?",
    answer: "ajo",
  },
  {
    question: "¿Qué criatura chupa la sangre de sus víctimas?",
    answer: "vampiro",
  },
  {
    question: "¿Qué ser viste una túnica y se desplaza en una escoba?",
    answer: "bruja",
  },
  {
    question: "¿Qué criatura se levanta de su tumba en Halloween?",
    answer: "zombie",
  },
  {
    question: "¿Qué arácnido teje telarañas y tiene ocho patas?",
    answer: "araña",
  },
  {
    question: "¿Qué ser monstruoso es una construcción de huesos?",
    answer: "esqueleto",
  },
  {
    question: " ¿Qué animal negro trae mala suerte en Halloween?",
    answer: "gato",
  },
  {
    question:
      "¿Qué objeto tallado con una cara aterradora se ilumina en Halloween?",
    answer: "calabaza",
  },
  {
    question: '¿Qué palabra significa "travieso o trato" en Halloween?',
    answer: "truco",
  },
  {
    question: "¿Qué ser peludo aúlla en la luna llena?",
    answer: "lobo",
  },
  {
    question: "¿Qué insecto representa la transformación y la resurrección?",
    answer: "escarabajo",
  },
  {
    question: "¿Qué bebida mágica preparan las brujas?",
    answer: "pocima",
  },
  {
    question: "¿Qué comida se colecciona en una bolsa en Halloween?",
    answer: "caramelos",
  },
  {
    question: "¿Qué criatura terrorífica vuela por la noche y chilla?",
    answer: "buho",
  },
  {
    question: "¿Qué actividad espeluznante ocurre en una casa embrujada?",
    answer: "terror",
  },
  {
    question: "¿Qué animal se asocia con la maldad y las brujas?",
    answer: "serpiente",
  },
  {
    question: "¿Qué objeto vuela en el cielo de Halloween?",
    answer: "escoba",
  },
  {
    question: "¿Qué ser no tiene sombra y teme la luz?",
    answer: "fantasma",
  },
  {
    question: "¿Qué objeto lanza destellos en la noche de Halloween?",
    answer: "luciernaga",
  },
  {
    question: "¿Qué animal negro se considera un mal presagio en Halloween?",
    answer: "cuervo",
  },
  {
    question: "¿Qué objeto ilumina el camino en Halloween?",
    answer: "linterna",
  },
]
const ME_POSITION = { row: 0, col: 0 }
const MOVEMENTS = ["up", "down", "left", "right"]

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

const setHouse = () => {
  candyPosition = {
    row: getRandomNumber(1, DIFFICULTIES[difficulty].rows - 1),
    col: getRandomNumber(1, DIFFICULTIES[difficulty].cols - 1),
  }

  return new Array(DIFFICULTIES[difficulty].rows).fill(0).map((_, i) =>
    new Array(DIFFICULTIES[difficulty].cols).fill(0).map((_, j) => {
      const isGhost =
        Math.random() <= DIFFICULTIES[difficulty].ghosts && i !== 0 && j !== 0
      return {
        block: isGhost
          ? "ghost"
          : candyPosition.row === i && candyPosition.col === j
          ? "candy"
          : "room",
        revealed: false,
      }
    })
  )
}

const renderHouse = () => {
  return hauntedHouse
    .map((r, i) =>
      r
        .map((c, j) => {
          return ME_POSITION.row === i && ME_POSITION.col === j
            ? hauntedHouse[ME_POSITION.row][ME_POSITION.col].block === "candy"
              ? BLOCKS["candy"]
              : BLOCKS["me"]
            : c.revealed
            ? BLOCKS[c.block]
            : BLOCKS.room_unrevealed
        })
        .join("")
    )
    .join("\n")
}

function printHouse() {
  console.clear()
  console.log(renderHouse())
  console.log("")
}

const getAvailableMovements = () => {
  const availableMovements = MOVEMENTS.filter(
    (movement) =>
      (movement === "up" &&
        ME_POSITION.row !== Math.max(0, ME_POSITION.row - 1)) ||
      (movement === "down" &&
        ME_POSITION.row !==
          Math.min(DIFFICULTIES[difficulty].rows - 1, ME_POSITION.row + 1)) ||
      (movement === "left" &&
        ME_POSITION.col !== Math.max(0, ME_POSITION.col - 1)) ||
      (movement === "right" &&
        ME_POSITION.col !==
          Math.min(DIFFICULTIES[difficulty].cols - 1, ME_POSITION.col + 1))
  )

  return availableMovements
}

function moveMe(move) {
  if (move === "up") ME_POSITION.row -= 1
  else if (move === "down") ME_POSITION.row += 1
  else if (move === "left") ME_POSITION.col -= 1
  else if (move === "right") ME_POSITION.col += 1
}

const getRandomEnigma = () => {
  return ENIGMAS[getRandomNumber(0, ENIGMAS.length - 1)]
}

/*--- HANDLERS---*/
let difficulty, candyPosition, hauntedHouse
let isGameStarted = false
let endGame = false

async function selectDifficulty() {
  let promptAnswer = await prompt.question(
    `Selecciona la dificultad (${Object.keys(DIFFICULTIES).join(", ")}):\n> `
  )

  promptAnswer = promptAnswer.toLowerCase()

  if (Object.keys(DIFFICULTIES).includes(promptAnswer)) {
    difficulty = promptAnswer
    hauntedHouse = setHouse()
    hauntedHouse[ME_POSITION.row][ME_POSITION.col].revealed = true

    printHouse()
    isGameStarted = true
  } else {
    console.log("Opción no válida.")
  }
}

async function askEnigma() {
  const countAnswers =
    hauntedHouse[ME_POSITION.row][ME_POSITION.col].block === "ghost" ? 2 : 1
  let count = 1

  while (count <= countAnswers) {
    const enigma = getRandomEnigma()

    let promptAnswer = await prompt.question(
      `${count}/${countAnswers} ${enigma.question}\n> `
    )

    promptAnswer = promptAnswer.toLowerCase()

    if (promptAnswer === enigma.answer) {
      console.log("¡Respuesta correcta!")
      count++
    } else {
      console.log("Respuesta incorrecta.")
    }
  }
}

async function move() {
  while (isGameStarted && !endGame) {
    const availableMovements = getAvailableMovements()
    let promptAnswer = await prompt.question(
      `Selecciona hacia donde quieres moverte (${availableMovements.join(
        ", "
      )}):\n> `
    )

    promptAnswer = promptAnswer.toLowerCase()

    if (availableMovements.includes(promptAnswer)) {
      moveMe(promptAnswer)
      printHouse()

      if (
        ME_POSITION.row === candyPosition.row &&
        ME_POSITION.col === candyPosition.col
      ) {
        hauntedHouse[ME_POSITION.row][ME_POSITION.col].revealed = true
        printHouse()
        console.log("¡Enhorabuena! Has encontrado la bolsa de caramelos.")
        endGame = true
      } else if (!hauntedHouse[ME_POSITION.row][ME_POSITION.col].revealed) {
        await askEnigma()
        hauntedHouse[ME_POSITION.row][ME_POSITION.col].revealed = true
      }
    } else {
      console.log("Opción no válida.")
    }
  }
}

async function theHauntedHouse() {
  console.clear()

  while (!endGame) {
    if (isGameStarted) {
      await move()
    } else {
      await selectDifficulty()
    }
  }

  prompt.close()
}

;(async () => {
  await theHauntedHouse()
})()
