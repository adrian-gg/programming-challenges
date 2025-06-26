function mergeArrays(nums1, nums2) {
  const result = new Map()
  const nums = nums1.concat(nums2).sort(([ai, an], [bi, bn]) => ai - bi)

  for (const box of nums) {
    const [id, num] = box
    result.set(id, (result.get(id) || 0) + num)
  }

  return [...result.entries()]
}

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
) // [[1,6],[2,3],[3,2],[4,6]]
console.log(
  mergeArrays(
    [
      [2, 4],
      [3, 6],
      [5, 5],
    ],
    [
      [1, 3],
      [4, 3],
    ]
  )
) // [[1,3],[2,4],[3,6],[4,3],[5,5]]
