function triforce(size) {
  const triangleTop = new Array(size)
    .fill("*")
    .map((r, i) => r + "**".repeat(i))
  const trianglesBot = triangleTop.map(
    (r, i) =>
      r +
      " ".repeat(triangleTop[Math.abs(i - (triangleTop.length - 1))].length) +
      r
  )
  const triforce = triangleTop.concat(trianglesBot)
  triforce.forEach((r, i) =>
    console.log(" ".repeat(Math.abs(i - (triforce.length - 1))) + r)
  )
}

triforce(1)
triforce(2)
triforce(3)
triforce(30)
