/*
 * Reto #51
 * EL RETO RANDOM
 * Dificultad: ?
 *
 * Enunciado: Crea tu propio enunciado para que forme parte de los retos.
 * - Ten en cuenta que su dificultad debe ser asumible y seguir un estilo semejante a los demás.
 * - Si quieres también puedes proponer tu propia solución al reto (en el lenguaje que quieras).
 */

/*
 * Reto #51
 * ITERACIONES EN ROTORES
 * Dificultad: FÁCIL
 *
 * Enunciado:
 * Se te proporciona un objeto ROLLS que contiene cuatro rotores (A, B, C, D), cada
 * uno representado por una cadena de letras mayúsculas. Tu tarea es implementar
 * una función llamada runText que tome un texto y un nombre de rotor como entrada,
 * y determine cuántas iteraciones son necesarias para encontrar cada letra del
 * texto en el rotor especificado.
 * A la hora de rocorrer el rotor, si la letra es impar se hará de forma ascendnete. Si es par, descendente.
 * Ejemplo: runText("abc", "B") a: 19 + b: 5 + c: 10 = 34
 * Notas:
 * Solo se contarán las letras que hay en ROLLS a escepción de acentos, los cuales
 * se eliminarán.
 */

const ROLLS = {
  A: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  B: "FDKEGBAJZLQWTRPCMOUXNYIVSH",
  C: "XKJFPNOHRMYLIDEWCQTZBGVAUS",
  D: "BWXSNPKRTLVQUHFGYJACDZIMOE",
}

function runText(text, roll) {
  const textNormalized = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  const letters = textNormalized.toUpperCase().split("")
  let couter = 0

  letters.forEach((letter, i) => {
    if (letter !== " ") {
      if (i % 2 === 0) {
        for (let i = ROLLS[roll].length - 1; i > 0; i--) {
          const letterFromArr = ROLLS[roll][i]
          if (letterFromArr === letter) return
          couter += 1
        }
      } else {
        for (let i = 0; i < ROLLS[roll].length; i++) {
          const letterFromArr = ROLLS[roll][i]
          if (letterFromArr === letter) return
          couter += 1
        }
      }
    }
  })

  console.log(roll, couter)
}

runText("Hola mundo", "A") // 112
runText("Hola mundo", "B") // 123
runText("Hola mundo", "C") // 94
runText("Hola mundo", "D") // 139
