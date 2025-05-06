function maximumGap(nums) {
  if (nums.length < 2) return 0

  let min = Math.min(...nums)
  let max = Math.max(...nums)
  if (min === max) return 0

  const n = nums.length
  const bucketSize = Math.max(1, Math.floor((max - min) / (n - 1)))
  const bucketCount = Math.floor((max - min) / bucketSize) + 1

  const buckets = new Array(bucketCount).fill(null).map(() => ({
    min: Infinity,
    max: -Infinity,
    used: false,
  }))

  for (let num of nums) {
    const idx = Math.floor((num - min) / bucketSize)
    buckets[idx].min = Math.min(buckets[idx].min, num)
    buckets[idx].max = Math.max(buckets[idx].max, num)
    buckets[idx].used = true
  }

  let prevMax = min
  let maxGap = 0

  for (let b of buckets) {
    if (!b.used) continue
    maxGap = Math.max(maxGap, b.min - prevMax)
    prevMax = b.max
  }

  return maxGap
}

console.log(maximumGap([3, 6, 9, 1])) // 3
console.log(maximumGap([10])) // 0
