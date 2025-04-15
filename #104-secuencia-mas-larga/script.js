function longestConsecutiveSequence(nums) {
  const numSet = new Set(nums)
  let maxLength = 0

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num
      let currentLength = 1

      while (numSet.has(currentNum + 1)) {
        currentNum++
        currentLength++
      }

      maxLength = Math.max(maxLength, currentLength)
    }
  }

  return maxLength
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])) //4
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])) //9
console.log(longestConsecutiveSequence([1, 0, 1, 2])) //3
console.log(longestConsecutiveSequence([])) //0
