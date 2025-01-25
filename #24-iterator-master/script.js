/*
 * Reto #24
 * ITERATION MASTER
 * Dificultad: FÁCIL
 * Enunciado: Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno). ¿De cuántas maneras eres capaz de hacerlo? Crea el código para cada una de ellas.
 */

function iterator(type, from = 1, to = 100) {
  switch (type) {
    case 1:
      for (let i = from; i <= to; i++) {
        console.log(i)
      }
      break

    case 2:
      new Array(to - from + 1).fill(0).map((_, i) => console.log(i + from))
      break

    case 3:
      new Array(to - from + 1).fill(0).forEach((_, i) => console.log(i + from))
      break

    case 4:
      new Array(to - from + 1).fill(0).filter((_, i) => console.log(i + from))
      break

    case 5:
      let count5 = from
      while (count5 <= to) {
        console.log(count5)
        count5++
      }
      break

    case 6:
      let count6 = from
      do {
        console.log(count6)
        count6++
      } while (count6 <= to)
      break

    case 7:
      console.log(from)
      if (from < to) iterator(4, from + 1)
      break

    default:
      console.log(
        new Array(to - from + 1)
          .fill(0)
          .map((_, i) => i + from)
          .join("\n")
      )
      break
  }
}

console.log("\n//1--------------------------------")
iterator(1)

console.log("\n//2--------------------------------")
iterator(2)

console.log("\n//3--------------------------------")
iterator(3)

console.log("\n//4--------------------------------")
iterator(4)

console.log("\n//5--------------------------------")
iterator(5)

console.log("\n//6--------------------------------")
iterator(6)

console.log("\n//7--------------------------------")
iterator(7)

console.log("\n//---------------------------------")
iterator()
