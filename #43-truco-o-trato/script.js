/*
 * Reto #43
 * TRUCO O TRATO
 * Dificultad: FÁCIL
 *
 * Enunciado: Este es un reto especial por Halloween.
 * Deberemos crear un programa al que le indiquemos si queremos realizar "Truco o Trato" y
 * un listado (array) de personas con las siguientes propiedades:
 * - Nombre de la niña o niño
 * - Edad
 * - Altura en centímetros
 *
 * Si las personas han pedido truco, el programa retornará sustos (aleatorios)
 * siguiendo estos criterios:
 * - Un susto por cada 2 letras del nombre por persona
 * - Dos sustos por cada edad que sea un número par
 * - Tres sustos por cada 100 cm de altura entre todas las personas
 * - Sustos: 🎃 👻 💀 🕷 🕸 🦇
 *
 * Si las personas han pedido trato, el programa retornará dulces (aleatorios)
 * siguiendo estos criterios:
 * - Un dulce por cada letra de nombre
 * - Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
 * - Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
 * - Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩
 */

const Halloween = {
  TRICK: "TRICK",
  TREAT: "TREAT",
}

function trickOrTreat(trickOrTreat, kids) {
  const SCARES = ["🎃", "👻", "💀", "🕷", "🕸", "🦇"]
  const SWEETS = ["🍰", "🍬", "🍡", "🍭", "🍪", "🍫", "🧁", "🍩"]

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max + min) + 1 - min)

  let result = []
  let names = 0
  let ages = 0
  let heights = 0
  let total = 0

  if (trickOrTreat === "TRICK") {
    kids.forEach((kid) => {
      names += kid[0].length
      ages += kid[1] % 2 === 0 ? 1 : 0
      heights += kid[2]
    })
    total = Math.floor(names / 2) + ages * 2 + Math.floor(heights / 100) * 3
    while (result.length !== total) {
      result.push(SCARES[getRandomNumber(0, SCARES.length - 1)])
    }
  } else if (trickOrTreat === "TREAT") {
    kids.forEach((kid) => {
      names += kid[0].length // 21
      ages += Math.floor(kid[1] / 3) >= 3 ? 3 : Math.floor(kid[1] / 3) // 8
      heights += Math.floor(kid[2] / 50) >= 3 ? 3 : Math.floor(kid[2] / 50) // 7
    })
    total = names + ages + heights * 2
    while (result.length !== total) {
      result.push(SWEETS[getRandomNumber(0, SWEETS.length - 1)])
    }
  }

  return result.join("")
}

console.log(
  trickOrTreat(Halloween.TRICK, [
    ["Brais", 35, 177],
    ["Sara", 9, 122],
    ["Pedro", 5, 80],
    ["Roswell", 3, 54],
  ])
) //10*1 + 0*2 + 4*3 = 22
console.log(
  trickOrTreat(Halloween.TREAT, [
    ["Brais", 35, 177],
    ["Sara", 9, 122],
    ["Pedro", 5, 80],
    ["Roswell", 3, 54],
  ])
) //21*1 + 8*1 + 7*2 = 43
