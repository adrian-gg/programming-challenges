function readAbacusNumber(abacus) {
  if (abacus.length !== 7) return "Parámetro no válido."

  let number = ""

  for (let i = 0; i < abacus.length; i++) {
    const row = abacus[i]

    if (
      row.length !== 12 ||
      !row.includes("---") ||
      row.replace("---", "") !== "OOOOOOOOO"
    )
      return "Parámetro no válido."

    number += row.split("---")[0].length
  }

  return Number(number).toLocaleString()
}

console.log(
  readAbacusNumber([
    "O---OOOOOOOO",
    "OOO---OOOOOO",
    "---OOOOOOOOO",
    "OO---OOOOOOO",
    "OOOOOOO---OO",
    "OOOOOOOOO---",
    "---OOOOOOOOO",
  ])
) //1.302.790

console.log(
  readAbacusNumber([
    "OOOOOOOOO---",
    "OOOOOOOOO---",
    "OOOOOOOOO---",
    "OOOOOOOOO---",
    "OOOOOOOOO---",
    "OOOOOOOOO---",
    "OOOOOOOOO---",
  ])
) //9.999.999

console.log(
  readAbacusNumber([
    "---OOOOOOOOO",
    "---OOOOOOOOO",
    "---OOOOOOOOO",
    "---OOOOOOOOO",
    "---OOOOOOOOO",
    "---OOOOOOOOO",
    "---OOOOOOOOO",
  ])
) //0

console.log(
  readAbacusNumber([
    "---OOOOOOOOO",
    "---OOOOOOOOO",
    "---OOOOOOOOO",
    "O---OOOOOOOO",
    "---OOOOOOOOO",
    "---OOOOOOOOO",
    "---OOOOOOOOO",
  ])
) //1000
