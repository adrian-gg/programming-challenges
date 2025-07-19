/* function findMatrix(nums) {
  const res = [[]]
  let row = 0

  nums.forEach((num) => {
    while (res[row].includes(num)) {
      row++
      if (!res[row]) res.push([])
    }

    res[row].push(num)
    row = 0
  })

  return res
} */

function findMatrix(nums) {
  const frequencyMap = new Map()
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
  }

  let maxFrequency = 0
  for (const count of frequencyMap.values()) {
    if (count > maxFrequency) {
      maxFrequency = count
    }
  }

  const result = Array.from(
    {
      length: maxFrequency,
    },
    () => []
  )

  for (const [num, count] of frequencyMap.entries()) {
    for (let i = 0; i < count; i++) {
      result[i].push(num)
    }
  }

  return result
}

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1])) // [[1,3,4,2],[1,3],[1]]
console.log(findMatrix([1, 2, 3, 4])) // [[1,2,3,4]]
console.log(findMatrix([1, 3, 4, 1, 2, 3, 1, 1, 2, 3, 4])) // [ [ 1, 3, 4, 2 ], [ 1, 3, 2, 4 ], [ 1, 3 ], [ 1 ] ]
