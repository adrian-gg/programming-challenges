//numbers
export const getRandomNumber = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min

//strings
export const toNormalize = (str) => {
  if (typeof str !== "string") return str

  return str
    .replace(/ñ/g, "#")
    .replace(/Ñ/g, "%")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/#/g, "ñ")
    .replace(/%/g, "Ñ")
}

export const toCapitalize = (str) => {
  if (typeof str !== "string") return str

  return str
    .split("")
    .map((char, i) =>
      (i === 0 && char.search(/[A-zÀ-üñÑ]/g) === 0) ||
      (str[i - 1] && str[i - 1].search(/(?![A-zÀ-üñÑ])/g) === 0)
        ? char.toUpperCase()
        : char
    )
    .join("")
}

//arrays
export const groupOf = (array, groupSize) => {
  if (!Array.isArray(array)) return array

  if (array.length % groupSize !== 0) return []

  const size = Math.floor(array.length / groupSize)
  const arr = Array.from({ length: size }, () => [])

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < groupSize; j++) {
      arr[i].push(array[i * groupSize + j])
    }
  }

  return arr
}

export const rotate = (matrix, deg = 1) => {
  if (!Array.isArray(matrix) || deg <= 0) return matrix

  let res = matrix
  deg = deg % 4

  while (deg > 0) {
    const arr = Array.from({ length: res[0].length }, () => [])

    for (let i = 0; i < res.length; i++) {
      const row = res[i]

      for (let j = 0; j < row.length; j++) {
        const num = row[j]
        arr[j].unshift(num)
      }
    }

    res = arr
    deg -= 1
  }

  return res
}

export const transpose = (matrix) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return []
  }
  return Array.from({ length: matrix[0].length }, (_, colIndex) =>
    Array.from(
      { length: matrix.length },
      (_, rowIndex) => matrix[rowIndex][colIndex]
    )
  )
}

export const snail = (array, rowsCount, colsCount) => {
  if (!Array.isArray(array)) return array

  if (rowsCount * colsCount !== array.length) {
    return []
  }

  const arr = Array.from({ length: rowsCount }, () => [])

  for (let col = 0; col < colsCount; col++) {
    for (let row = 0; row < rowsCount; row++) {
      const i = col * rowsCount + (col % 2 === 0 ? row : rowsCount - 1 - row)
      arr[row].push(array[i])
    }
  }

  return arr
}

//objects
export const isEmpty = (obj) => {
  if (typeof obj !== "object") return obj

  if (Array.isArray(obj)) {
    return obj.length === 0
  }

  return Object.keys(obj).length === 0
}

//others
export const hexToRgb = (hex) => {
  if (typeof hex !== "string" || !hex.includes("#") || hex.length !== 7)
    return hex

  let r = parseInt(hex[1] + hex[2], 16)
  let g = parseInt(hex[3] + hex[4], 16)
  let b = parseInt(hex[5] + hex[6], 16)

  if (isNaN(r) || isNaN(g) || isNaN(b)) return "Parámetros no válidos."

  return `{r: ${r}, g: ${g}, b: ${b}}`
}

export const rgbToHex = (r, g, b) => {
  if (
    typeof r !== "number" ||
    typeof g !== "number" ||
    typeof b !== "number" ||
    r < 0 ||
    r > 255 ||
    g < 0 ||
    g > 255 ||
    b < 0 ||
    b > 255
  )
    return { r, g, b }

  return (
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  )
}
