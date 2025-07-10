function tilingRectangle(n, m) {
  if (n === m) return "Debe ser un rectangulo."

  if (n > m) {
    ;[n, m] = [m, n]
  }

  const memo = new Map()
  let covered = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false))

  const getGridKey = (grid) => {
    return grid
      .map((row) => row.map((cell) => (cell ? "1" : "0")).join(""))
      .join("|")
  }

  const canPlace = (r, c, s, currentCovered) => {
    if (r + s > n || c + s > m) return false

    for (let i = r; i < r + s; i++) {
      for (let j = c; j < c + s; j++) {
        if (currentCovered[i][j]) return false
      }
    }

    return true
  }

  const toggleCells = (r, c, s, currentCovered, value) => {
    for (let i = r; i < r + s; i++) {
      for (let j = c; j < c + s; j++) {
        currentCovered[i][j] = value
      }
    }
  }

  function solve(currentCovered) {
    const key = getGridKey(currentCovered)
    if (memo.has(key)) return memo.get(key)

    let r = -1,
      c = -1
    let allCovered = true
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (!currentCovered[i][j]) {
          r = i
          c = j
          allCovered = false
          break
        }
      }
      if (!allCovered) break
    }

    if (allCovered) return { count: 0, squares: [] }

    let minResult = { count: Infinity, squares: [] }

    for (let s = Math.min(n - r, m - c); s >= 1; s--) {
      if (canPlace(r, c, s, currentCovered)) {
        toggleCells(r, c, s, currentCovered, true)
        const subResult = solve(currentCovered)

        toggleCells(r, c, s, currentCovered, false)

        if (1 + subResult.count < minResult.count) {
          minResult.count = 1 + subResult.count
          minResult.squares = [s, ...subResult.squares]
        }
      }
    }

    memo.set(key, minResult)
    return minResult
  }

  const finalResult = solve(covered)

  return finalResult
}

console.log(tilingRectangle(2, 3)) // { count: 3, squares: [ 2, 1, 1 ] }
console.log(tilingRectangle(5, 8)) // { count: 5, squares: [ 5, 3, 2, 1, 1 ] }
console.log(tilingRectangle(11, 13)) // { count: 6, squares: [ 7, 6, 5, 4, 4, 1 ] }
