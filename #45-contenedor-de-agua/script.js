/*
 * Reto #45
 * CONTENEDOR DE AGUA
 * Dificultad: MEDIA
 *
 * Enunciado: Dado un array de números enteros positivos, donde cada uno representa unidades
 * de bloques apilados, debemos calcular cuantas unidades de agua quedarán atrapadas entre ellos.
 *
 * - Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].
 *
 *   ⬛⬛⬛🟫⬛⬛
 *   ⬛⬛⬛🟫⬛⬛
 *   🟫🔵🔵🟫⬛⬛
 *   🟫🔵🟫🟫🔵🟫
 *   🟫🔵🟫🟫🔵🟫
 *   🟫🔵🟫🟫🟫🟫
 *
 *   Representando bloque con 🟫 y agua con 🔵, quedarán atrapadas 7 unidades de agua.
 *   Suponemos que existe un suelo impermeable en la parte inferior que retiene el agua.
 */

function calculateWaterUnits(container) {
  let heightContainer = Math.max(...container)
  let result = ""

  while (heightContainer !== 0) {
    let line = ""
    let isBlock = false

    container.forEach((c, i) => {
      if (c === 0) {
        if (container[i - 1] !== undefined) line += "⬜"
        else line += "⬛"
      } else {
        line += "🟫"
        container[i] -= 1
        if (i === 0) isBlock = true
        if (isBlock) line = line.replaceAll("⬜", "🔵")
      }
    })
    line = line.replaceAll("⬜", "⬛")
    result = line + "\n" + result
    heightContainer--
  }
  console.log("")
  return result
}

console.log(calculateWaterUnits([4, 0, 3, 6]))
console.log(calculateWaterUnits([4, 0, 3, 6, 1, 3]))
console.log(calculateWaterUnits([5, 4, 3, 2, 1, 0]))
console.log(calculateWaterUnits([0, 1, 2, 3, 4, 5]))
console.log(calculateWaterUnits([4, 0, 3, 6, 1, 3, 0, 1, 6]))
