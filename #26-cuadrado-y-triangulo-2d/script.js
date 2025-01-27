/*
 * Reto #26
 * CUADRADO Y TRIÁNGULO 2D
 * Dificultad: FÁCIL
 * Enunciado: Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 */

function drawPolygon(size, type, icon = "*") {
  const PolygonType = {
    SQUARE: "SQUARE",
    TRIANGLE: "TRIANGLE",
    DIAMOND: "DIAMOND",
    HEXADONE: "HEXADONE",
  }
  if (size < 2 || !PolygonType[type] || icon.length !== 1)
    return console.log("Parámetros no válidos")

  const symbol = `${icon} `
  let result = ""

  for (let i = 1; i <= size; i++) {
    if (type === "SQUARE") {
      result += symbol.repeat(size) + "\n"
    } else if (type === "TRIANGLE") {
      result += symbol.repeat(i) + "\n"
    } else if (type === "DIAMOND") {
      result += " ".repeat(size - i) + symbol.repeat(i) + "\n"
    } else if (type === "HEXADONE") {
      result += " ".repeat(size - i) + symbol.repeat(size - 1 + i) + "\n"
    }
  }

  if (type === "DIAMOND" || type === "HEXADONE") {
    result += result.split("\n").reverse().slice(2).join("\n") + "\n"
  }

  console.log(result)
}

drawPolygon(6, "SQUARE")
drawPolygon(6, "TRIANGLE")
drawPolygon(6, "DIAMOND")
drawPolygon(6, "HEXADONE")
