function partition(list, x) {
  if (typeof x !== "number" || list.some((n) => typeof n !== "number")) {
    return "Parámetros no válidos."
  }

  const less = []
  const greaterOrEqual = []

  for (const num of list) {
    if (num < x) {
      less.push(num)
    } else {
      greaterOrEqual.push(num)
    }
  }

  return [...less, ...greaterOrEqual]
}

console.log(partition([1, 4, 3, 2, 5, 2], 3)) //[1, 2, 2, 4, 3, 5]
console.log(partition([2, 1], 2)) //[1, 2]
