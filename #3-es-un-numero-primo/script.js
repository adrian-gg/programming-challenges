/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Dificultad: MEDIA
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrimeNumber(num) {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && i !== num) {
      return false
    }
  }
  return true
}

function printPrimeNumbers(from, to) {
  if (
    from <= 0 ||
    to <= from ||
    typeof from !== "number" ||
    typeof to !== "number"
  ) {
    return console.log("Los parametros no son validos.")
  }

  for (let i = from === 1 ? 2 : from; i <= to; i++) {
    isPrimeNumber(i) && console.log(i)
  }
}

printPrimeNumbers(1, 100)
printPrimeNumbers(-2, 100)
printPrimeNumbers("1", [100])
printPrimeNumbers(50, 40)
