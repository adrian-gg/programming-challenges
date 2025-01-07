/*
 * Reto #6
 * INVIRTIENDO CADENAS
 * Dificultad: FÁCIL
 * Enunciado: Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function reverseText(text) {
  if (typeof text !== "string") return "Parámetro no valido."

  const letters = text.split("")
  let result = ""

  for (let i = letters.length - 1; i >= 0; i--) {
    result += letters[i]
  }

  return result
}

console.log(reverseText(1234)) //Parámetro no valido.
console.log(reverseText(["Hola mundo"])) //Parámetro no valido.
console.log(reverseText("Hola mundo")) //odnum aloH
console.log(reverseText("odnum aloH")) //Hola mundo
console.log(reverseText("Lorem ipsum")) //muspi meroL
