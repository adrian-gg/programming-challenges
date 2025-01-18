/*
 * Reto #17
 * LA CARRERA DE OBSTÁCULOS
 * Dificultad: MEDIA
 * Enunciado: Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *   - Un array que sólo puede contener String con las palabras "RUN" o "JUMP"
 *   - Un String que represente la pista y sólo puede contener "_" (suelo) o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *   - Si el/a atleta hace "RUN" en "_" (suelo) y "JUMP" en "|" (valla) será correcto y no variará el símbolo de esa parte de la pista.
 *   - Si hace "JUMP" en "_" (suelo), se variará la pista por "x".
 *   - Si hace "RUN" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */

function checkRace(athlete, track) {
  const typeOfAthlete = athlete.filter((a) => a !== "RUN" && a !== "JUMP")
  const typeOfTrack = track.split("").filter((t) => t !== "_" && t !== "|")
  if (
    typeOfAthlete.length > 0 ||
    typeOfTrack.length > 0 ||
    athlete.length < track.length
  )
    return "Parámetros no válidos."

  const trackRunned = track
    .split("")
    .map((t, i) => {
      if (t === "_" && athlete[i] && athlete[i] === "JUMP") return "x"
      if (t === "|" && athlete[i] && athlete[i] === "RUN") return "/"
      return t
    })
    .join("")

  return `${trackRunned} (${trackRunned === track})`
}

console.log(checkRace(["RUN", "JUMP", "RUN", "JUMP", "RUN"], "_|_|_")) // _|_|_ (true)
console.log(checkRace(["JUMP", "JUMP", "JUMP", "JUMP", "JUMP"], "|||||")) // ||||| (true)
console.log(checkRace(["RUN", "RUN", "RUN", "JUMP", "RUN"], "_|_|_")) // _/_|_ (false)
console.log(checkRace(["RUN", "RUN", "JUMP", "JUMP", "RUN"], "_|_|_")) // _/x|_ (false)
console.log(
  checkRace(["RUN", "JUMP", "RUN", "JUMP", "RUN", "JUMP", "RUN"], "_|_|_")
) // _|_|_ (true)
console.log(checkRace(["RUN", "RUN", "JUMP", "JUMP", "RUN"], "_|_|_|_")) // Parámetros no válidos.
console.log(checkRace(["RUN", "JUMP", "RUN", "JUMP", "RUN"], "_|_|_|_")) // Parámetros no válidos.
console.log(checkRace(["RUN", "JUMP", "RUN", "JUMP"], "_|_|_")) // Parámetros no válidos.
console.log(checkRace(["JUMP", "JUMP", "JUMP", "JUMP", "JUMP"], "||?||")) // Parámetros no válidos.
console.log(checkRace(["RUN", "JUMP", "STOP"], "_|_|_")) // Parámetros no válidos.
