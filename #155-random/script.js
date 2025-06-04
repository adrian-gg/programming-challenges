const getRandomNumberOptimized = (min, max, steps = 1) => {
  if (steps <= 0) {
    throw new Error("Steps must be a positive number.")
  }

  const firstMultiple = Math.ceil(min / steps) * steps
  const lastMultiple = Math.floor(max / steps) * steps
  if (firstMultiple > lastMultiple) {
    return null
  }

  const numberOfSteps = (lastMultiple - firstMultiple) / steps
  const randomStepIndex = Math.floor(Math.random() * (numberOfSteps + 1))
  return firstMultiple + randomStepIndex * steps
}

console.log(getRandomNumberOptimized(0, 10, 2)) // 0, 2, 4, 6, 8, 10
console.log(getRandomNumberOptimized(0, 10, 3)) // 0, 3, 6, 9
console.log(getRandomNumberOptimized(1, 10, 3)) // 3, 6, 9
console.log(getRandomNumberOptimized(5, 15, 4)) // 8, 12
console.log(getRandomNumberOptimized(1, 2, 5)) // null (no hay múltiplos)
