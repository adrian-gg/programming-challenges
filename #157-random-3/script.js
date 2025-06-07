const getRandomSample = (list = [], weights = Array(list.length).fill(1)) => {
  if (list.length === 0) {
    throw new Error("El parámetro 'list' no puede estar vacio.")
  }

  if (weights.length !== list.length) {
    throw new Error(
      "El array 'weights' debe tener la misma longitud que el array 'list'."
    )
  }

  const totalWeight = weights.reduce((acc, val) => acc + val, 0)

  if (
    totalWeight === list.length ||
    totalWeight % list.length === 0 ||
    totalWeight <= 0
  ) {
    return list[Math.floor(Math.random() * list.length)]
  }

  const randomNumber = Math.random() * totalWeight

  let cumulativeWeight = 0
  for (let i = 0; i < list.length; i++) {
    cumulativeWeight += weights[i]
    if (randomNumber < cumulativeWeight) {
      return list[i]
    }
  }

  return list[list.length - 1]
}

console.log(getRandomSample(["cat", "dog", "fox"])) //cat (33.33%), dog (33.33%), fox (33.33%)
console.log(getRandomSample(["cat", "dog", "fox"], [0, 0, 0])) //cat (33.33%), dog (33.33%), fox (33.33%)
console.log(getRandomSample(["cat", "dog", "fox"], [1, 1, 10])) //cat (8.33%), dog (8.33%), fox (83.33%)
console.log(getRandomSample(["cat", "dog", "fox"], [1, 1, 0])) //cat (50%), dog (50%), fox (0%)
console.log(getRandomSample(["one", "two"], [5, 1])) //one (83.33%), two (16.66%)
