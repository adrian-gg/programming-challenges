const compareVersion = (ver1, ver2) => {
  const ver1F = ver1.split(".").map(Number)
  const ver2F = ver2.split(".").map(Number)

  for (let i = 0; i < Math.max(ver1F.length, ver2F.length); i++) {
    const n1 = ver1F[i] ?? 0
    const n2 = ver2F[i] ?? 0
    if (n1 !== n2) return n1 > n2 ? 1 : -1
  }

  return 0
}

console.log(compareVersion("1.2", "1.10")) // -1
console.log(compareVersion("1.01", "1.001")) // 0
console.log(compareVersion("1.0", "1.0.0.0")) // 0
console.log(compareVersion("1.0.1", "1")) // 1
console.log(compareVersion("1.0.0", "1.0")) // 0
console.log(compareVersion("2.0", "1.9.9")) // 1
