/* function searchInsert(nums, target) {
  let index = nums.indexOf(target)

  if (index === -1) {
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (num > target) return nums.indexOf(num)
    }

    return nums.length
  }

  return index
} */

function searchInsert(nums, target, i = nums.length - 1) {
  if (nums[i] < target) return i + 1
  else if (nums[i] > target) return searchInsert(nums, target, i - 1)
  return i
}

console.log(searchInsert([0, 3, 5, 6], 5)) // 2
console.log(searchInsert([1, 3, 5, 6], 2)) // 1
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
