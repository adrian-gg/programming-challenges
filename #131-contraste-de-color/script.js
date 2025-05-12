function contrast(hexColor) {
  if (typeof hexColor !== "string") return "Parámetro no válido."

  // Remove '#' if present
  if (hexColor[0] === "#") hexColor = hexColor.slice(1)

  // Expand short hex code (#abc → #aabbcc)
  if (hexColor.length === 3) {
    hexColor = hexColor
      .split("")
      .map((c) => c + c)
      .join("")
  }

  if (!/^[0-9a-fA-F]{6}$/.test(hexColor)) return "Parámetro no válido."

  const r = parseInt(hexColor.slice(0, 2), 16) / 255
  const g = parseInt(hexColor.slice(2, 4), 16) / 255
  const b = parseInt(hexColor.slice(4, 6), 16) / 255

  // Convert RGB to luminance
  const luminance = (c) => {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }

  const L =
    0.2126 * luminance(r) + 0.7152 * luminance(g) + 0.0722 * luminance(b)

  // Contrast ratio formulas
  const contrastWithWhite = 1.05 / (L + 0.05)
  const contrastWithBlack = (L + 0.05) / 0.05

  return {
    white: contrastWithWhite.toFixed(2),
    black: contrastWithBlack.toFixed(2),
    recommended: contrastWithWhite > contrastWithBlack ? "white" : "black",
  }
}

console.log(contrast("#ffffff")) //{ white: '1.00', black: '21.00', recommended: 'black' }
console.log(contrast("ffffff")) //{ white: '1.00', black: '21.00', recommended: 'black' }

console.log(contrast("#00AAFF")) //{ white: '2.56', black: '8.19', recommended: 'black' }
console.log(contrast("#E08E79")) //{ white: '2.53', black: '8.31', recommended: 'black' }
console.log(contrast("#FF0D51")) //{ white: '3.87', black: '5.43', recommended: 'black' }

console.log(contrast("#FF0000")) //{ white: '4.00', black: '5.25', recommended: 'black' }
console.log(contrast("#00FF00")) //{ white: '1.37', black: '15.30', recommended: 'black' }
console.log(contrast("#0000FF")) //{ white: '8.59', black: '2.44', recommended: 'white' }
