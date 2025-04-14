function candies(children) {
  let candies = []

  children.forEach((child, i) => {
    candies[i] = 1
    if (children[i - 1] < child) candies[i] += candies[i - 1] ?? 1
    if (children[i + 1] < child) candies[i] += candies[i + 1] ?? 1
  })

  return candies.reduce((acc, val) => acc + val, 0)
}

console.log(candies([1, 0, 2])) //5
console.log(candies([1, 2, 2])) //4
console.log(candies([])) //0
