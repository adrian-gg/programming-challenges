/*
 * Reto #21
 * CALCULADORA .TXT
 * Dificultad: MEDIA
 * Enunciado: Lee el fichero "calculadora.txt" incluido en el proyecto, calcula su resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*" y división "/".
 * - El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones.
 */

async function calculate(url) {
  if (url.split(".").pop() !== "txt") return "Parámetro no válido"

  return fetch(url)
    .then((res) => res.text())
    .then((content) => {
      let result = 0
      let chars = content.split(/\n/)

      for (let i = 0; i < chars.length; i++) {
        const char = chars[i]
        const lastChar = chars[i - 1]

        if (i === 0) {
          result = Number(char)
        } else if (i % 2 === 0) {
          if (lastChar === "+") result += Number(char)
          else if (lastChar === "-") result -= Number(char)
          else if (lastChar === "*") result *= Number(char)
          else if (lastChar === "/") result /= Number(char)
          else return "Parámetro no válido"
        }
      }

      return result
    })
}

calculate("http://localhost:5500/%2321-calculadora-txt/calculator.txt").then(
  (res) => console.log(res)
) // 18.5
calculate("http://localhost:5500/%2321-calculadora-txt/calculator.js").then(
  (res) => console.log(res)
) // Parámetro no válido
