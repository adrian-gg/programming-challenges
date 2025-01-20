/*
 * Reto #19
 * CONVERSOR TIEMPO
 * Dificultad: FACIL
 * Enunciado: Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos.
 */

function timeToMillis(days, hours, minutes, seconds) {
  if (
    [days, hours, minutes, seconds].some(
      (value) => typeof value !== "number" || value < 0 || value % 1 !== 0
    )
  )
    return "Parámetros no válidos."

  return (((days * 24 + hours) * 60 + minutes) * 60 + seconds) * 1000
}

console.log(timeToMillis(0, 0, 0, 10)) // 10000
console.log(timeToMillis(2000000000, 5, 45, 10)) // 172800000020710000
console.log(timeToMillis(2, 5, -45, 10)) // Parámetros no válidos.
console.log(timeToMillis(2, 5.5, 45, 10)) // Parámetros no válidos.
