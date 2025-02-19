/*
 * Reto #49
 * EL DETECTOR DE HANDLES
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que sea capaz de detectar y retornar todos los handles de un texto usando solamente Expresiones Regulares.
 * Debes crear una expresión regular para cada caso:
 * - Handle usuario: Los que comienzan por "@"
 * - Handle hashtag: Los que comienzan por "#"
 * - Handle web: Los que comienzan por "www.", "http://", "https://" y finalizan con un dominio (.com, .es...)
 */

function handlesDetector(text) {
  const userHandle = Array.from(text.matchAll(/@\w{2,15}/g)).map((v) => v[0])
  const hashtagHandle = Array.from(text.matchAll(/#\w+/g)).map((v) => v[0])
  const webHandle = Array.from(
    text.matchAll(
      /((http\:\/\/)|(https\:\/\/)|(www\.))[A-zÀ-ú]+(\.\w{1,3})(\/\w+)*/g
    )
  ).map((v) => v[0])

  return {
    userHandle,
    hashtagHandle,
    webHandle,
  }
}

console.log(
  handlesDetector(
    "En esta actividad de @mouredev, resolvemos #retos de #programacion desde https://retosdeprogramacion.com/semanales2022, que @braismoure aloja en www.github.com"
  )
)
