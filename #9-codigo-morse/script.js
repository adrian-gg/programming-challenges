/*
 * Reto #9
 * CÓDIGO MORSE
 * Dificultad: MEDIA
 * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y " / " entre palabras.
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 */

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,?/"'
const MORSECODES = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
  "-----",
  ".----",
  "..---",
  "...--",
  "....-",
  ".....",
  "-....",
  "--...",
  "---..",
  "----.",
  ".-.-.-",
  "--..--",
  "..--..",
  "-..-.",
  ".-..-.",
]

function decoder(text) {
  if (typeof text !== "string") return "Parámetro no valido."
  const textToDecode = text.toUpperCase()
  const isMorse =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,?"'
      .split("")
      .filter((c) => textToDecode.includes(c)).length === 0

  const words = textToDecode.split(isMorse ? " / " : " ")
  const result = words
    .map((word) => {
      const letters = word.split(isMorse ? " " : "").map((char) => {
        const intexChar = isMorse
          ? MORSECODES.indexOf(char)
          : CHARS.indexOf(char)
        const letter = isMorse ? CHARS[intexChar] : MORSECODES[intexChar]
        return letter ? letter : "✖"
      })
      return letters.join(isMorse ? "" : " ")
    })
    .join(isMorse ? " " : " / ")

  return result.includes("✖") ? "Parámetro no valido." : result
}

console.log(decoder("Chocapic. Es una marca de cereales?")) // -.-. .... --- -.-. .- .--. .. -.-. .-.-.- / . ... / ..- -. .- / -- .- .-. -.-. .- / -.. . / -.-. . .-. . .- .-.. . ... ..--..
console.log(decoder("-.-. .... --- -.-. .- .--. .. -.-. .-.-.-")) // CHOCAPIC.
console.log(decoder("....")) // H
console.log(decoder("-----")) // 0
console.log(decoder("---- ....")) // Parámetro no valido.
console.log(decoder("¿Hola?")) // Parámetro no valido.
