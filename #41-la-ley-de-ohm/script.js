/*
 * Reto #41
 * LA LEY DE OHM
 * Dificultad: FÁCIL
 * Enunciado: Crea una función que calcule el valor del parámetro perdido correspondiente a la ley de Ohm.
 * - Enviaremos a la función 2 de los 3 parámetros (V, R, I), y retornará el valor del tercero (redondeado a 2 decimales).
 * - Si los parámetros son incorrectos o insuficientes, la función retornará la cadena de texto "Invalid values".
 */

// V = R * I
function ohm(data) {
  if (!data || Object.values(data).length !== 2) return "Invalid values"
  const { V = null, R = null, I = null } = data
  let isV = typeof V === "number"
  let isR = typeof R === "number"
  let isI = typeof I === "number"

  if (isV && isR) {
    return `I: ${V / R}`
  } else if (isI & isR) {
    return `V: ${I * R}`
  } else if (isV & isI) {
    return `R: ${V / I}`
  }

  return "Invalid values"
}

console.log(ohm()) //Invalid values
console.log(ohm({})) //Invalid values
console.log(ohm({ V: 5.0 })) //Invalid values
console.log(ohm({ V: 5.0, R: 4.0 })) //I: 1.25
console.log(ohm({ V: 5.0, I: 4.0 })) //R: 1.25
console.log(ohm({ R: 5.0, I: 4.0 })) //V: 20
console.log(ohm({ V: 5.125, R: 4.0 })) //I: 1.28125
console.log(ohm({ V: 5.0, I: 4.125 })) //R: 1.2121212121212122
console.log(ohm({ R: 5.0, I: 4.125 })) //V: 20.625
console.log(ohm({ V: 5.0, R: 0.0 })) //I: Infinity
console.log(ohm({ V: 5.0, I: 0.0 })) //R: Infinity
console.log(ohm({ R: 5.0, I: 0.0 })) //V: 0
console.log(ohm({ V: 5.0, R: 4.0, I: 3.0 })) //Invalid values
