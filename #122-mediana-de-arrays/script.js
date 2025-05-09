function findMedianSortedArrays(nums1, nums2) {
  const merged = []
  let i = 0,
    j = 0

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++])
    } else {
      merged.push(nums2[j++])
    }
  }

  while (i < nums1.length) merged.push(nums1[i++])
  while (j < nums2.length) merged.push(nums2[j++])

  const len = merged.length
  if (len % 2 === 0) {
    return (merged[len / 2 - 1] + merged[len / 2]) / 2
  } else {
    return merged[Math.floor(len / 2)]
  }
}

console.log(findMedianSortedArrays([1, 3], [2])) //2
console.log(findMedianSortedArrays([1, 2], [100])) //2
console.log(findMedianSortedArrays([1, 3, 4, 5], [2])) //3

console.log(findMedianSortedArrays([1, 2], [3, 4])) //2.5
console.log(findMedianSortedArrays([1, 5], [2, 6])) //3.5
