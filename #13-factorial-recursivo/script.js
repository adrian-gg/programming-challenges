/*
 * Reto #13
 * FACTORIAL RECURSIVO
 * Dificultad: FÁCIL
 * Enunciado: Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva.
 */

function factorial(num) {
  return num < 0
    ? "No tiene factorial"
    : num <= 1
    ? 1
    : factorial(num - 1) * num
}

console.log(factorial(0)) // 1
console.log(factorial(7)) //720
console.log(factorial(10)) //362888
console.log(factorial(1)) //1
console.log(factorial(-1)) //No tiene factorial
