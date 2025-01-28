/*
 * Reto #27
 * VECTORES ORTOGONALES
 * Dificultad: FÁCIL
 * Enunciado: Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 */

function areOrthogonal(vecOne, vecTwo) {
  if (vecOne.length !== 2 || vecTwo.length !== 2)
    return "Parámetros no válidos."

  return vecOne[0] * vecTwo[0] + vecOne[1] * vecTwo[1] === 0
    ? `Los vectores (${vecOne.join(", ")}) y (${vecTwo.join(
        ", "
      )}) son ortogonales.`
    : `Los vectores (${vecOne.join(", ")}) y (${vecTwo.join(
        ", "
      )}) no son ortogonales.`
}

console.log(areOrthogonal([1, 2], [2, 1])) //Los vectores (1, 2) y (2, 1) no son ortogonales.
console.log(areOrthogonal([2, 1], [-1, 2])) //Los vectores (2, 1) y (-1, 2) son ortogonales.
