import { toNormalize, getRandomNumber } from "../%23127-utils/script.js"

const CHARS = {
  A: [
    [0, 1, 0],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
  B: [
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 0],
  ],
  C: [
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [0, 1, 1],
  ],
  D: [
    [1, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 0],
  ],
  E: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  F: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 0],
    [1, 0, 0],
    [1, 0, 0],
  ],
  G: [
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 1],
  ],
  H: [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  J: [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
  ],
  K: [
    [1, 0, 1],
    [1, 1, 0],
    [1, 0, 0],
    [1, 1, 0],
    [1, 0, 1],
  ],
  L: [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  M: [
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
  N: [
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
  O: [
    [0, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
  ],
  P: [
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 0],
    [1, 0, 0],
    [1, 0, 0],
  ],
  Q: [
    [0, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
  ],
  R: [
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 0],
  ],
  T: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  U: [
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
  ],
  V: [
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
  ],
  W: [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 1, 1],
    [0, 1, 0],
  ],
  X: [
    [1, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 0, 1],
  ],
  Y: [
    [1, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  Z: [
    [1, 1, 1],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  0: [
    [0, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
  ],
  1: [
    [0, 1, 0],
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  2: [
    [1, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  3: [
    [1, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 0],
  ],
  4: [
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
  ],
  5: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 0],
    [0, 0, 1],
    [1, 1, 0],
  ],
  6: [
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ],
  7: [
    [1, 1, 1],
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  8: [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ],
  9: [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 1],
    [0, 0, 1],
    [0, 1, 0],
  ],
  "<": [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  ">": [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
  ],
  "?": [
    [1, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
    [0, 0, 0],
    [0, 1, 0],
  ],
  " ": [[0], [0], [0], [0], [0]],
}
const charsKeys = Object.keys(CHARS)
const specialCharsKeys = [" ", "?", "<", ">"]

function enigmaCoder(text, key, decode = false) {
  const codeChars = [
    ...new Set(
      toNormalize(key)
        .toUpperCase()
        .split("")
        .filter((l) => charsKeys.includes(l) && !specialCharsKeys.includes(l))
    ),
  ]
  const noCodeChars = charsKeys.filter(
    (l) => !codeChars.includes(l) && !specialCharsKeys.includes(l)
  )

  if (decode) {
    return text
      .split("")
      .filter((char) => char !== " ")
      .map((char) => {
        if (codeChars.includes(char)) {
          return "🟩"
        } else if (noCodeChars.includes(char)) {
          return "⬛"
        }
        return char
      })
      .join("")
  } else {
    const res = []
    const code = Array.from({ length: 5 }, () => [])

    for (let i = 0; i < text.length; i++) {
      const char = toNormalize(text[i]).toUpperCase()
      res.push(CHARS[char])
    }

    res.forEach((letter, i) => {
      letter.forEach((row, j) => {
        const newRow = row.map((c) => {
          if (c === 0) {
            return noCodeChars[getRandomNumber(noCodeChars.length - 1)]
          }
          return codeChars[getRandomNumber(codeChars.length - 1)]
        })

        if (i < res.length - 1) {
          newRow.push(noCodeChars[getRandomNumber(noCodeChars.length - 1)])
        }
        code[j].push(...newRow)
      })
    })

    return code.map((row) => row.join(" ")).join("\n")
  }
}

let code = enigmaCoder("<?>", "HE LIES STILL")
console.log(code) //random code
console.log(enigmaCoder(code, "HE LIES STILL", true)) //<?>
