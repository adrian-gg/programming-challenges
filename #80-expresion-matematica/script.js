function checkMathExp(expression) {
  const components = expression.split(" ")
  const operators = "+-*/%"

  if (components.length < 3 || components.length % 2 === 0) return false

  for (let i = 0; i < components.length; i++) {
    const element = components[i]
    if (i % 2 === 0 && isNaN(element * 1)) {
      return false
    } else if (i % 2 !== 0 && !operators.includes(element)) {
      return false
    }
  }
  return true
}

console.log(checkMathExp("3 + 5")) //true
console.log(checkMathExp("-3 + 5")) //true
console.log(checkMathExp("3 + 5 - 1 / 4 % 8")) //true
console.log(checkMathExp("3 a 5")) //false
console.log(checkMathExp("- 3 + 5")) //false
console.log(checkMathExp("-3 a 5")) //false
console.log(checkMathExp("-3+5")) //false
