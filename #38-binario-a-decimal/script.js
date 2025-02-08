/*
 * Reto #38
 * BINARIO A DECIMAL
 * Dificultad: MEDIA
 * Enunciado: Crea un programa se encargue de transformar un número binario a decimal sin utilizar
 * funciones propias del lenguaje que lo hagan directamente.
 */

function binaryToDecimal(binary) {
  if (
    typeof binary !== "string" ||
    binary === "" ||
    binary.match(/[^01]/g) !== null
  )
    return "Numero binario no permmitido."

  return binary
    .split("")
    .reverse()
    .reduce((acc, val, i) => {
      if (val === "1") return acc + 2 ** i
      return acc
    }, 0)
}

console.log(binaryToDecimal("1111011")) //123
console.log(binaryToDecimal("00110")) //6
console.log(binaryToDecimal("01100")) //12
console.log(binaryToDecimal("000000000")) //0
console.log(binaryToDecimal("001101001110")) //846
console.log(binaryToDecimal("00210")) //Numero binario no permmitido
console.log(binaryToDecimal("00b10")) //Numero binario no permmitido
console.log(binaryToDecimal("")) //Numero binario no permmitido
console.log(binaryToDecimal("-00110")) //Numero binario no permmitido
console.log(binaryToDecimal(" ")) //Numero binario no permmitido
console.log(binaryToDecimal(" 10011")) //Numero binario no permmitido
console.log(binaryToDecimal("1O1OO11")) //Numero binario no permmitido
