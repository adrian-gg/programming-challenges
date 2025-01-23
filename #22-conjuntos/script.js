/*
 * Reto #22
 * CONJUNTOS
 * Dificultad: FÁCIL
 * Enunciado: Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 */

function calculateSet(arrOne, arrTwo, common) {
  if (
    !Array.isArray(arrOne) ||
    !Array.isArray(arrTwo) ||
    typeof common !== "boolean"
  )
    return "Parámetros no válidos"

  const numsOne = [...new Set(arrOne)]
  const numsTwo = [...new Set(arrTwo)]
  /* const nums =
    numsOne.length > numsTwo.length ? [numsOne, numsTwo] : [numsTwo, numsOne]
  const result = [[], []]

  for (let i = 0; i < nums[0].length; i++) {
    const numFromOne = nums[0][i]
    const numFromTwo = nums[1][i]

    if (numFromTwo && nums[0].includes(numFromTwo)) result[0].push(numFromTwo)
    else result[1].push(numFromTwo)
    if (numFromOne && nums[1].includes(numFromOne)) result[0].push(numFromOne)
    else result[1].push(numFromOne)
  }

  return [...new Set(result[common ? 0 : 1])] */

  const result = [
    ...new Set(
      numsOne
        .filter((n) => (common ? numsTwo.includes(n) : !numsTwo.includes(n)))
        .concat(
          numsTwo.filter((n) =>
            common ? numsOne.includes(n) : !numsOne.includes(n)
          )
        )
    ),
  ]

  return result
}

console.log(calculateSet([1, 2, 3, 3, 4], [2, 2, 3, 3, 3, 4, 6], true)) //[ 2, 3, 4 ]
console.log(calculateSet([1, 2, 3, 3, 4], [2, 2, 3, 3, 3, 4, 6], false)) //[ 1, 6 ]
