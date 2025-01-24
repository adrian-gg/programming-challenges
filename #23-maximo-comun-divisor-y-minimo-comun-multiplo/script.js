/*
 * Reto #23
 * MÁXIMO COMÚN DIVISOR Y MÍNIMO COMÚN MÚLTIPLO
 * Dificultad: MEDIA
 * Enunciado: Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 */

function mcd(numOne, numTwo) {
  if (typeof numOne !== "number" || typeof numTwo !== "number")
    "Parámetros no válidos."

  const resultOne = []
  const resultTwo = []

  for (let i = 1; i <= numOne; i++) {
    if (numOne % i === 0) resultOne.push(i)
  }

  for (let i = 1; i <= numTwo; i++) {
    if (numTwo % i === 0) resultTwo.push(i)
  }

  const result = Math.max(...resultOne.filter((n) => resultTwo.includes(n)))
  return result
}

function mcm(numOne, numTwo) {
  if (typeof numOne !== "number" || typeof numTwo !== "number")
    "Parámetros no válidos."

  let resultOne = numOne
  let resultTwo = numTwo
  let iOne = 2
  let iTwo = 2

  while (resultOne !== resultTwo) {
    resultOne < resultTwo
      ? ((resultOne = numOne * iOne), iOne++)
      : ((resultTwo = numTwo * iTwo), iTwo++)
  }

  return resultOne
}

console.log(mcd(15, 20)) // 5
console.log(mcm(15, 20)) // 60
console.log(mcd(56, 180)) // 4
console.log(mcm(56, 180)) // 2520
