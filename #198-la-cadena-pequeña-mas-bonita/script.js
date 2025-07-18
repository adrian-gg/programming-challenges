function smallestBeautifulString(s, k) {
  const n = s.length
  const arr = s.split("")

  const isBeautifulChar = (idx, char, currentArr) => {
    if (idx > 0 && currentArr[idx - 1] === char) {
      return false
    }

    if (idx > 1 && currentArr[idx - 2] === char) {
      return false
    }

    return true
  }

  for (let i = n - 1; i >= 0; i--) {
    for (
      let charCode = arr[i].charCodeAt(0) + 1;
      charCode < "a".charCodeAt(0) + k;
      charCode++
    ) {
      const nextChar = String.fromCharCode(charCode)
      arr[i] = nextChar

      if (isBeautifulChar(i, nextChar, arr)) {
        let possible = true

        for (let j = i + 1; j < n; j++) {
          let foundCharForJ = false

          for (
            let fillCharCode = "a".charCodeAt(0);
            fillCharCode < "a".charCodeAt(0) + k;
            fillCharCode++
          ) {
            const fillChar = String.fromCharCode(fillCharCode)
            arr[j] = fillChar

            if (isBeautifulChar(j, fillChar, arr)) {
              foundCharForJ = true
              break
            }
          }

          if (!foundCharForJ) {
            possible = false
            break
          }
        }

        if (possible) {
          return arr.join("")
        }
      }
    }

    arr[i] = "a"
  }

  return ""
}

console.log(smallestBeautifulString("abcz", 26)) // "abda"
console.log(smallestBeautifulString("dc", 4)) // ""
