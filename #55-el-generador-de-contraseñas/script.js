/*
 * Reto #55
 * EL GENERADOR DE CONTRASEÑAS
 * Dificultad: MEDIA
 *
 * Enunciado:
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

function generatePassword(length, options = false) {
  if (length < 8 || length > 16) return "Longitud no válida"

  const { uppercases = false, numbers = false, symbols = false } = options
  const letters = "abcdefghijklmnñopqrstuwxyz"
  const chars = [letters]
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min

  let result = ""
  let count = chars.length

  if (uppercases) chars.push(letters.toUpperCase())
  if (numbers) chars.push("0123456789")
  if (symbols) chars.push("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")

  while (result.length !== length) {
    const charBox = chars[count % chars.length]
    result += charBox[getRandomNumber(0, charBox.length - 1)]
    count++
  }

  return result
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("")
}

console.log(generatePassword(6))
console.log(generatePassword(8))
console.log(generatePassword(8, { uppercases: true }))
console.log(generatePassword(8, { uppercases: true, numbers: true }))
console.log(
  generatePassword(16, { uppercases: true, numbers: true, symbols: true })
)
