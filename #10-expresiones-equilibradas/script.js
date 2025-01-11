/*
 * Reto #10
 * EXPRESIONES EQUILIBRADAS
 * Dificultad: MEDIA
 * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

const GROUPING_SYMBOLS = [
  ["{", "}"],
  ["(", ")"],
  ["[", "]"],
]

function isBalanced(expression, symbols = GROUPING_SYMBOLS) {
  if (typeof expression !== "string" || expression.length === 0)
    return "Parámetro no válido."

  const SYMBOLS = Object.fromEntries(symbols.map((sg) => [sg[1], sg[0]]))
  const symbolsFromExpression = expression.match(/[\{\}\(\)\[\]]+/gm).join("")
  const acc = []

  for (let i = 0; i < symbolsFromExpression.length; i++) {
    const symbol = symbolsFromExpression[i]
    if (acc.length !== 0 && SYMBOLS[symbol] === acc[acc.length - 1]) {
      acc.pop()
    } else {
      acc.push(symbol)
    }
  }

  return acc.length === 0
    ? "🟢 Expresión balanceada"
    : "🔴 Expresión no balanceada"
}

console.log(isBalanced("{ [ a * ( c + d ) ] - 5 }")) //🟢 Expresión balanceada
console.log(isBalanced("({}[])")) //🟢 Expresión balanceada
console.log(isBalanced("")) //Parámetro no válido.
console.log(isBalanced("{a + b [c] * (2x2)}}}}")) //🔴 Expresión no balanceada
console.log(isBalanced("{ a * ( c + d ) ] - 5 }")) //🔴 Expresión no balanceada
console.log(isBalanced("{a^4 + (((ax4)}")) //🔴 Expresión no balanceada
console.log(isBalanced("{ ] a * ( c + d ) + ( 2 - 3 )[ - 5 }")) //🔴 Expresión no balanceada
console.log(isBalanced("{{{{{{(}}}}}}")) //🔴 Expresión no balanceada
console.log(isBalanced("(a")) //🔴 Expresión no balanceada
console.log(isBalanced("({())}")) //🔴 Expresión no balanceada
console.log(isBalanced("]({}[])[")) //🔴 Expresión no balanceada
