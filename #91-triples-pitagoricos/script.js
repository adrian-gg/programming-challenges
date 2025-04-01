function pythagoreanTriples(max) {
  const triples = []

  for (let a = 1; a <= max; a++) {
    for (let b = a + 1; b <= max; b++) {
      let c = (a ** 2 + b ** 2) ** 0.5
      if (c > max) break
      if (Number.isInteger(c)) triples.push([a, b, c])
    }
  }

  return triples
}

console.log(pythagoreanTriples(9)) //[ [ 3, 4, 5 ] ]
console.log(pythagoreanTriples(10)) //[ [ 3, 4, 5 ], [ 6, 8, 10 ] ]
console.log(pythagoreanTriples(20)) //[ [ 3, 4, 5 ], [ 5, 12, 13 ], [ 6, 8, 10 ], [ 8, 15, 17 ], [ 9, 12, 15 ], [ 12, 16, 20 ]]
