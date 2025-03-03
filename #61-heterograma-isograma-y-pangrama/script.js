const formatText = (text) => {
  return text
    .toLowerCase()
    .replace(/ñ/g, "V")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/V/g, "ñ")
}

const countChars = (text) => {
  const arr = formatText(text).replaceAll(" ", "").split("")
  const chars = {}

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[ñ\w]/))
      chars[arr[i]] ? (chars[arr[i]] += 1) : (chars[arr[i]] = 1)
  }

  return chars
}

function isHeterogram(text) {
  const chars = countChars(text)
  const res = [...new Set(Object.values(chars))]
  return res.length === 1 && res[0] === 1
}

function isIsogram(text) {
  const chars = countChars(text)
  const res = [...new Set(Object.values(chars))]
  return res.length === 1 && res[0] >= 2
}

function isPangram(text) {
  const chars = countChars(text)
  return Object.keys(chars).length === 27
}

console.log(isHeterogram("hiperblanduzcos")) //true
console.log(isHeterogram("hiperblanduzcós    !!w")) //true
console.log(isIsogram("anna")) //true
console.log(
  isPangram(
    "Benjamín pidió una bebida de kiwi y fresa. Noé, sin vergüenza, la más exquisita champaña del menú"
  )
) //true
console.log(
  isPangram(
    "Un ugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol"
  )
) //false
