/*
 * Reto #56
 * PRIMO, FIBONACCI Y PAR
 * Dificultad: MEDIA
 *
 * Enunciado:
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

function checkPrimeFibonacciEven(number) {
  const isPrime = () => {
    if (number <= 1) return false
    for (let i = 2; i <= number; i++) {
      if (number % i === 0 && i !== number) {
        return false
      }
    }
    return true
  }
  const isFibonacci = () => {
    const listNumbers = [0, 1]
    let i = 0

    while (listNumbers[listNumbers.length - 1] < number) {
      const firstNumber = listNumbers[i]
      const secondNumber = listNumbers[i + 1]
      listNumbers.push(firstNumber + secondNumber)
      i++
    }

    return listNumbers[listNumbers.length - 1] === number
  }
  const isEven = () => number % 2 === 0

  return `${number} ${isPrime() ? "" : "no "}es primo, ${
    isFibonacci() ? "" : "no es"
  }fibonacci y ${isEven() ? "" : "no "}es impar`
}

console.log(checkPrimeFibonacciEven(1))
console.log(checkPrimeFibonacciEven(2))
console.log(checkPrimeFibonacciEven(3))
console.log(checkPrimeFibonacciEven(4))
console.log(checkPrimeFibonacciEven(5))
console.log(checkPrimeFibonacciEven(6))
console.log(checkPrimeFibonacciEven(7))
console.log(checkPrimeFibonacciEven(8))
console.log(checkPrimeFibonacciEven(9))
console.log(checkPrimeFibonacciEven(10))
