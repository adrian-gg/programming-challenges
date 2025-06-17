function deepEqual(a, b) {
  if (a === b) return true

  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  ) {
    return false
  }

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  if (keysA.length !== keysB.length) return false

  for (let key of keysA) {
    if (!keysB.includes(key)) return false
    if (!deepEqual(a[key], b[key])) return false
  }

  return true
}

console.log(deepEqual({ a: 1 }, { a: 1 })) // true
console.log(deepEqual({ x: 1, y: 2 }, { y: 2, x: 1 })) // true
console.log(deepEqual({ a: { b: 2 } }, { a: { b: 2 } })) // true
console.log(deepEqual([1, 2, 3], [1, 2, 3])) // true
console.log(deepEqual(null, null)) // true
console.log(deepEqual({ a: 1 }, { a: 2 })) // false
console.log(deepEqual([1, 2], { 0: 1, 1: 2, length: 2 })) // false
console.log(deepEqual(null, undefined)) // false
