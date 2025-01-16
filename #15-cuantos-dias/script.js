/*
 * Reto #15
 * ¿CUÁNTOS DÍAS?
 * Dificultad: DIFÍCIL
 * Enunciado: Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.
 */

function daysBetween(dateOne, dateTwo) {
  if (typeof dateOne !== "string" || typeof dateTwo !== "string")
    return "Parámetros no válidos."

  const dateOneN = new Date(dateOne.split("/").reverse().join("-")).getTime()
  const dateTwoN = new Date(dateTwo.split("/").reverse().join("-")).getTime()

  if (isNaN(dateOneN) || isNaN(dateTwoN)) return "Parámetros no válidos."

  return Math.round(Math.abs(dateOneN - dateTwoN) / (1000 * 60 * 60 * 24))
}

console.log(daysBetween("gari", "29/04/2022")) //Parámetros no válidos.
console.log(daysBetween("18/05/2022", "29/05/2022")) //11
console.log(daysBetween("18/5/2022", "29/04/2022")) //19
console.log(daysBetween("01/01/2000", "31/12/2000")) //365
