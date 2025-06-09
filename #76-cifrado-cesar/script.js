const removeAccents = (text) =>
  text
    .replace(/ñ/g, "#")
    .replace(/Ñ/g, "%")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/#/g, "ñ")
    .replace(/%/g, "Ñ")

function caesarCipher(text, shift, decrypt = false) {
  const formatedText = removeAccents(text).toLowerCase()
  let chars = "abcdefghijklmnñopqrstuvwxyz"

  if (decrypt) chars = chars.split("").reverse().join("")

  const result = formatedText
    .split("")
    .map((char) => {
      const indexChar = chars.indexOf(char)
      return indexChar >= 0 ? chars[(indexChar + shift) % chars.length] : char
    })
    .join("")

  console.log(result)
}

caesarCipher("Mi nombre es Adrián.", 3)
caesarCipher("ol proeuh hv dguldp.", 3, true)
caesarCipher("Mi nombre es Adrián.", 5)
caesarCipher("qn rtqgwj jx fiwnfr.", 5, true)
