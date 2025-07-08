const getRandomSeed = (length = 8) => {
  const newSeed = Array.from({ length }, () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  ).join("")
  return newSeed
}

const seedToNumber = (seed) => {
  let num = 0
  for (let i = 0; i < seed.length; i++) {
    num = (num * 31 + seed.charCodeAt(i)) >>> 0
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

const getRandomInt = (min, max, rand) =>
  Math.floor(rand() * (max - min + 1)) + min

function generatePixelart(seed) {
  const COLORS = ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫", "⬜"]
  const SIZES = [5, 7, 9]

  const seedNum = seedToNumber(seed)
  const rand = mulberry32(seedNum)

  const getRandomColor = () => COLORS[Math.floor(rand() * COLORS.length)]
  const getRandomSize = () => SIZES[Math.floor(rand() * SIZES.length)]

  const randomColor = getRandomColor()
  const randomSize = getRandomSize()
  let pixelart = Array.from({ length: randomSize }, () =>
    Array.from({ length: (randomSize - 1) / 2 }, () =>
      getRandomInt(0, 1, rand) ? randomColor : "⬛"
    )
  )
    .map((row) =>
      [
        ...row,
        getRandomInt(0, 1, rand) ? randomColor : "⬛",
        ...[...row].reverse(),
      ].join("")
    )
    .join("\n")

  console.log(`SEED: ${seed}`)
  return pixelart
}

console.log(generatePixelart("XYZKGSMQ"))
console.log(generatePixelart(getRandomSeed()))
