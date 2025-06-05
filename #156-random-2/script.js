const getRandomBoolean = (weight = 0.5) => {
  if (weight < 0 || weight > 1) {
    throw new Error("Parámetro no válido.")
  }

  return Math.random() <= weight
}

console.log(getRandomBoolean(0)) //false
console.log(getRandomBoolean(1)) //true
console.log(getRandomBoolean(0.7)) //false (30%) true (70%)
console.log(getRandomBoolean()) //false (50%) true (50%)
