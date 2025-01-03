/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Dificultad: DIFÍCIL
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 */

function setFibonacci(to) {
  if (typeof to === "number") {
    const listNumbers = [0, 1]

    for (let i = 0; i < to - 2; i++) {
      const firstNumber = listNumbers[i]
      const secondNumber = listNumbers[i + 1]
      listNumbers.push(firstNumber + secondNumber)
    }

    console.log(listNumbers.join(", "))
  } else {
    console.log("Input no válido.")
  }
}

setFibonacci("50")
setFibonacci(50)
setFibonacci([50])
