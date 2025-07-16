function numberToWords(num) {
  if (num === 0) return "Zero"

  const belowTwenty = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ]

  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ]

  const thousands = [
    "",
    "Thousand",
    "Million",
    "Billion",
    "Trillion",
    "Quadrillion",
    "Quintillion",
    "Sextillion",
    "Septillion",
    "Octillion",
    "Nonillion",
    "Decillion",
  ]

  const helper = (n) => {
    if (n === 0) return ""
    else if (n < 20) return belowTwenty[n] + " "
    else if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10)
    else return belowTwenty[Math.floor(n / 100)] + " Hundred " + helper(n % 100)
  }

  let word = ""
  let i = 0

  while (num > 0) {
    if (num % 1000 !== 0) {
      word =
        helper(num % 1000) + (thousands[i] ? thousands[i] + " " : "") + word
    }
    num = Math.floor(num / 1000)
    i++
  }

  return word.trim()
}

console.log(numberToWords(1)) // "One"
console.log(numberToWords(42)) // "Forty Two"
console.log(numberToWords(1234567)) // "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
console.log(numberToWords(9876543210)) // "Nine Billion Eight Hundred Seventy Six Million Five Hundred Forty Three Thousand Two Hundred Ten"
