function friday_13(year, month) {
  if (
    typeof year !== "number" ||
    typeof month !== "number" ||
    year <= 0 ||
    month <= 0 ||
    month > 12
  )
    return "Parámetros no válidos."

  return new Date(`${year}-${month}-13`).getDay() === 5
}

console.log(friday_13(2025, 3)) //false
console.log(friday_13(2025, 6)) //true
console.log(friday_13(2025, 13)) //Parámetros no válidos.
console.log(friday_13(-2025, 1)) //Parámetros no válidos.
console.log(friday_13(2025, 0)) //Parámetros no válidos.
console.log(friday_13(2025, "1")) //Parámetros no válidos.
