/*
 * Reto #12
 * ¿ES UN PALÍNDROMO?
 * Dificultad: MEDIA
 * Enunciado: Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

function isPalindrome(text) {
  if (typeof text !== "string") return "Parámetro no válido."

  const textNormalized = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .match(/(\w|[ñÑ])/g)
    .join("")

  return (
    textNormalized.slice(0, textNormalized.length / 2) ===
    textNormalized
      .split("")
      .reverse()
      .join("")
      .slice(0, textNormalized.length / 2)
  )
}

console.log(isPalindrome("Ana lleva al oso la avellana.")) //true
console.log(
  isPalindrome(
    "Adivina ya te opina, ya ni miles origina, ya ni cetro me domina, ya ni monarcas, a repaso ni mulato carreta, acaso nicotina, ya ni cita vecino, anima cocina, pedazo gallina, cedazo terso nos retoza de canilla goza, de pánico camina, ónice vaticina, ya ni tocino saca, a terracota luminosa pera, sacra nómina y ánimo de mortecina, ya ni giros elimina, ya ni poeta, ya ni vida"
  )
) // true
console.log(isPalindrome("¿Qué os ha parecido el reto?")) //false
console.log(isPalindrome("012210")) //true
