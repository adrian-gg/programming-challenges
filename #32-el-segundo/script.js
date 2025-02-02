/*
 * Reto #32
 * EL SEGUNDO
 * Dificultad: FÁCIL
 * Enunciado: Dado un listado de números, encuentra el SEGUNDO más grande.
 */

function findSecondGreater(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0)
    return "Parámetro no válido"

  const sortedNumbers = [...new Set(numbers)].sort((a, b) => a - b)
  return sortedNumbers[
    sortedNumbers.length - (sortedNumbers.length === 1 ? 1 : 2)
  ]
}

console.log(findSecondGreater([4, 6, 1, 8, 2])) // 6
console.log(findSecondGreater([4, 6, 8, 8, 6])) // 6
console.log(findSecondGreater([4, 4])) // 4
console.log(findSecondGreater([])) // Parámetro no válido
