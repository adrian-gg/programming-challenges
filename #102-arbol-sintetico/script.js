function isSymmetric(root) {
  if (!root) return true;

  let exponentialCount = 0

  while (root.length > 0 && exponentialCount >= 0) {
    const row = root.splice(0, 2**exponentialCount).map(v=>v === null ? 0 : v)
    
    if(row.join("") !== [...row].reverse().join("")) {
      exponentialCount = -1
      return false
    }

    exponentialCount++
  }

  return true
}

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3])) //true
console.log(isSymmetric([1, 2, 2, null, 3, null, 3])) //false
console.log(isSymmetric([1, 2, 2, 3, null, null, 3])) //true
