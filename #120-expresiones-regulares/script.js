function isMatch(s, p) {
  if (!p.includes(".") && !p.includes("*")) {
    return s === p
  }

  let param = 0

  for (let i = 0; i < s.length; i++) {
    const letter = s[i]

    if (p[param] === "*") {
      param--
    }

    if (letter !== p[param] && p[param] !== ".") {
      param += 2
      if (!p[param] || (letter !== p[param] && p[param] !== ".")) return false
    }

    if (
      i === s.length - 1 &&
      param !== p.length - 1 &&
      (p[param + 1] !== "*" || p.length - 1 - param >= 2)
    )
      return false

    param++
  }

  return true
}

console.log(isMatch("aa", "a")) //false
console.log(isMatch("aa", "a*")) //true
console.log(isMatch("ab", ".*")) //true
