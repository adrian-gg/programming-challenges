function plantingInGarden(n, paths) {
  const FLOWERS = "ABCD"
  const objectPaths = {}
  const res = new Array(n).fill(0)
  let flowerCount = 0

  paths.forEach(([g1, g2]) => {
    objectPaths[g1] = objectPaths[g1] || []
    objectPaths[g1].push(g2)
    objectPaths[g2] = objectPaths[g2] || []
    objectPaths[g2].push(g1)
  })

  //console.log(objectPaths)

  for (let i = 1; i <= n; i++) {
    flowerCount = 0
    for (let j = 1; j < i; j++) {
      if (objectPaths[i].includes(j)) {
        flowerCount = FLOWERS.indexOf(res[j - 1]) + 1
      }
    }

    res[i - 1] = FLOWERS[flowerCount]
  }

  return res
}

console.log(
  plantingInGarden(3, [
    [1, 2],
    [2, 3],
    [3, 1],
  ])
) //[ 'A', 'B', 'C' ]
console.log(
  plantingInGarden(3, [
    [1, 2],
    [1, 3],
  ])
) //[ 'A', 'B', 'B' ]
console.log(
  plantingInGarden(4, [
    [1, 2],
    [3, 4],
  ])
) //[ 'A', 'B', 'A', 'B' ]
console.log(
  plantingInGarden(4, [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 1],
    [1, 3],
    [2, 4],
  ])
) //[ 'A', 'B', 'C', 'D' ]
console.log(
  plantingInGarden(4, [
    [1, 2],
    [1, 3],
    [1, 4],
  ])
) //[ 'A', 'B', 'B', 'B' ]
