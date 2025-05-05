function countAndSay(n) {
  let current = "1"

  for (let i = 1; i < n; i++) {
    let result = []
    let index = 0

    while (index < current.length) {
      const digit = current[index]
      let count = 0

      while (index < current.length && current[index] === digit) {
        index++
        count++
      }

      result.push(count.toString(), digit)
    }

    current = result.join("")
  }

  return current
}

console.log(countAndSay(1)) // "1"
console.log(countAndSay(2)) // "11"
console.log(countAndSay(3)) // "21"
console.log(countAndSay(4)) // "1211"
console.log(countAndSay(5)) // "111221"
