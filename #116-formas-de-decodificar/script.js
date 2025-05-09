function numDecodings(s) {
  if (s.length === 0 || s[0] === "0") return 0

  let dp = new Array(s.length + 1).fill(0)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= s.length; i++) {
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1]
    }
    let twoDigit = parseInt(s.slice(i - 2, i))
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2]
    }
  }

  return dp[s.length]
}

console.log(numDecodings("010")) //0
console.log(numDecodings("06")) //0
console.log(numDecodings("230")) //0
console.log(numDecodings("1001")) //0
console.log(numDecodings("301")) //0
console.log(numDecodings("10")) //1
console.log(numDecodings("110")) //1
console.log(numDecodings("12")) //2
console.log(numDecodings("11106")) //2
console.log(numDecodings("226")) //3
console.log(numDecodings("111")) //3
console.log(numDecodings("1111111111111111111111111")) //121393
