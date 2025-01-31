/*
 * Reto #30
 * MARCO DE PALABRAS
 * Dificultad: FÁCIL
 * Enunciado: Crea una función que reciba un texto y muestre cada palabra en una línea, formando
 * un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */

function drawFrame(text, icon = "*") {
  const words = text.split(" ")
  const maxWordLength = words.reduce((a, b) =>
    b.length > a.length ? b : a
  ).length
  const line = `${icon}`.repeat(maxWordLength + 4) + "\n"
  const result = words.map((word) =>
    word !== ""
      ? `${icon} ${word}${" ".repeat(maxWordLength - word.length)} ${icon}\n`
      : word
  )

  console.log(line + result.join("") + line)
}

drawFrame("¿Qué te parece el reto?")
drawFrame("¿Qué te     parece el reto?")
drawFrame("¿Cuántos retos de código has resuelto?")
