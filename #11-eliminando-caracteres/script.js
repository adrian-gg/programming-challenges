/*
 * Reto #11
 * ELIMINANDO CARACTERES
 * Dificultad: FÁCIL
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 */

function printNonCommon(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string")
    return "Parámetros no válidos."

  const lettersNoDuplicatedFromStr1 = [...new Set(str1.replaceAll(" ", ""))]
  const lettersNoDuplicatedFromStr2 = [...new Set(str2.replaceAll(" ", ""))]

  const out1 = lettersNoDuplicatedFromStr1
    .filter((letter) => !lettersNoDuplicatedFromStr2.includes(letter))
    .join("")
  const out2 = lettersNoDuplicatedFromStr2
    .filter((letter) => !lettersNoDuplicatedFromStr1.includes(letter))
    .join("")

  console.log(`out1: ${out1}`, `out2: ${out2}`)
}

printNonCommon("brais", "gari") //out1: bs out2: g
printNonCommon("Me gusta Java", "Me gusta Kotlin") //out1: Jv out2: Kolin
printNonCommon(
  'Usa el canal de nuestro discord (https://example.com/discord) "\uD83D\uDD01reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad',
  "Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada."
) //out1: U(:/)"🔁-, out2: PFkRqvó
