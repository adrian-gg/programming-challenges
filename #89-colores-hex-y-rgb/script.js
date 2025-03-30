function hexToRgb(hex) {
  if (typeof hex !== "string" || !hex.includes("#") || hex.length !== 7)
    return "Parámetros no válidos."

  let r = parseInt(hex[1] + hex[2], 16)
  let g = parseInt(hex[3] + hex[4], 16)
  let b = parseInt(hex[5] + hex[6], 16)

  if (isNaN(r) || isNaN(g) || isNaN(b)) return "Parámetros no válidos."

  return `{r: ${r}, g: ${g}, b: ${b}}`
}

function rgbToHex(r, g, b) {
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
    return "Parámetros no válidos."
  return (
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  )
}

console.log(hexToRgb("#ffffff")) //{r: 255, g: 255, b: 255}
console.log(hexToRgb("ffffff")) //Parámetros no válidos.
console.log(hexToRgb("#000000")) //{r: 0, g: 0, b: 0}
console.log(hexToRgb("#fabada")) //{r: 250, g: 186, b: 218}
console.log(hexToRgb("#cagada")) //Parámetros no válidos.
console.log(hexToRgb("#fffffff")) //Parámetros no válidos.
console.log(hexToRgb("#fffff")) //Parámetros no válidos.

console.log(rgbToHex(0, 0, 0)) //#000000
console.log(rgbToHex(255, 255, 255)) //#ffffff
console.log(rgbToHex(250, 186, 218)) //#fabada
console.log(rgbToHex(255, 255, -5)) //Parámetros no válidos.
