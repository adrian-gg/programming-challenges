/*
 * Reto #47
 * VOCAL MÁS COMÚN
 * Dificultad: FÁCIL
 * Enunciado: Crea un función que reciba un texto y retorne la vocal que más veces se repita.
 * - Ten cuidado con algunos casos especiales.
 * - Si no hay vocales podrá devolver vacío.
 */

function mostRepeatedVowel(text) {
  if (typeof text !== "string") return "Parámetro no válido."

  const vowels = ["a", "e", "i", "o", "u"]
  const textNormalized = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  const vowelsCount = vowels
    .map((v) => [v, Array.from(textNormalized.matchAll(v)).length])
    .sort((a, b) => b[1] - a[1])
  const result = vowelsCount.filter(
    (v) => v[1] !== 0 && v[1] === vowelsCount[0][1]
  )

  if (result.length === 0) return "No hay vocales en el texto"
  else if (result.length === 5)
    return `Cada vocal se repite ${result[0][1]} veces`
  else if (result.length > 1)
    return `Las vocales que más se repiten (${result[0][1]} veces) son: ${result
      .map((v) => v[0])
      .join(", ")}`
  else
    return `La vocal que más se repite (${result[0][1]} veces) es: ${result[0][0]}`
}

console.log(mostRepeatedVowel("aaaaaeeeeiiioou")) //La vocal que más se repite (5 veces) es a
console.log(mostRepeatedVowel("AáaaaEeeeIiiOoU")) //La vocal que más se repite (5 veces) es a
console.log(mostRepeatedVowel("eeeeiiioouaaaaa")) //La vocal que más se repite (5 veces) es a
console.log(mostRepeatedVowel(".-Aá?aaaBbEeeweIiiOoU:")) //La vocal que más se repite (5 veces) es a
console.log(mostRepeatedVowel(".-Aá?aaa BbEeew eIiiOoU:")) //La vocal que más se repite (5 veces) es a
console.log(mostRepeatedVowel(".-Aá?aaa BbEeew eEIiiOoU:")) //Las vocales que más se repiten (5 veces) son: a, e
console.log(mostRepeatedVowel(".-Aá?aaa BbEeew eEIiiOoUuuuuu:")) //La vocal que más se repite (6 veces) es u
console.log(mostRepeatedVowel("aeiou")) //Cada vocal se repite 1 veces
console.log(mostRepeatedVowel("brp qyz")) //No hay vocales en el texto
