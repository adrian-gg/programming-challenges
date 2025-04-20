Array.prototype.groupOf = function (groupSize) {
  if (this.length % groupSize !== 0) return []

  const size = Math.floor(this.length / groupSize)
  const arr = Array.from({ length: size }, () => [])

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < groupSize; j++) {
      arr[i].push(this[i * groupSize + j])
    }
  }

  return arr
}

let arr = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
]
console.log(arr.groupOf(5))
/*
[
 [19, 10, 3, 7, 9],
 [8, 5, 2, 1, 17],
 [16, 14, 12, 18, 6],
 [13, 11, 20, 4, 15]
]
 */

console.log(arr.groupOf(20))
/*
[
  [19, 10,  3,  7,  9,  8,  5, 2,  1, 17, 16, 14, 12, 18, 6, 13, 11, 20,  4, 15]
]
*/

console.log(arr.groupOf(3)) //[]
