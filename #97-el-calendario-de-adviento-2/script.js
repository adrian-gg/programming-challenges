import { createInterface } from "node:readline/promises"

const prompt = createInterface({
  input: process.stdin,
  output: process.stdout,
})

let quitState = false
let participants = ["Pepe", "Julio"]

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

async function addParticipant() {
  let askAgain = true

  while (askAgain) {
    console.clear()

    let promptAnswer = await prompt.question(`Nombre del participante:\n> `)

    if (participants.includes(promptAnswer)) {
      console.log("Ya existe este participante.")
      promptAnswer = await prompt.question(
        `¿Quieres añadir un participante? (y/n)\n> `
      )
      if (promptAnswer.toLowerCase() === "n") askAgain = false
      console.clear()
    } else {
      participants.push(promptAnswer)
      console.log(`Participante '${promptAnswer}' añadido.`)
      promptAnswer = await prompt.question(
        `¿Quieres añadir otro participante? (y/n)\n> `
      )
      if (promptAnswer.toLowerCase() === "n") askAgain = false
      console.clear()
    }
  }
}

async function removeParticipant() {
  let askAgain = true

  while (askAgain) {
    console.clear()

    let promptAnswer = await prompt.question(`Nombre del participante:\n> `)

    if (!participants.includes(promptAnswer)) {
      console.log("Este participante no existe.")
      promptAnswer = await prompt.question(
        `¿Quieres eliminar un participante? (y/n)\n> `
      )
      if (promptAnswer.toLowerCase() === "n") askAgain = false
      console.clear()
    } else {
      const participantRemoved = participants.splice(
        participants.indexOf(promptAnswer),
        1
      )
      console.log(`Participante '${participantRemoved}' eliminado.`)
      promptAnswer = await prompt.question(
        `¿Quieres eliminar otro participante? (y/n)\n> `
      )
      if (promptAnswer.toLowerCase() === "n") askAgain = false
      console.clear()
    }
  }
}

async function showParticipants() {
  const head =
    "-----------------------------\nParticipantes\n-----------------------------\n"
  const body = `${participants.map((p) => `- ${p}`).join("\n")}\n`

  console.log(head + body)
  await prompt.question("")
  console.clear()
}

async function startRaffle() {
  if (participants.length === 0) {
    console.log("Lista de participantes vacia.")
    await prompt.question("")
  } else {
    const randomParticipant = getRandomNumber(0, participants.length - 1)
    const participantRemoved = participants.splice(randomParticipant, 1)
    console.log(`¡Enhorabuena '${participantRemoved}'! Has ganado.`)
    await prompt.question("")
  }
  console.clear()
}

function quit() {
  quitState = true
}

async function adviento2() {
  const header = `=============================\nCalendario de adviento\n=============================\n`
  const options = {
    1: "Añadir participante",
    2: "Borrar participante",
    3: "Mostrar participantes",
    4: "Lanzar sorteo",
    5: "Salir",
  }

  const question = `${Object.values(options)
    .map((val, i) => `${i + 1}. ${val}`)
    .join("\n")}\n> `

  while (!quitState) {
    console.clear()
    let promptAnswer = await prompt.question(header + question)
    console.clear()

    switch (promptAnswer) {
      case "1":
        await addParticipant()
        break
      case "2":
        await removeParticipant()
        break
      case "3":
        await showParticipants()
        break
      case "4":
        await startRaffle()
        break
      case "5":
        quit()
        break

      default:
        console.log("Opción no válida.")
        await prompt.question("")
        break
    }
  }

  prompt.close()
}

;(async () => {
  await adviento2()
})()
