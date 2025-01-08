/*
 * Reto #7
 * CONTANDO PALABRAS
 * Dificultad: MEDIA
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 */

function countWords(text) {
  if (typeof text !== "string") return console.log("Parámetro no valido.")
  const result = {}
  const words = text.toLowerCase().match(/[a-z0-9]+/gm)

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (result[word]) {
      result[word]++
    } else {
      result[word] = 1
    }
  }

  Object.entries(result).forEach(([key, val]) => {
    console.log(`${key}: ${val}`)
  })
}

countWords(51686) //Parámetro no valido.
countWords("Mi nombre es Bond… James Bond.") //mi: 1, nombre: 1, es: 1, bond: 2, james: 1
countWords("¡42, lo sabia! ¿Cual era la pregunta?") //42: 1, lo: 1, sabia: 1, cual: 1, era: 1, la: 1, pregunta: 1
