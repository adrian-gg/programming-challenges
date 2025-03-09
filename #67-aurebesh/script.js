const normalAlphabet = {
  a: "aurek",
  b: "besh",
  c: "cresh",
  d: "dorn",
  e: "esk",
  f: "forn",
  g: "grek",
  h: "herf",
  i: "isk",
  j: "jenth",
  k: "krill",
  l: "leth",
  m: "merm",
  n: "nern",
  o: "osk",
  p: "peth",
  q: "qek",
  r: "resh",
  s: "senth",
  t: "trill",
  u: "usk",
  v: "vev",
  w: "wesk",
  x: "xesh",
  y: "yirt",
  z: "zerek",
  ae: "enth",
  eo: "onith",
  kh: "krenth",
  ng: "nen",
  oo: "orenth",
  sh: "sen",
  th: "thesh",
}

const removeAccents = (text) =>
  text
    .replace(/ñ/g, "#")
    .replace(/Ñ/g, "%")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/#/g, "ñ")
    .replace(/%/g, "Ñ")

function aurebeshTranlator(text, aurebesh) {
  const aurebeshAlphabet = Object.fromEntries(
    Object.entries(normalAlphabet).map(([key, val]) => [val, key])
  )
  let formatedText = removeAccents(text).toLowerCase()
  let result = ""

  if (aurebesh) {
    result = formatedText
    Object.keys(aurebeshAlphabet).forEach(
      (key) => (result = result.replaceAll(key, `/${aurebeshAlphabet[key]}/`))
    )
    result = result.replaceAll("/", "")
  } else {
    let i = 0

    while (i < text.length) {
      let letter = formatedText[i]
      let doubleLetter = normalAlphabet[letter + formatedText[i + 1]]

      if (doubleLetter) {
        result += doubleLetter
        i++
      } else {
        result += normalAlphabet[letter] ?? letter
      }

      i++
    }
  }

  return result
}

aurebesh = aurebeshTranlator("¡Que la fuerza os acompañe!", false)
console.log(aurebesh)
normal = aurebeshTranlator(aurebesh, true)
console.log(normal + "\n")

aurebesh = aurebeshTranlator("Algunos chicos tienen toda la suerte", false)
console.log(aurebesh)
normal = aurebeshTranlator(aurebesh, true)
console.log(normal + "\n")

aurebesh = aurebeshTranlator("Un buen droide es uno muerto", false)
console.log(aurebesh)
normal = aurebeshTranlator(aurebesh, true)
console.log(normal + "\n")
