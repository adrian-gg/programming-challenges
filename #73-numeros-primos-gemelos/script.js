const isPrimeNumber = (num) => {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && i !== num) {
      return false
    }
  }
  return true
}

function findPrimeTwins(from, to) {
  const primes = []
  const primeTwins = []

  for (let i = from <= 1 ? 2 : from; i <= to; i++) {
    if (isPrimeNumber(i)) primes.push(i)
  }

  for (let i = 0; i < primes.length; i++) {
    const num = primes[i]
    if (num + 2 === primes[i + 1]) {
      primeTwins.push(`(${num}, ${primes[i + 1]})`)
    }
  }

  console.log(primeTwins.join(", "))
}

findPrimeTwins(0, 14) //(3, 5), (5, 7), (11, 13)
findPrimeTwins(0, 43) //(3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43)
findPrimeTwins(0, 44) //(3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43)
findPrimeTwins(0, 100) //(3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43), (59, 61), (71, 73)
findPrimeTwins(100, 1000) //(101, 103), (107, 109), (137, 139), (149, 151), (179, 181), (191, 193), (197, 199), (227, 229), (239, 241), (269, 271), (281, 283), (311, 313), (347, 349), (419, 421), (431, 433), (461, 463), (521, 523), (569, 571), (599, 601), (617, 619), (641, 643), (659, 661), (809, 811), (821, 823), (827, 829), (857, 859), (881, 883)
