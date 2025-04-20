Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) {
    return []
  }

  const arr = Array.from({ length: rowsCount }, () => [])

  for (let col = 0; col < colsCount; col++) {
    for (let row = 0; row < rowsCount; row++) {
      const i = col * rowsCount + (col % 2 === 0 ? row : rowsCount - 1 - row)
      arr[row].push(this[i])
    }
  }

  return arr
}

let arr = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
]
console.log(arr.snail(5, 4))
/*
[
 [19, 17, 16, 15], 
 [10, 1, 14, 4], 
 [3, 2, 12, 20], 
 [7, 5, 18, 11], 
 [9, 8, 6, 13]
]
 */

arr = [1, 2, 3, 4]
console.log(arr.snail(1, 4)) //[[1, 2, 3, 4]]

arr = [1, 3]
console.log(arr.snail(2, 2)) //[]
