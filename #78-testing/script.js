import assert from "assert"

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

// Test 1: Comprobar un mes que tenga un viernes 13
assert.strictEqual(friday_13(2025, 6), true)

// Test 2: Comprobar un mes que no tenga un viernes 13
assert.strictEqual(friday_13(2025, 3), false)

// Test 3: Comprobar que los pprámetros aceptados solo pueden ser de tipo numero y positivo

// Comprobar por valor
assert.strictEqual(friday_13(2025, 0), "Parámetros no válidos.")
assert.strictEqual(friday_13(2025, 13), "Parámetros no válidos.")
assert.strictEqual(friday_13(-2025, 6), "Parámetros no válidos.")
assert.strictEqual(friday_13(2025, -6), "Parámetros no válidos.")
assert.strictEqual(friday_13(-2025, -6), "Parámetros no válidos.")

// Comprobar por tipo
assert.strictEqual(friday_13("2025", 6), "Parámetros no válidos.")
assert.strictEqual(friday_13(2025, "6"), "Parámetros no válidos.")
assert.strictEqual(friday_13("2025", "6"), "Parámetros no válidos.")
assert.strictEqual(friday_13([2025], 6), "Parámetros no válidos.")
assert.strictEqual(friday_13(2025, [6]), "Parámetros no válidos.")
assert.strictEqual(friday_13([2025], [6]), "Parámetros no válidos.")

// Test 4: Comprobar que la respuesta no sea null
const result = friday_13(2025, 6)
assert.ok(result !== null)
assert.notStrictEqual(result, null)
assert.notStrictEqual(result, undefined)

console.log("Tests passed")
