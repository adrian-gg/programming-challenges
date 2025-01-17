/*
 * Reto #16
 * EN MAYÚSCULA
 * Dificultad: FÁCIL
 * Enunciado: Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 */

function capitalize(text) {
  if (typeof text !== "string") return "Parámetro no válido."

  return text
    .split("")
    .map((char, i) =>
      (i === 0 && char.search(/[A-zÀ-üñÑ]/g) === 0) ||
      (text[i - 1] && text[i - 1].search(/(?![A-zÀ-üñÑ])/g) === 0)
        ? char.toUpperCase()
        : char
    )
    .join("")
}

console.log(capitalize("hola ¿qué tal estás?"))
console.log(capitalize("¿hola      qué tal estás?"))
console.log(capitalize("El niño ñoño."))
