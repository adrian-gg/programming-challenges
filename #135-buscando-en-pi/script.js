async function getPiNumbers(length) {
  const step = 1000
  let result = ""

  for (let inicio = 0; inicio < length; inicio += step) {
    const amount = Math.min(step, length - inicio)
    const res = await fetch(
      `https://api.pi.delivery/v1/pi?start=${inicio}&numberOfDigits=${amount}`
    )
    const data = await res.json()
    result += data.content
  }

  return result
}

function searchIn(secuence, list) {
  if (!/^\d+$/.test(secuence)) {
    return "Secuencia no válida"
  }

  const position = list.indexOf(secuence)
  if (position !== -1) {
    return `¡Secuencia "${secuence}" encontrada en la posición ${
      position + 1
    } del número Pi!`
  }

  return "No se encontró esa secuencia."
}

;(async () => {
  const pi = await getPiNumbers(3000)

  console.log(searchIn("123", pi)) //¡Secuencia "123" encontrada en la posición 1925 del número Pi!
  console.log(searchIn("321", pi)) //¡Secuencia "321" encontrada en la posición 960 del número Pi!
  console.log(searchIn("000", pi)) //¡Secuencia "000" encontrada en la posición 602 del número Pi!
})()
