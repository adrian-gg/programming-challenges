function t9ToText(sequence) {
  const T9 = [
    " ",
    ",.?!",
    "ABC",
    "DEF",
    "GHI",
    "JKL",
    "MNO",
    "PQRS",
    "TUV",
    "WXYZ",
  ]

  if (typeof sequence !== "string" || sequence === "")
    return "Parámetro no válido."

  let result = ""
  const codes = sequence.split("-")

  for (let i = 0; i < codes.length; i++) {
    const key = codes[i]
    if (
      key === "" ||
      key !== key[0].repeat(key.length) ||
      !T9[key[0]] ||
      !T9[key[0]][key.length - 1]
    )
      return "Parámetro no válido."
    result += T9[key[0]][key.length - 1]
  }

  return result
}

console.log(t9ToText("2-3-777-444-2-66-4-4")) //ADRIANGG
console.log(t9ToText("2-3-777-444-2-66-0-4-4")) //ADRIAN GG
console.log(t9ToText("2-3-787-444-2-66-0-4-4")) //Parámetro no válido.
console.log(t9ToText("2-3-7a7-444-2-66-0-4-4")) //Parámetro no válido.
console.log(t9ToText("")) //Parámetro no válido.
console.log(t9ToText("2222")) //Parámetro no válido.
