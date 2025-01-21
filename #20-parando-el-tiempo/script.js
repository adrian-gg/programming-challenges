/*
 * Reto #20
 * PARANDO EL TIEMPO
 * Dificultad: MEDIA
 * Enunciado: Crea una función que sume 2 números y retorne su resultado pasados unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma asíncrona, es decir, sin detener la ejecución del programa principal. Se podría ejecutar varias veces al mismo tiempo.
 */

function asyncSum(numberOne, numberTwo, seconds) {
  setTimeout(() => console.log(numberOne + numberTwo), seconds * 1000)
}

asyncSum(5, 2, 10)
asyncSum(1, 3, 5)
