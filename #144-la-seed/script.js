const getRandomSeed = (length = 8) => {
  // Generamos un seed aleatorio de 8 caracteres (AZ09)
  const seed = Array.from({ length }, () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }).join("")
  return seed
}

const seedToNumber = (seed) => {
  let num = 0
  for (let i = 0; i < seed.length; i++) {
    const c = seed.charCodeAt(i)
    num = (num * 31 + c) >>> 0
  }
  return num
}

const mulberry32 = (seed) => {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const seed = getRandomSeed()
const seedNum = seedToNumber(seed)
const rand = mulberry32(seedNum)

console.log(seed)
console.log(seedNum)
console.log(rand())
