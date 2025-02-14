/*
 * Reto #44
 * BUMERANES
 * Dificultad: FÁCIL
 * Enunciado: Crea una función que retorne el número total de bumeranes de un array de números
 * enteros e imprima cada uno de ellos.
 * - Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, en el que el
 *   primero y el último son iguales, y el segundo es diferente. Por ejemplo [2, 1, 2].
 * - En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2] y [4, 2, 4]).
 */

function numberOfBoomerangs(numbers) {
  let result = []
  for (let i = 0; i < numbers.length - 2; i++) {
    const A = numbers[i]
    const B = numbers[i + 1]
    const C = numbers[i + 2]
    if ((A === C) & (A !== B)) {
      result.push([A, B, C])
      console.log(result[result.length - 1])
    }
  }

  return result.length
}

console.log(numberOfBoomerangs([2, 1, 2, 3, 3, 4, 2, 4])) //[2, 1, 2], [4, 2, 4], 2
console.log(numberOfBoomerangs([2, 1, 2, 1, 2])) //[2, 1, 2], [1, 2, 1], [2, 1, 2], 3
console.log(numberOfBoomerangs([1, 2, 3, 4, 5])) //0
console.log(numberOfBoomerangs([2, 2, 2, 2, 2])) //0
console.log(numberOfBoomerangs([2, -2, 2, -2, 2])) //[2, -2, 2], [-2, 2, -2], [2, -2, 2], 3
console.log(numberOfBoomerangs([2, -2])) //0
console.log(numberOfBoomerangs([2])) //0
console.log(numberOfBoomerangs([])) //0
