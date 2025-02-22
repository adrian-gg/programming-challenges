/*
 * Reto #52
 * EL FAMOSO FIZZ BUZZ V2
 * Dificultad: FÁCIL
 *
 * Enunciado:
 * Escribe la lógica de la función fizzbuzz para que dado un número, lo sustituya por:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 * De lo contrario retornará el número.
 * Solo puedes escribir código dentro de la función fizzbuzz y
 * NO puedes usar ningún tipo de bucle o condicional (incluyendo operadores ternarios)
 */

function fizzbuzz(num) {
  const result = [
    ["fizzbuzz", "fizz", "fizz", "fizz", "fizz"],
    ["buzz", num, num, num, num],
    ["buzz", num, num, num, num],
  ]

  console.log(result[num % 3][num % 5])
}

for (let i = 1; i <= 100; i++) {
  fizzbuzz(i)
}
