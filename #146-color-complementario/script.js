function getComplementaryColor(hex) {
  hex = hex.replace(/^#/, "")

  if (hex.length !== 6) {
    throw new Error("Formato de color inválido. Usa formato #RRGGBB.")
  }

  const r = 255 - parseInt(hex.substring(0, 2), 16)
  const g = 255 - parseInt(hex.substring(2, 4), 16)
  const b = 255 - parseInt(hex.substring(4, 6), 16)

  const toHex = (c) => c.toString(16).padStart(2, "0")

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

// Ejemplo:
console.log(getComplementaryColor("#00ff00")) // #ff00ff
console.log(getComplementaryColor("#ffffff")) // #000000
console.log(getComplementaryColor("#ff0000")) // #00ffff
