/*
 * Reto #5
 * ASPECT RATIO
 * Dificultad: FÁCIL
 * Enunciado: Crea un programa que se encargue de calcular el aspect ratio.
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una imagen de 1920*1080px.
 */

function getAspectRatio(width, height = width) {
  if (
    typeof width !== "number" ||
    typeof height !== "number" ||
    width <= 0 ||
    height <= 0
  )
    return "Parámetros no validos."

  if (width / height === 1) return "1:1"

  const ratio = width / height
  for (let i = 1; i <= height; i++) {
    if ((ratio * i) % 1 === 0) return `${ratio * i}:${i}`
  }
}

console.log(getAspectRatio(400, "400")) //Parámetros no validos.
console.log(getAspectRatio([700, 500])) //Parámetros no validos.
console.log(getAspectRatio(200)) //1:1
console.log(getAspectRatio(400, 400)) //1:1
console.log(getAspectRatio(600, 400)) //3:2
console.log(getAspectRatio(1080, 1920)) //9:16
console.log(getAspectRatio(1234, 4321)) //1234:4321
console.log(getAspectRatio(0, 0)) //Parámetros no validos.
