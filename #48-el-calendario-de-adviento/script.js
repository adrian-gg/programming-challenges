/*
 * Reto #48
 * EL CALENDARIO DE ADVIENTO
 * Dificultad: FÁCIL
 *
 * ¿Conoces el calendario de adviento de la comunidad (https://adviento.dev)?
 * 24 días, 24 regalos sorpresa relacionados con desarrollo de software, ciencia y tecnología desde el 1 de diciembre.
 *
 * Enunciado: Crea una función que reciba un objeto de tipo "Date" y retorne lo siguiente:
 * - Si la fecha coincide con el calendario de aDEViento: Retornará el regalo de ese día (a tu elección) y cuánto queda para que finalice el sorteo de ese día.
 * - Si la fecha es anterior: Cuánto queda para que comience el calendario.
 * - Si la fecha es posterior: Cuánto tiempo ha pasado desde que ha finalizado.
 *
 * Notas:
 * - Tenemos en cuenta que cada día del calendario comienza a medianoche 00:00:00 y finaliza a las 23:59:59.
 * - Debemos trabajar con fechas que tengan año, mes, día, horas, minutos y segundos.
 */
const now = new Date()
const gifts = new Array(24).fill(0).map((_, i) => `🎁 Regalo ${i + 1}`)

function aDEViento(date) {
  const advientoDateStart = new Date(`${now.getFullYear()}/12/01 00:00:00`)
  const advientoDateEnd = new Date(`${now.getFullYear()}/12/24 23:59:59`)

  const getTimeDifference = (time) => {
    const years = Math.floor(time / 1000 / 60 / 60 / 24 / 365)
    const days = Math.floor((time / 1000 / 60 / 60 / 24) % 365)
    const hours = Math.floor((time / 1000 / 60 / 60) % 24)
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const seconds = Math.floor((time / 1000) % 60)

    return `${years}y : ${days}d : ${hours}h : ${minutes}m : ${seconds}s`
  }

  if (date < advientoDateStart) {
    return `Falta ${getTimeDifference(advientoDateStart - date)}`
  } else if (date > advientoDateEnd) {
    return `Han pasado ${getTimeDifference(date - advientoDateEnd)}`
  }

  const diff =
    new Date(`${now.getFullYear()}/12/${date.getDate() + 1} 00:00:00`) - date
  return `${gifts[date.getDate() - 1]} y queda ${getTimeDifference(
    diff
  )} para que termine.`
}

console.log(aDEViento(new Date(`${now.getFullYear()}/12/05 20:27:56`))) //🎁 Regalo 5 y queda 0y : 0d : 3h : 32m : 4s para que termine.
console.log(aDEViento(new Date(`${now.getFullYear()}/12/01 00:00:00`))) //🎁 Regalo 1 y queda 0y : 1d : 0h : 0m : 0s para que termine.
console.log(aDEViento(new Date(`${now.getFullYear()}/12/24 23:59:59`))) //🎁 Regalo 24 y queda 0y : 0d : 0h : 0m : 1s para que termine.
console.log(aDEViento(new Date(`${now.getFullYear()}/11/30 23:59:59`))) //Falta 0y : 0d : 0h : 0m : 1s
console.log(aDEViento(new Date(`${now.getFullYear()}/12/25 00:00:00`))) //Han pasado 0y : 0d : 0h : 0m : 1s
console.log(aDEViento(new Date(`${now.getFullYear()}/10/30 00:00:00`))) //Falta 0y : 32d : 0h : 0m : 0s
console.log(aDEViento(new Date(`${now.getFullYear()}/12/30 04:32:12`))) //Han pasado 0y : 5d : 4h : 32m : 13s
console.log(aDEViento(new Date(`${now.getFullYear() - 4}/10/30 00:00:00`))) //Falta 4y : 33d : 1h : 0m : 0s
console.log(aDEViento(new Date(`${now.getFullYear() + 1}/12/30 04:32:12`))) //Han pasado 1y : 5d : 4h : 32m : 13s
