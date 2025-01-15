/*
 * Reto #14
 * ¿ES UN NÚMERO DE ARMSTRONG?
 * Dificultad: FÁCIL
 * Enunciado: Escribe una función que calcule si un número dado es un número de Amstrong (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información al respecto.
 */

function isArmstrong(number) {
  if (typeof number !== "number") return "Parámetro no válido."
  if (number < 0) return false

  const numberLength = number.toString().length

  return (
    number
      .toString()
      .split("")
      .reduce((acc, val) => acc + Number(val) ** numberLength, 0) === number
  )
}

console.log(isArmstrong(0)) //true
console.log(isArmstrong(371)) //true
console.log(isArmstrong(4210818)) //true
console.log(isArmstrong(-371)) //false
console.log(isArmstrong(372)) //false
console.log(isArmstrong(2015)) //false
