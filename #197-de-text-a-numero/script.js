function wordsToNumber(words) {
  const smallNumbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
  }

  const tens = {
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  }

  const scales = {
    hundred: 100,
    thousand: 1000,
    million: 1_000_000,
    billion: 1_000_000_000,
    trillion: 1_000_000_000_000,
    quadrillion: 1_000_000_000_000_000,
    quintillion: 1_000_000_000_000_000_000,
    // Puedes añadir más si lo deseas
  }

  let result = 0
  let current = 0

  words
    .toLowerCase()
    .replace(/-/g, " ")
    .split(/\s+/)
    .forEach((word) => {
      if (smallNumbers.hasOwnProperty(word)) {
        current += smallNumbers[word]
      } else if (tens.hasOwnProperty(word)) {
        current += tens[word]
      } else if (word === "hundred") {
        current *= 100
      } else if (scales.hasOwnProperty(word)) {
        current *= scales[word]
        result += current
        current = 0
      }
    })

  return result + current
}

console.log(wordsToNumber("One")) // 1
console.log(wordsToNumber("Forty Two")) // 42
console.log(wordsToNumber("One Hundred Twenty Three")) // 123
console.log(wordsToNumber("Two Million One Hundred")) // 2000100
