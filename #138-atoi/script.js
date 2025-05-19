function myAtoi(s) {
  const INT_MAX = 2 ** 31 - 1
  const INT_MIN = -(2 ** 31)

  const array = s.trimStart().split("")
  let i = 0
  let sign = 1
  let result = 0

  if (array[0] === "-") {
    sign = -1
    array.shift()
  } else if (array[0] === "+") {
    array.shift()
  }

  while (i < array.length) {
    const digit = parseInt(array[i])

    if (isNaN(digit)) break

    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN
    }

    result = result * 10 + digit
    i++
  }

  return result * sign
}

console.log(myAtoi("42")) //42
console.log(myAtoi(" -042")) //-42
console.log(myAtoi("1337c0d3")) //1337
console.log(myAtoi("0-1")) //0
console.log(myAtoi("words and 987")) //0
console.log(myAtoi("+1")) // 1
console.log(myAtoi("-91283472332")) // -2147483648
console.log(myAtoi("91283472332")) // 2147483647
