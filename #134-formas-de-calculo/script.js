function diffWaysToCompute(expression) {
  const memo = new Map()

  function compute(expr) {
    if (memo.has(expr)) return memo.get(expr)

    const results = []
    const getResult = (char, left, right) => {
      if (char === "+") return left + right
      else if (char === "-") return left - right
      else if (char === "*") return left * right
    }

    for (let i = 0; i < expr.length; i++) {
      const char = expr[i]

      if (char === "+" || char === "-" || char === "*") {
        const leftResults = compute(expr.slice(0, i))
        const rightResults = compute(expr.slice(i + 1))

        for (const left of leftResults) {
          for (const right of rightResults) {
            let res = getResult(char, left, right)
            results.push(res)
          }
        }
      }
    }

    if (results.length === 0) {
      results.push(Number(expr))
    }

    memo.set(expr, results)
    return results
  }

  return compute(expression)
}

console.log(diffWaysToCompute("2-1-1")) // Output: [0, 2]
console.log(diffWaysToCompute("2*3-4*5")) // Output: [-34, -14, -10, -10, 10]
