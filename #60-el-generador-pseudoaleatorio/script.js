function getRandomNumber(min, max) {
  let hrTime = process.hrtime()
  return ((new Date().getMilliseconds() + hrTime[1]) % (max - min + 1)) + min
}

for (let i = 0; i < 100; i++) {
  console.log(getRandomNumber(0, 100))
}
