/*
 * Reto #25
 * PIEDRA, PAPEL, TIJERA
 * Dificultad: MEDIA
 * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */

function rockScissorsPaper(games) {
  if (!Array.isArray(games)) return "Parámetros no válidos"

  const rules = {
    R: "S",
    S: "P",
    P: "R",
  }
  let p1 = 0
  let p2 = 0

  for (let i = 0; i < games.length; i++) {
    const game = games[i]
    if (!Array.isArray(game) || !rules[game[0]] || !rules[game[1]])
      return "Parámetros no válidos"

    if (rules[game[0]] === game[1]) p1++
    else if (rules[game[1]] === game[0]) p2++
  }

  return p1 === p2 ? "Tie" : p1 > p2 ? "Player 1" : "Player 2"
}

console.log(rockScissorsPaper([["R", "R"]])) //Tie
console.log(rockScissorsPaper([["R", "S"]])) //Player 1
console.log(rockScissorsPaper([["P", "S"]])) //Player 2
console.log(
  rockScissorsPaper([
    ["R", "R"],
    ["S", "S"],
    ["P", "P"],
  ])
) //Tie
console.log(
  rockScissorsPaper([
    ["R", "S"],
    ["S", "P"],
    ["S", "R"],
  ])
) //Player 1
console.log(
  rockScissorsPaper([
    ["R", "P"],
    ["S", "R"],
    ["P", "S"],
  ])
) //Player 2
