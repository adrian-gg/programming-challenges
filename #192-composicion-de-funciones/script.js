const functions = [(x) => x + 1, (x) => x * x, (x) => x * 2]

const compose = (fns) => (x) => {
  return fns.reduceRight((val, fn) => fn(val), x)
}

console.log(compose(functions)(1)) //5
console.log(compose(functions)(2)) //17
console.log(compose(functions)(3)) //37
console.log(compose(functions)(4)) //65
