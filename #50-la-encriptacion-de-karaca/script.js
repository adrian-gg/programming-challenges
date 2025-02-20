/*
 * Reto #50
 * LA ENCRIPTACIÓN DE KARACA
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que sea capaz de encriptar y desencriptar texto utilizando el algoritmo de encriptación de Karaca.
 *
 * Input: “apple”
 * Step 1: Reverse the input: “elppa”
 * Step 2: Replace all vowels using the following chart: a => 0, e => 1, i => 2, o => 3, u => 4 # “1lpp0”
 * Step 3: Add “aca” to the end of the word: “1lpp0aca”
 * Output: “1lpp0aca”
 */

function karaca(text, isKaraca) {
  const vowels = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4,
  }

  if (!isNaN(text * 1) || typeof text !== "string")
    return "Parámetro no válido."

  if (isKaraca) {
    const numbers = Object.fromEntries(
      Object.entries(vowels).map(([key, val]) => [val, key])
    )
    return text
      .split(" ")
      .map((w) =>
        w
          .split("")
          .slice(0, -3)
          .map((l) => numbers[l] ?? l)
          .reverse()
          .join("")
      )
      .join(" ")
  }

  return text
    .split(" ")
    .map(
      (w) =>
        w
          .split("")
          .reverse()
          .map((l) => vowels[l] ?? l)
          .join("") + "aca"
    )
    .join(" ")
}

console.log(karaca("placa", false)) //0c0lpaca
console.log(karaca("0c0lpaca", true)) //placa
console.log(karaca("Este es el penúltimo reto de programación del año", false)) //1ts1aca s1aca l1aca 3m2tlún1paca 3t1raca 1daca nó2c0m0rg3rpaca l1daca 3ñ0aca
console.log(
  karaca(
    "1ts1aca s1aca l1aca 3m2tlún1paca 3t1raca 1daca nó2c0m0rg3rpaca l1daca 3ñ0aca",
    true
  )
) //este es el penúltimo reto de programación del año
console.log(karaca("e", false)) // 1aca
console.log(karaca("1aca", true)) // e
console.log(karaca("1", false)) // Parámetro no válido.
