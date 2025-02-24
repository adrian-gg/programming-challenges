/*
 * Reto #54
 * EL PARTIDO DE TENIS
 * Dificultad: MEDIA
 *
 * Enunciado:
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 *
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.
 */

function tenisGame(points) {
  const scores = ["Love", 15, 30, 40]
  const plays = {
    P1: 0,
    P2: 0,
  }

  for (let i = 0; i < points.length; i++) {
    const p = points[i]
    plays[p] += 1

    if (plays["P1"] >= 3 && plays["P1"] === plays["P2"]) {
      console.log("Deuce")
    } else if (plays["P1"] > 3 && plays["P1"] - plays["P2"] >= 2) {
      return console.log(
        `Ha ganado ${plays["P1"] > plays["P2"] ? "P1" : "P2"}\n`
      )
    } else if (plays["P1"] > 3 || plays["P2"] > 3) {
      console.log(`Ventaja ${plays["P1"] > plays["P2"] ? "P1" : "P2"}`)
    } else {
      console.log(`${scores[plays["P1"]]} - ${scores[plays["P2"]]}`)
    }
  }

  console.log("")
}

tenisGame(["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"])
/*
15 - Love
30 - Love
30 - 15
30 - 30
40 - 30
Deuce
Ventaja P1
Ha ganado P1
*/
tenisGame(["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1", "P2", "P1"])
/*
15 - Love
30 - Love
30 - 15
30 - 30
40 - 30
Deuce
Ventaja P1
Ha ganado P1
*/
tenisGame(["P1", "P1", "P1", "P1", "P1", "P1"])
/*
15 - Love
30 - Love
40 - Love
Ha ganado P1
*/
tenisGame(["P1", "P1"])
/*
15 - Love
30 - Love
*/
