/*
 * Reto #31
 * AÑOS BISIESTOS
 * Dificultad: FÁCIL
 * Enunciado: Crea una función que imprima los 30 próximos años bisiestos siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */

function thirtyLeapYears(year) {
  let count = 30
  while (count !== 0) {
    year++
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(year)
      count--
    }
  }
}

thirtyLeapYears(1999)
thirtyLeapYears(-500)
