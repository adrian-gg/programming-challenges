/*
 * Reto #8
 * DECIMAL A BINARIO
 * Dificultad: FÁCIL
 * Enunciado: Crea un programa que se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function decimalToBinary(decimal) {
  if (typeof decimal !== "number") return "Parámetro no valido."

  const bases = [1]
  let number = decimal

  while (bases[0] <= decimal) {
    //0, 1, 2, 3, 4,  5,  6,  7,   8,   9,   ... (2 ** index)
    //1, 2, 4, 8, 16, 32, 64, 128, 256, 512, ... (result)
    bases.unshift(2 ** bases.length)
  }
  bases.shift()

  if (bases.length === 0) return 0

  const result = bases.map((num) => {
    if (num <= number) {
      number -= num
      return 1
    }
    return 0
  })

  return result.join("")
}

console.log(decimalToBinary(387)) //110000011
console.log(decimalToBinary(7)) //111
console.log(decimalToBinary(8)) //1000
console.log(decimalToBinary(0)) //0
console.log(decimalToBinary("0")) //Parámetro no valido.
