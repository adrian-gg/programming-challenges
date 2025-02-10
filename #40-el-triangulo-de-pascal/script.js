/*
 * Reto #40
 * TRIÁNGULO DE PASCAL
 * Dificultad: MEDIA
 * Enunciado: Crea una función que sea capaz de dibujar el "Triángulo de Pascal" indicándole
 * únicamente el tamaño del lado.
 * - Aquí puedes ver rápidamente cómo se calcula el triángulo:
 *   https://commons.wikimedia.org/wiki/File:PascalTriangleAnimated2.gif
 */

function pascalTriangle(size) {
  if (size <= 0) return "Parámetro no válido"
  if (size === 1) return 1
  const result = [[1], [1, 1]]

  while (result.length !== size) {
    const row = []
    for (let i = 0; i < result[result.length - 1].length - 1; i++) {
      const A = result[result.length - 1][i]
      const B = result[result.length - 1][i + 1]
      row.push(A + B)
    }
    result.push([1, ...row, 1])
  }

  result.forEach((res, i) =>
    console.log(res.join(" ").padStart(size + i + 1, " "))
  )
}

pascalTriangle(5)
/*  1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1 */
pascalTriangle(1) // 1
pascalTriangle(0) // "Parámetro no válido"
pascalTriangle(-5) // "Parámetro no válido"
