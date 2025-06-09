import { toNormalize } from "../%23127-utils/script.js"

function caesarCipher(text, shift, decrypt = false) {
  const formatedText = toNormalize(text).toLowerCase()
  let chars = "abcdefghijklmn opqrstuvwxyz"

  if (decrypt) chars = chars.split("").reverse().join("")

  const result = formatedText
    .split("")
    .map((char, i) => {
      const indexChar = chars.indexOf(char)
      return indexChar >= 0
        ? chars[(indexChar + i + shift) % chars.length]
        : char
    })
    .join("")

  console.log(result)
}

caesarCipher("Hola mundo", 2)
caesarCipher("jroftscvnz", 2, true)
caesarCipher("Hola mundo", 5)
caesarCipher("muriwvfypc", 5, true)
