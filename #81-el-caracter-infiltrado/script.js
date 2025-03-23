function infiltratedCharacters(textOne, textTwo) {
  if (
    typeof textOne !== "string" ||
    typeof textTwo !== "string" ||
    textOne.length !== textTwo.length
  )
    return "Parámetros no válidos"

  const result = []

  for (let i = 0; i < textOne.length; i++) {
    if (textOne[i] !== textTwo[i]) result.push(textTwo[i])
  }

  return [...new Set(result)]
}

console.log(infiltratedCharacters("Hola mundo", "Hole mondo")) //["e", "o"]
console.log(infiltratedCharacters("Me llamo adrian-gg", "Me llemo adrian-jj")) //["e", "j"]
console.log(
  infiltratedCharacters("Me llamo.Adrián García", "Me llamo adrian garcía") //[" ", "a", "g"]
)
console.log(
  infiltratedCharacters("Me llamo.Adrián García", "Me llamo adrian garcía ") //Parámetros no válidos
)
console.log(infiltratedCharacters("", "")) //[]
