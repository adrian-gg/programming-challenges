function getSmallestStringManualSort(s) {
  const arrS = s.split("").map(Number)
  const n = arrS.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arrS[i] > arrS[j]) {
        let temp = arrS[i]
        arrS[i] = arrS[j]
        arrS[j] = temp
      }
    }
  }
  return arrS.join("")
}

console.log(getSmallestStringManualSort("321")) // 123
console.log(getSmallestStringManualSort("934")) // 349
console.log(getSmallestStringManualSort("45320")) // 02345
console.log(getSmallestStringManualSort("021")) // 012
