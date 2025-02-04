/*
 * Reto #34
 * LOS NÚMEROS PERDIDOS
 * Dificultad: FÁCIL
 * Enunciado: Dado un array de enteros ordenado y sin repetidos, crea una función que calcule
 * y retorne todos los que faltan entre el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

function lostNumbers(numbers) {
  try {
    const sortedNumbers = [...new Set(numbers)].sort((a, b) => a - b).toString()
    if (sortedNumbers.toString() !== numbers.toString() || numbers.length <= 1)
      throw new Error("Parámetro no válido.")

    const result = []
    for (let i = numbers[0]; i < numbers[numbers.length - 1]; i++) {
      if (!numbers.includes(i)) result.push(i)
    }
    return result
  } catch (error) {
    return error
  }
}

console.log(lostNumbers([1, 3, 5])) // [ 2, 4 ]
console.log(lostNumbers([-5, 1])) // [ -4, -3, -2, -1, 0 ]
console.log(lostNumbers([1, 3, 3, 5])) // Parámetro no válido.
console.log(lostNumbers([5, 3, 1])) // Parámetro no válido.
console.log(lostNumbers([5, 1])) // Parámetro no válido.
console.log(lostNumbers([5, 7, 1])) // Parámetro no válido.
console.log(lostNumbers([10, 7, 7, 1])) // Parámetro no válido.
console.log(lostNumbers([1])) // Parámetro no válido.
