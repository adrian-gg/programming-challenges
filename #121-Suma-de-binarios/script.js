function addBinary(a, b) {
  const binaryToDecimal = (binary) => {
    return binary
      .split("")
      .reverse()
      .reduce((acc, val, i) => {
        if (val === "1") return acc + 2 ** i
        return acc
      }, 0)
  }

  const decimalToBinary = (decimal) => {
    const bases = [1]
    let number = decimal

    while (bases[0] <= decimal) {
      bases.unshift(2 ** bases.length)
    }
    bases.shift()

    if (bases.length === 0) return 0

    const result = bases.map((num) => {
      if (num <= number) {
        number -= num
        return 1
      }
      return 0
    })

    return result.join("")
  }

  return decimalToBinary(binaryToDecimal(a) + binaryToDecimal(b))
}

console.log(addBinary("11", "1")) //100
console.log(addBinary("1010", "1011")) //10101
