/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Dificultad: MEDIA
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram(wordOne, wordTwo) {
  if (
    typeof wordOne !== "string" ||
    typeof wordTwo !== "string" ||
    wordOne.toLowerCase() === wordTwo.toLowerCase() ||
    wordOne.length !== wordTwo.length
  ) {
    return false
  }

  const sortedOne = wordOne
    .toLowerCase()
    .split("")
    .map((l) => l.charCodeAt(0))
    .sort((a, b) => a - b)
    .join("-")
  const sortedTwo = wordTwo
    .toLowerCase()
    .split("")
    .map((l) => l.charCodeAt(0))
    .sort((a, b) => a - b)
    .join("-")

  if (sortedOne === sortedTwo) {
    return true
  }

  return false
}

console.log(isAnagram([], 1)) //false
console.log(isAnagram("amor", "roma")) //true
console.log(isAnagram("hola", "adios")) //false
console.log(isAnagram("mary", "army")) //true
console.log(isAnagram("alan", "alan")) //false
