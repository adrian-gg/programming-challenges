/*
 * Reto #29
 * ORDENA LA LISTA
 * Dificultad: FÁCIL
 * Enunciado: Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro adicional
 *   "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 */

function sort(numbers, order) {
  const numbs = [...numbers]
  const result = []

  const getMinMaxNumber = (numbers, minmax) => {
    let result = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
      const num = numbers[i]
      if (minmax === "min" && num < result) result = num
      else if (minmax === "max" && num > result) result = num
    }
    return result
  }

  while (result.length < numbers.length) {
    //const num = order === "asc" ? Math.min(...numbs) : Math.max(...numbs)
    const num = getMinMaxNumber(numbs, order === "asc" ? "min" : "max")
    result.push(num)
    numbs.splice(numbs.indexOf(num), 1)
  }

  return result
}

console.log(sort([4, 6, 1, 8, 2], "asc")) // 1, 2, 4, 6, 8
console.log(sort([4, 6, 1, 8, 2], "desc")) // 8, 6, 4, 2, 1
