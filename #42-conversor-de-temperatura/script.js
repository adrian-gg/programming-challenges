/*
 * Reto #42
 * CONVERSOR DE TEMPERATURA
 * Dificultad: FÁCIL
 * Enunciado: Crea una función que transforme grados Celsius en Fahrenheit y viceversa.
 * - Para que un dato de entrada sea correcto debe poseer un símbolo "°" y su unidad ("C" o "F").
 * - En caso contrario retornará un error.
 * - ¿Quieres emplear lo aprendido en este reto?
 */

function temperatureConverter(degrees) {
  if (
    typeof degrees !== "string" ||
    !degrees.includes("°") ||
    degrees.split("°")[0] === ""
  )
    return "Parámetro no válido."
  const num = Number(degrees.split("°")[0])
  const sym = degrees.split("°")[1]

  if (isNaN(num)) return "Parámetro no válido."

  if (sym === "F") return ((num - 32) * 5) / 9 + "°C" // C = (F - 32) * 5/9,
  else if (sym === "C") return (num * 9) / 5 + 32 + "°F" // F = (C * 9/5) + 32,

  return "Parámetro no válido."
}

console.log(temperatureConverter("100°C")) // 212°F
console.log(temperatureConverter("100°F")) // 37.77777777777778°C
console.log(temperatureConverter("100C")) // Parámetro no válido.
console.log(temperatureConverter("100F")) // Parámetro no válido.
console.log(temperatureConverter("100")) // Parámetro no válido.
console.log(temperatureConverter("100")) // Parámetro no válido.
console.log(temperatureConverter("- 100 °C ")) // Parámetro no válido.
console.log(temperatureConverter("- 100 °F ")) // Parámetro no válido.
console.log(temperatureConverter("100A°C")) // Parámetro no válido.
console.log(temperatureConverter("100A°F")) // Parámetro no válido.
console.log(temperatureConverter("°C")) // Parámetro no válido.
console.log(temperatureConverter("°F")) // Parámetro no válido.
